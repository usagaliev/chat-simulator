import * as React from 'react'
import { useState } from 'react';
import {orderBy} from 'lodash'

import Conversation from "../Conversation";
import Input from "../Input";
import Button from "../Button";
import Switcher from "../Switcher";


const Chat = () => {
	const users = ['me', 'John']

	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [user, setUser] = useState(users[1])


	function handleSubmit() {
		setMessages([...messages, { sentBy: user, text: inputValue, sentAt: Date(), id: messages.length, users }]);
		setInputValue('');
	}

	const onKeyPressInput = (e) => {
		if(e.key === 'Enter') {
			handleSubmit()
		}
	}

	const onChangeInput = (e) => {
		setInputValue(e.target.value)
	}

	const handleSwitcher = (e) => {
		e.target.checked ? setUser(users[0]) : setUser(users[1])
	}

	const sortedMessages = orderBy(messages, (m) => m.id, ['desc'])

	return (
		<div className="chat border-2 rounded">
			<div className='m-2'>
				<Conversation messages={sortedMessages} />
				<div className="input-container">
					<Input value={inputValue} onChange={onChangeInput} onKeyPress={onKeyPressInput} />
					<Button onClick={handleSubmit} />
					<Switcher onChange={handleSwitcher} value={user} />
				</div>
			</div>
		</div>
	);
}

export default Chat;