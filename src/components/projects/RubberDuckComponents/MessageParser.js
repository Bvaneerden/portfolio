// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else if (message.includes('bye') ||
    message.includes('goodbye') ||
    message.includes('exit') ||
    message.includes('quit')) {
      actions.handleGoodbye(message)

    } else {
      actions.handleResponse(message)
    }

  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;



<img src="" alt="" />