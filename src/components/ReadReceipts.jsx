import React from "react";
import PropTypes from "prop-types";

ReadReceipts.propTypes = {};

function ReadReceipts(props) {
  const { chat, message, myMessage } = props;

  function peopleRead() {
    // console.log(chat);
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: myMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          ></div>
        )
    );
  }
  return <div>{peopleRead()}</div>;
}

export default ReadReceipts;
