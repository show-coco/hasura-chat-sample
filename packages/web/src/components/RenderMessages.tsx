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
  mutationCallback: MutationCallBack;
  setMutationCallback: React.Dispatch<
    React.SetStateAction<MutationCallBack | undefined>
  >;
};

/**
 * メッセージを取得して表示
 * 新規メッセージがあれば、新規メッセージのところまでスクロールできるボタンを表示し、
 * そのボタンを押したら新規メッセージを表示し新規メッセージまで自動スクロール
 * */
const RenderMessages: FC<Props> = (props) => {
  const [messages, setMessages] = useState<Messages>([]);
  const [newMessages, setNewMessages] = useState<Messages>([]);
  const [isBottom, setIsBottom] = useState(false);

  const { data, loading, error, refetch } = useMessagesQuery();

  /** 古いメッセージをmessagesに追加 */
  const addOldMessages = (inMessages: Messages) => {
    console.log("inMessages", inMessages);
    if (messages && inMessages) {
      const oldMessages = [...messages, ...inMessages];
      console.log("====oldMessages====", oldMessages);
      setMessages(oldMessages);
      console.log("====messages====", messages);
      setNewMessages([]);
    }
  };

  /** 新しいメッセージをnewMessagesに追加 */
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
      console.log("messagesDep", messagesDep);
      messagesDep.push(message);
      setMessages(messagesDep);
    }
  };

  /**
   * 新規メッセージを取得し表示。画面上に最後のメッセージが表示されていれば新規メッセージを画面に表示
   * 画面上に最後のメッセージが表示されていなければ新規メッセージに追加。新規メッセージ表示ボタンを押したらこれらのメッセージを表示
   */
  const refetchWrapper = async () => {
    const resp = await refetch(getLastReceivedVars());
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
    if (messages && messages.length === 0) addOldMessages(data?.message);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!props.mutationCallback) {
      props.setMutationCallback(() => mutationCallback);
    }
  });

  // 新規メッセージが画面に表示されたら下へスクロール
  useEffect(() => {
    if (newMessages && newMessages.length === 0) {
      scrollToBottom();
    }
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
