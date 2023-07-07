import { useState } from "react"
const MessageInput = () => {
	const [value, setValue] = useState("")
	const [error, setError] = useState(true)

	function handleChange(event: {
		target: { value: React.SetStateAction<string> }
	}) {
		if (event.target.value.length <= 600) {
			setError(false)
			setValue(event.target.value)
		}
		if (event.target.value === "") {
			setError(true)
		}
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (value !== "") {
			console.log(value)
			setValue("")
		}
	}

	return (
		<div className='w-full max-w-screen-sm'>
			<label
				className='block uppercase tracking-wide text-accent text-xs font-bold my-2'
				htmlFor='message'
			>
				Type your message
			</label>
			<textarea
				className='textarea py-0 px-1 w-full mx-auto text-lg'
				id='message'
				maxLength={600}
				onChange={handleChange}
				value={value}
			/>
			<p className='text-accent text-xs italic'>Max 600 characters</p>
			<button
				className='btn btn-outline btn-success my-5'
				onClick={handleSubmit}
				type='submit'
				disabled={error === true}
			>
				Send
			</button>
		</div>
	)
}

export default MessageInput
