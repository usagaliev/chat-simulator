import './style.css'

const Message = ({ sender, message }) => {

	const { text, sentAt, sentBy, users } = message;

	const isUser = sentBy === users[0];

	const messageClass = `Message ${isUser ? 'sent' : 'received'}`;

	const bubbleClass = `bubble ${isUser  ? 'sent' : 'received'}`;

	return (
		<div className={messageClass}>
			<div className="content">{text}</div>
			<div className={`meta ${isUser ? 'sent' : 'received'}`}>
				<span className="sender">{sentBy}</span>
				<span className="time">{new Date(sentAt).toLocaleTimeString()}</span>
				<div className={bubbleClass}>
					<img
						className='h-10 w-10 rounded-full'
						src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Message;
