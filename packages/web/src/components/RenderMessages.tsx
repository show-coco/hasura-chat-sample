import React, { FC } from "react";
import { useMessagesQuery } from "../generated/graphql";
import { Messages } from "../types/Message";
import MessageList from "./MessageList";

type Props = {
  username: string;
  messages: Messages;
  newMessages: Messages;
};

/**
 * メッセージを取得して表示
 * 新規メッセージがあれば、新規メッセージのところまでスクロールできるボタンを表示し、
 * そのボタンを押したら新規メッセージを表示し新規メッセージまで自動スクロール
 * */
const RenderMessages: FC<Props> = ({ username, messages, newMessages }) => {
  const { data, loading, error, refetch } = useMessagesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div id="chatbox">
      <MessageList messages={messages} isNew={false} username={username} />
      <MessageList messages={newMessages} isNew={true} username={username} />
    </div>
  );
};

export default RenderMessages;
