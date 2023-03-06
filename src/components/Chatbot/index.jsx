import React, { useState } from 'react';
import {OpenAIApi, Configuration} from "openai";

const configuration = new Configuration({
	apiKey: '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'
})

const openai = new OpenAIApi(configuration);

const generateImage = async (userInput) => {
	const prompt = `User: ${userInput}\nAI: `;
	const res = await openai.createCompletion(
		{
			model: 'text-davinci-002',
			prompt,
			n: 1,
			temperature: 0.5,
		}
	)
	if ('choices' in res) {
		return res.choices[0].text.trim()
	} return "Sorry, didn't work"
	// const response = ;
	// return response;
}

const openAIKey = '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';

function ChatBot() {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const prompt = `User: ${input}\nAI: `;

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + String(openAIKey)
		},
		body: JSON.stringify({
			"model": "text-davinci-003",
			"prompt": prompt,
			"max_tokens": 7,
			"temperature": 0,
		})
	};
		async function handleSubmit(event) {
		event.preventDefault();
		fetch('https://api.openai.com/v1/completions', requestOptions)
			.then(response => response.json())
			.then(data => {
				const result = data.choices[0].text.trim()
				setOutput(result);
				setInput('');
			}).catch(err => {
			console.log("Ran out of tokens for today! Try tomorrow!");
		});
		// const result = await generateImage(input);
		// console.log(result, 'response');
		//
	}

	// async function generateResponse(userInput) {
	// 	const prompt = `User: ${userInput}\nAI: `;
	// 	const completions = await openai.complete({
	// 		engine: 'davinci',
	// 		prompt,
	// 		maxTokens: 60,
	// 		n: 1,
	// 		stop: '\n',
	// 		temperature: 0.5,
	// 	});
	//
	// 	const response = completions.choices[0].text.trim();
	// 	return response;
	// }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Type your message here..."
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
			<p>{output}</p>
		</div>
	);
}

export default ChatBot;
