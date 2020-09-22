import React, { FC } from "react";
import { Messages } from "../types/Message";
import MessageList from "./MessageList";
import Banner from "./Banner";

type Props = {
  username: string;
  messages: Messages;
  newMessages: Messages;
  bottom: boolean;
  isViewScrollable: () => boolean;
  scrollToNewMessage: () => void;
};

const RenderMessages: FC<Props> = ({
  username,
  messages,
  newMessages,
  bottom,
  isViewScrollable,
  scrollToNewMessage,
}) => {
  return (
    <div id="chatbox">
      {!bottom &&
      newMessages &&
      newMessages.length > 0 &&
      isViewScrollable() ? (
        <Banner
          scrollToNewMessage={scrollToNewMessage}
          numOfNewMessages={newMessages.length}
        />
      ) : null}
      <MessageList messages={messages} isNew={false} username={username} />
      <div id="newMessage" className="oldNewSeparator">
        {newMessages && newMessages.length !== 0 ? "New messages" : null}
      </div>
      <MessageList messages={newMessages} isNew={true} username={username} />
    </div>
  );
};

export default RenderMessages;
