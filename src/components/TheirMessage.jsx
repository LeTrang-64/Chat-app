import React from "react";
import PropTypes from "prop-types";

TheirMessage.propTypes = {
  lastMessage: PropTypes.object,
  message: PropTypes.object,
};

function TheirMessage(props) {
  const { lastMessage, message } = props;
  const isFirstMess =
    !lastMessage || lastMessage.sender.username !== message.sender.username; //neu la tin nhan dau tien hoac cua 2 ng khac nhau thi hien avatar

  return (
    <div className="message-row">
      {isFirstMess && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: `url(${message?.sender?.avatar})`,
          }}
        ></div>
      )}
      {message?.attachments?.length > 0 ? (
        //neu message la hinh anh hoac ko phai text
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: "left", marginLeft: isFirstMess ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",

            backgroundColor: "#3B2A50",
            marginLeft: isFirstMess ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
