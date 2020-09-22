import React, { FC } from "react";
import { useMessagesQuery } from "../generated/graphql";
import { Messages } from "../types/Message";
import MessageList from "./MessageList";

type Props = {
  username: string;
  messages: Messages;
  newMessages: Messages;
};

const RenderMessages: FC<Props> = ({ username, messages, newMessages }) => {
  return (
    <div id="chatbox">
      <MessageList messages={messages} isNew={false} username={username} />
      <MessageList messages={newMessages} isNew={true} username={username} />
    </div>
  );
};

export default RenderMessages;
