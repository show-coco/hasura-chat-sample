import React, { FC, useEffect, useState } from "react";
import {
  useEmitOnlineEventMutation,
  useToNewMessagesSubscription,
  useMessagesQuery,
} from "../generated/graphql";
import ChatWrapper, { MutationCallBack } from "./ChatWrapper";
import { Message, Messages } from "../types/Message";

type Props = {
  userId: number;
  username: string;
};

export type Refetch = (newMessage: Message) => void;

const Chat: FC<Props> = ({ userId, username }) => {
  const [messages, setMessages] = useState<Messages>([]);
  const [newMessages, setNewMessages] = useState<Messages>([]);
  const [isBottom, setIsBottom] = useState(false);
  const [mutationCallBack, setMutationCallback] = useState<MutationCallBack>();

  const [emitOnlineEvent] = useEmitOnlineEventMutation({
    variables: {
      userId,
    },
  });

  const {
    data: messagesData,
    loading: messagesLoading,
    error: messagesError,
  } = useMessagesQuery();

  const {
    data: newMessagesData,
    loading: newMessagesLoading,
    error: newMessagesError,
  } = useToNewMessagesSubscription();

  /** 古いメッセージをmessagesに追加 */
  const addOldMessages = (inMessages: Messages) => {
    if (messages && inMessages) {
      const oldMessages = [...messages, ...inMessages];
      setMessages(oldMessages);
      setNewMessages([]);
    }
  };

  /** 新しいメッセージをnewMessagesに追加 */
  const addNewMessages = (messages: Messages) => {
    if (newMessages && messages) {
      const newMessagesDep = [...newMessages];
      messages.forEach((m) => {
        // 自分のメッセージは追加しない
        if (m.username !== username) {
          newMessagesDep.push(m);
        }
      });
      setNewMessages(newMessagesDep);
    }
  };

  /** 一番下のメッセージまでスクロール */
  const scrollToBottom = () => {
    const lastMessage = document.getElementById("lastMessage");
    if (lastMessage) lastMessage.scrollIntoView({ behavior: "smooth" });
  };

  /** 新しいメッセージまでスクロール */
  const scrollToNewMessage = () => {
    const newMessage = document.getElementById("newMessage");
    if (newMessage) newMessage.scrollIntoView({ behavior: "smooth" });
  };

  /** ボタンを表示するか判定 */
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

  /** メッセージを再取得する際の変数を返却 */
  const getLastReceivedVars = () => {
    if (newMessages && messages) {
      // TODO(FIX): messagesとnewMessagesが空配列になる
      // (callbackとして上位コンポーネントで呼び出しているためstateの値が呼び出し時に初期化されている？)
      console.log("getLastReceivedVars.messages", messages);
      console.log("getLastReceivedVars.newMessages", newMessages);
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
    }
  };

  /** 最後のメッセージが画面上になければtrueを返却 */
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

  /** テキストを入力した時にmessagesに追加 */
  const mutationCallback = (message: Message) => {
    if (messages && newMessages && message) {
      const messagesDep = [...messages, ...newMessages];
      messagesDep.push(message);
      setMessages(messagesDep);
      setNewMessages([]);
    }
  };

  /**
   * 新規メッセージを取得し表示。画面上に最後のメッセージが表示されていれば新規メッセージを画面に表示
   * 画面上に最後のメッセージが表示されていなければ新規メッセージに追加。新規メッセージ表示ボタンを押したらこれらのメッセージを表示
   */
  const refetchWrapper = (newMessage: Message) => {
    if (newMessage) {
      if (!isViewScrollable()) {
        addOldMessages([newMessage]);
      } else {
        if (isBottom) {
          addOldMessages([newMessage]);
        } else {
          addNewMessages([newMessage]);
        }
      }
    }
  };

  useEffect(() => {
    console.log("====messages====", messages);
    console.log("====new messages====", newMessages);
  }, [messages, newMessages]);

  useEffect(() => {
    if (messages && messages.length === 0)
      addOldMessages(messagesData?.message);
  }, [messagesData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!mutationCallback) {
      setMutationCallback(() => mutationCallback);
    }
  });

  // 新規メッセージが画面に表示されたら下へスクロール
  useEffect(() => {
    if (newMessages && newMessages.length === 0) {
      scrollToBottom();
    }
  }, [newMessages]);

  useEffect(() => {
    // ユーザがオンラインであることを3秒毎に更新
    setInterval(async () => {
      await emitOnlineEvent();
    }, 3000);
  }, []);

  useEffect(() => {
    refetchWrapper(newMessagesData?.message[0]);
  }, [newMessagesData]);

  if (messagesLoading) return <p>Loading...</p>;
  if (messagesError) return <p>{messagesError.message}</p>;

  return (
    <ChatWrapper
      username={username}
      userId={userId}
      messages={messages}
      newMessages={newMessages}
      mutationCallback={mutationCallBack}
    />
  );
};

export default Chat;
