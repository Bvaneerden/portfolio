import { useState } from "react";
import React from "react";
import Chatbot from "react-chatbot-kit";
import { images } from '../../../Images'

import './RubberDuck.css';

import config from "./Config";
import messageParser from "./MessageParser";
import actionProvider from "./ActionProvider";
import 'react-chatbot-kit/build/main.css'


function App() {
const [showBot, toggleBot] = useState(true);

const saveMessages = (messages, HTMLString) => {
  localStorage.setItem('chat_messages', JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem('chat_messages'));
  return messages;
};

return (
  <div className='RubberDuckPage'>
    {/* <div className="duck">duck</div>
    <img src={images.other[10].image} alt="" /> */}
    {showBot && (
      <Chatbot
        config={config}
        actionProvider={actionProvider}
        messageHistory={loadMessages()}
        messageParser={messageParser}
        saveMessages={saveMessages}
        headerText='Rubber Ducky Debugging Tool'
        placeholderText='Quack your message here'
      />
    )}
    {/* <button onClick={() => toggleBot((prev) => !prev)}>Show Duck Chat</button> */}
  </div>
);
}

export default App;

// function RubberDuck() {
//   const [input, setInput] = useState('')
//   const [conversation, setConversation] = useState('')
//   const welcome = ['Its so nice to see you!', '']

//   const responses = ['That is very interesting', 'Quack', 'Tell me more', 'did you try turning it off and on again', ' Obviously you need a cuppa', 'When is the last time you went for a walk to clear your head', 'oh really', 'hmmmm', 'This looks like great weather for a swim', 'Oh well, maybe we should get a snack', 'Could you please go into more details', 'Ok so what is it suposed to do?']

//   function handleSubmit(e) {
//     e.preventDefault()
//     const newContent = e.target.value

//     setConversation(newContent)
//   }

//   function handleInput(e) {
//     e.preventDefault()
//     const newContent = e.target.value

//     console.log(newContent)

//     setInput(newContent)
//   }





//   return (
//     <div className="RubberDuckPage">
//       <h1>Rubber Duck</h1>

//       <form action="" onSubmit={handleSubmit}>

//         <input type="text" onChange={handleInput} value={input} />
//       </form>

//       <div className="rdChatWindow">
//         <div className="rdChatHeader"></div>
//         <div className="rdChatBody"></div>


//       </div>



//     </div>
//   )
// }

// export default RubberDuck

