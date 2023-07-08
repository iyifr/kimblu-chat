import { useState, useEffect } from "react"
import { Socket, io } from "socket.io-client"
import MessageInput from "./messageInput"
import React from "react"

type Message = {
	message: string
	recieved: boolean
}

const DirectMessage = () => {
	const [socket, setSocket] = useState<null | Socket>(null)
	const [message, setMessage] = useState("")
	const [allMessages, setAllMessages] = useState<Array<Message>>([])

	useEffect(() => {
		const newSocket = io("http://localhost:5000")
		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [])

	useEffect(() => {
		if (!socket) return

		socket.on("message-from-server", (data) => {
			setAllMessages(() => [
				...allMessages,
				{ message: data.message, recieved: true },
			])
			console.log(allMessages)
		})
	}, [socket, allMessages])

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (message !== "") {
			socket?.emit("send-message", { message })
			setMessage("")
			setAllMessages((prev) => [...prev, { message, recieved: false }])
		}
	}

	return (
		<div className='max-w-screen-lg my-12 mx-auto px-12 py-6 rounded-lg bg-slate-800'>
			{allMessages.map((msg, index) =>
				!msg.recieved ? (
					<ChatBubble data={msg} key={index} />
				) : (
					<ChatBubble2 data={msg} key={index} />
				)
			)}

			<MessageInput message={message} setMessage={setMessage} socket={socket} />
			<button
				className='btn btn-outline btn-success my-2'
				onClick={handleSubmit}
				type='submit'
				disabled={message.length < 1}
			>
				Send
			</button>
		</div>
	)
}

export default DirectMessage

interface ChatBubbleProps {
	data: Message
}

const ChatBubble = ({ data }: ChatBubbleProps) => {
	return (
		<>
			<div className='chat chat-end'>
				<div className='chat-bubble chat-bubble-primary max-w-screen-sm'>
					{data.message.length > 18 ? (
						<p> {data.message} </p>
					) : (
						<>
							<p>
								{data.message.slice(0, 25)} <br />{" "}
								{data.message.slice(26, data.message.length)}
							</p>
						</>
					)}
				</div>
			</div>
		</>
	)
}
const ChatBubble2 = ({ data }: ChatBubbleProps) => {
	return (
		<>
			<div className='chat'>
				<div className='chat-bubble chat-bubble-accent max-w-screen-lg'>
					{data.message}
				</div>
			</div>
		</>
	)
}
React.memo(ChatBubble)
React.memo(ChatBubble2)