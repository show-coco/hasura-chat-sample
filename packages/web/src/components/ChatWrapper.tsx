import React, { FC, useState } from "react";
import RenderMessages from "./RenderMessages";
import { Refetch } from "./Chat";
import { Message, Messages } from "../types/Message";
import Textbox from "./Textbox";

type Props = {
  username: string;
  userId: number;
  messages: Messages;
  newMessages: Messages;
  mutationCallback: MutationCallBack;
};

export type MutationCallBack = ((message: Message) => void) | undefined;

const ChatWrapper: FC<Props> = (props) => {
  return (
    <div className="chatWrapper">
      <div className="wd75">
        <RenderMessages {...props} />
        <Textbox {...props} />
      </div>
    </div>
  );
};

export default ChatWrapper;
