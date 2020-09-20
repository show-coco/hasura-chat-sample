import React, { FC, useState } from "react";
import {
  useTypeEventMutation,
  useInsertMessageMutation,
} from "../generated/graphql";
import TypingIndicator from "./TypingIndicator";
import { MutationCallBack } from "./ChatWrapper";
import { Message } from "../types/Message";

type Props = {
  userId: number;
  username: string;
  mutationCallback: MutationCallBack;
};

type SendMessageEvent =
  | React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

/**
 * メッセージ入力中はlast_typedを更新する
 * メッセージ送信ボタンを押したらメッセージを送信する
 */
const Textbox: FC<Props> = ({ userId, username, mutationCallback }) => {
  const [text, setText] = useState("");

  const [
    emitTypingEvent,
    { data: typeEventData, loading: typeEventLoading, error: typeEventError },
  ] = useTypeEventMutation({
    variables: {
      userId,
    },
  });

  const [insertMessageMutation] = useInsertMessageMutation({
    variables: {
      message: {
        username,
        text,
      },
    },
  });

  const handleTyping = (text: string) => {
    const textLength = text.length;
    if ((textLength !== 0 && textLength % 5 === 0) || textLength === 1) {
      emitTypingEvent();
    }
    setText(text);
  };

  const sendMessage = async (e: SendMessageEvent) => {
    e.preventDefault();
    const { data } = await insertMessageMutation();
    const res: Message = data?.insert_message?.returning[0];
    console.log("res", res);
    if (mutationCallback) mutationCallback(res);
    setText("");
  };

  return (
    <form onSubmit={sendMessage}>
      <div className="textboxWrapper">
        <TypingIndicator userId={userId} />
        <input
          id="textbox"
          className="textbox typoTextbox"
          value={text}
          autoFocus={true}
          onChange={(e) => {
            handleTyping(e.target.value);
          }}
          autoComplete="off"
        />
        <button className="sendButton typoButton" onClick={sendMessage}>
          {" "}
          Send{" "}
        </button>
      </div>
    </form>
  );
};

export default Textbox;
