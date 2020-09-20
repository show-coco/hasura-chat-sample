import React, { FC, useState } from "react";
import RenderMessages from "./RenderMessages";
import { Refetch } from "./Chat";
import { Message } from "../types/Message";
import Textbox from "./Textbox";

type Props = {
  username: string;
  userId: number;
  refetch: Refetch | undefined;
  setRefetch: React.Dispatch<React.SetStateAction<Refetch | undefined>>;
};

export type MutationCallBack = ((message: Message) => void) | undefined;

const ChatWrapper: FC<Props> = (props) => {
  const [mutationCallBack, setMutationCallback] = useState<MutationCallBack>();

  return (
    <div className="chatWrapper">
      <div className="wd75">
        <RenderMessages
          {...props}
          setMutationCallback={setMutationCallback}
          mutationCallback={mutationCallBack}
        />
        <Textbox
          username={props.username}
          mutationCallback={mutationCallBack}
          userId={props.userId}
        />
      </div>
    </div>
  );
};

export default ChatWrapper;
