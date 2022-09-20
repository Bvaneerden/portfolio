// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
// import { images } from '../../../Images'

import RubberDuckIcon from './RubberDuckIcon'
// import MyCustomChatMessage from './RubberDuckIcon'


const botName = 'a Rubber Duck';
// const duckAvatar = <img src={images.other[10].image} alt="" />

const config = {
  initialMessages: [createChatBotMessage(`Quack! I'm ${botName}, Please talk to me about all your issues`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'teal',
    },
    chatButton: {
      backgroundColor: 'purple',
    },
  },
  customComponents: {
  //    // Replaces the default header
  //   header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
  //   // Replaces the default bot avatar
    botAvatar: (props) => <RubberDuckIcon {...props} />,
  //   // Replaces the default bot chat message container
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
  //   // Replaces the default user icon
  //   userAvatar: (props) => <MyCustomAvatar {...props} />,
  //   // Replaces the default user chat message
  //   userChatMessage: (props) => <MyCustomUserChatMessage {...props} />

  }

};

export default config;

// https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/advanced/configuration