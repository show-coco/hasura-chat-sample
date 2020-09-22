import React, { FC } from "react";
import RenderMessages from "./RenderMessages";
import { Message, Messages } from "../types/Message";
import Textbox from "./Textbox";

type Props = {
  username: string;
  userId: number;
  messages: Messages;
  newMessages: Messages;
  mutationCallback: MutationCallBack;
  bottom: boolean;
  isViewScrollable: () => boolean;
  scrollToNewMessage: () => void;
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
