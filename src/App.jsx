import * as React from "react";

import ChatBot from './components/Chatbot'
import Chat from "./components/Chat";

import './App.css'


const App = () => {
  return (
    <div className="App">
      <header className="chat-wrapper">
         <Chat />
      </header>
    </div>
  );
}

export default App;
