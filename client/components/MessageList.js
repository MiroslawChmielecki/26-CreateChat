import React from "react";
import styles from "./MessageList.css";
import PropTypes from "prop-types";

const Message = props => (
  <div className={styles.Message}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {props.messages.map((message, i) => {
      return <Message key={i} from={message.from} text={message.text} />;
    })}
  </div>
);

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
