import MessageInput from "../../common/messageInput"

const DirectMessage = () => {
	return (
		<div className='max-w-screen-md my-12 mx-auto px-12 py-6 rounded-lg bg-slate-800'>
			<div className='chat chat-start'>
				<div className='chat-bubble'>
					It's over bitch <br />I have the high ground.
				</div>
			</div>

			<div className='chat chat-end'>
				<div className='chat-bubble'>You underestimate my power!</div>
			</div>

			<MessageInput />
		</div>
	)
}

export default DirectMessage
