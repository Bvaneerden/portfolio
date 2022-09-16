import React from "react";
import { images } from '../../../Images'

const RubberDuckIcon = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container"
      style={{ background: "none" }}>
        <img className="BotAvatarImg" alt="BotAvatar" src={images.other[10].image}  />

      </div>
    </div>
  );
};

export default RubberDuckIcon;