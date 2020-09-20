import React, { FC, useState } from "react";
import RenderMessages from "./RenderMessages";
import { Refetch } from "./Chat";
import { Message } from "../types/Message";

type Props = {
  username: string;
  refetch: Refetch | undefined;
  setRefetch: React.Dispatch<React.SetStateAction<Refetch | undefined>>;
};

export type MutationCallBack = (message: Message) => void;

const ChatWrapper: FC<Props> = (props) => {
  const [mutationCallBack, setMutationCallback] = useState<MutationCallBack>();

  return (
    <div className="chatWrapper">
      <div className="wd75">
        <RenderMessages {...props} setMutationCallback={setMutationCallback} />;
      </div>
    </div>
  );
};

export default ChatWrapper;
