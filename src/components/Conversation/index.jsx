import Message from "./Message";
import './style.css'

const Conversation= ({ messages }) => {
	return (
		<div className='conversation'>
			{messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	);
}

export default Conversation;