import React from "react";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";
import ReadReceipts from "./ReadReceipts";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat]; //????????????????????????/
  // console.log("Activechat:", activeChat);
  console.log("chat:", messages);
  const renderMessage = () => {
    const keys = Object.keys(messages); //lay ra id cua cac message
    return keys.map((key, index) => {
      const message = messages[key];
      // console.log(messages[key]);
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const myMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {myMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <ReadReceipts
            chat={chat}
            message={message}
            myMessage={myMessage}
            style={{
              marginRight: myMessage ? "18px" : "0px",
              marginLeft: myMessage ? "0px" : "68px",
            }}
          ></ReadReceipts>
        </div>
      );
    });
  };

  if (!chat) return "loading....";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle"></div>
        {chat.people.map((person) => ` ${person.person.username}`)}
      </div>
      {renderMessage()}
      <div style={{ height: "100px" }}></div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;
