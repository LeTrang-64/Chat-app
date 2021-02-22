import React from "react";
import PropTypes from "prop-types";

MyMessage.propTypes = {};

function MyMessage(props) {
  const { message } = props;

  if (message?.attachments?.length > 0) {
    //neu message la hinh anh hoac ko phai text
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "pink",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;
