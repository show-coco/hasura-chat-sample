import React, { FC } from "react";
import moment from "moment";
import { Messages } from "../types/Message";

type Props = {
  isNew: boolean;
  messages: Messages;
  username: string;
};

const MessageList: FC<Props> = ({ isNew, messages }) => {
  if (messages === undefined) return <p>メッセージがありません</p>;

  return (
    <div className={isNew ? "messageWrapperNew" : "messageWrapper"}>
      {messages.map((m) => {
        return (
          <div key={m.id} className="message">
            <div className="messageNameTime">
              <div className="messageName">
                <b>{m.username}</b>
              </div>
              <div className="messsageTime">
                <i>{moment(m.timestamp).fromNow()} </i>
              </div>
            </div>
            <div className="messageText">{m.text}</div>
          </div>
        );
      })}
      <div style={{ height: 0 }} id="lastMessage"></div>
    </div>
  );
};

export default MessageList;
