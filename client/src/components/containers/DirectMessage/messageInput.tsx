import { useState } from "react"
import { Socket } from "socket.io-client"

type InputProps = {
	message: string
	setMessage: React.Dispatch<React.SetStateAction<string>>
	socket: Socket | null
}

const MessageInput = ({ message, setMessage, socket }: InputProps) => {
	const [error, setError] = useState(true)
	const [typingTimer, setTypingTimer] = useState<null | number>(null)

	// handlechange emit
	function handleChange(event: {
		target: { value: React.SetStateAction<string> }
	}) {
		if (event.target.value.length <= 600) {
			setError(false)
			setMessage(event.target.value)
			socket?.emit("typing-started")

			// check if user has stopped typing and log / emit event
			if (typingTimer) clearTimeout(typingTimer)
			setTypingTimer(setTimeout(() => socket?.emit("typing-stopped"), 700))
		}
	}

	return (
		<div className='w-full'>
			<label
				className='block uppercase tracking-wide text-accent text-xs font-bold my-2'
				htmlFor='message'
			>
				Type your message
			</label>
			<p className='text-accent text-xs italic'>
				{message.length} / 500 characters
				{error ? (
					<b className='text-warning mx-3'>Message cannot be empty</b>
				) : (
					""
				)}
			</p>
			<input
				type='text'
				placeholder='Type here'
				className='input input-bordered input-accent w-full mx-auto my-3'
				maxLength={500}
				onChange={handleChange}
				value={message}
			/>
		</div>
	)
}

export default MessageInput
