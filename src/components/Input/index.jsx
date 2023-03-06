const Input= ({ value, onChange, onKeyPress }) => {
	return (
		<input
			className="input"
			type="text"
			placeholder="Type your message..."
			value={value}
			onChange={onChange}
			onKeyPress={onKeyPress}
		/>
	);
}

export default Input;