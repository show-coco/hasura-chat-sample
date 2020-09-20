import React, { FC, useEffect, useState } from "react";
import {
  useEmitOnlineEventMutation,
  useToNewMessagesSubscription,
} from "../generated/graphql";
import ChatWrapper from "./ChatWrapper";

type Props = {
  userId: number;
  username: string;
};

export type Refetch = () => Promise<void>;

const Chat: FC<Props> = ({ userId, username }) => {
  const [emitOnlineEvent] = useEmitOnlineEventMutation({
    variables: {
      userId,
    },
  });
  const [refetch, setRefetch] = useState<Refetch>();

  useEffect(() => {
    // ユーザがオンラインであることを3秒毎に更新
    setInterval(async () => {
      await emitOnlineEvent();
    }, 3000);
  }, []);

  const { data, loading, error } = useToNewMessagesSubscription();

  useEffect(() => {
    console.log("message", data?.message);
    if (refetch) {
      refetch();
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ChatWrapper
      username={username}
      userId={userId}
      setRefetch={setRefetch}
      refetch={refetch}
    />
  );
};

export default Chat;
