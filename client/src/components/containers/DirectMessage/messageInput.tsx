import { useState } from "react"
import { Socket } from "socket.io-client"

type InputProps = {
	message: string
	setMessage: React.Dispatch<React.SetStateAction<string>>
	socket: Socket | null
}
const MessageInput = ({ message, setMessage, socket }: InputProps) => {
	const [error, setError] = useState(true)

	function handleChange(event: {
		target: { value: React.SetStateAction<string> }
	}) {
		if (event.target.value.length <= 600) {
			setError(false)
			setMessage(event.target.value)
			socket?.emit("typing")
		}
		if (event.target.value === "") {
			setError(true)
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
				{error ? <b className='text-warning'>Message cannot be empty</b> : ""}
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
