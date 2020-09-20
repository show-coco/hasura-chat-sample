import React, { FC, useState, useEffect } from "react";
import { useMessagesQuery } from "../generated/graphql";
import { Messages, Message } from "../types/Message";
import MessageList from "./MessageList";
import { Refetch } from "./Chat";
import { MutationCallBack } from "./ChatWrapper";

type Props = {
  username: string;
  refetch: Refetch | undefined;
  setRefetch: React.Dispatch<React.SetStateAction<Refetch | undefined>>;
  setMutationCallback: React.Dispatch<
    React.SetStateAction<MutationCallBack | undefined>
  >;
};

const RenderMessages: FC<Props> = (props) => {
  const [messages, setMessages] = useState<Messages>([]);
  const [newMessages, setNewMessages] = useState<Messages>([]);
  const [isBottom, setIsBottom] = useState(false);

  const { data, loading, error, refetch } = useMessagesQuery();

  console.log("messages", messages);

  // 古いメッセージをmessagesに追加
  const addOldMessages = (inMessages: Messages) => {
    console.log("inMessages", inMessages);
    if (messages !== undefined && inMessages !== undefined) {
      const oldMessages = inMessages;
      setMessages(oldMessages);
      setNewMessages([]);
    }
  };

  // 新しいメッセージをnewMessagesに追加
  const addNewMessages = (messages: Messages) => {
    if (newMessages && messages) {
      const newMessagesDep = [...newMessages];
      messages.forEach((m) => {
        // 自分のメッセージは追加しない
        if (m.username !== props.username) {
          newMessagesDep.push(m);
        }
      });
      setNewMessages(newMessagesDep);
    }
  };

  // 一番下のメッセージまでスクロール
  const scrollToBottom = () => {
    const lastMessage = document.getElementById("lastMessage");
    if (lastMessage) lastMessage.scrollIntoView({ behavior: "smooth" });
  };

  // 新しいメッセージまでスクロール
  const scrollToNewMessage = () => {
    const newMessage = document.getElementById("newMessage");
    if (newMessage) newMessage.scrollIntoView({ behavior: "smooth" });
  };

  // ボタンを表示するか判定
  const handleScroll = (e: Event) => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.getElementById("chatbox");
    const html = document.documentElement;
    if (!body) throw new Error("IDがchatBoxの要素が存在しません");
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  const getLastReceivedVars = () => {
    if (newMessages && messages)
      if (newMessages.length === 0) {
        if (messages.length !== 0) {
          return {
            last_received_id: messages[messages.length - 1].id,
            last_received_ts: messages[messages.length - 1].timestamp,
          };
        } else {
          return {
            last_received_id: -1,
            last_received_ts: "2018-08-21T19:58:46.987552+00:00",
          };
        }
      } else {
        return {
          last_received_id: newMessages[newMessages.length - 1].id,
          last_received_ts: newMessages[newMessages.length - 1].timestamp,
        };
      }
  };

  const isViewScrollable = () => {
    const isInViewport = (elem: HTMLElement) => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    const elem = document.getElementById("lastMessage");
    if (elem) {
      return !isInViewport(elem);
    }
    return false;
  };

  // テキストを入力した時にmessagesに追加する
  const mutationCallback = (message: Message) => {
    if (messages && newMessages && message) {
      const messagesDep = [...messages, ...newMessages];
      messagesDep.push(message);
      setMessages(messages);
    }
  };

  const refetchWrapper = async () => {
    const resp = await refetch(getLastReceivedVars());
    console.log("resp", resp);
    if (resp.data) {
      console.log("resp.data", resp.data);
      if (!isViewScrollable()) {
        addOldMessages(resp.data.message);
      } else {
        if (isBottom) {
          addOldMessages(resp.data.message);
        } else {
          addNewMessages(resp.data.message);
        }
      }
    }
  };

  useEffect(() => {
    if (!props.refetch) {
      console.log("set refetch");
      props.setRefetch(() => refetchWrapper);
    }
  }, [refetch]);

  useEffect(() => {
    addOldMessages(data?.message);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    props.setMutationCallback(mutationCallback);
  }, [mutationCallback]);

  useEffect(() => {
    scrollToBottom();
  }, [newMessages]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div id="chatbox">
      <MessageList
        messages={messages}
        isNew={false}
        username={props.username}
      />
    </div>
  );
};

export default RenderMessages;
