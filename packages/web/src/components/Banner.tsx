import React, { FC } from "react";

type Props = {
  scrollToNewMessage: () => void;
  numOfNewMessages: number;
};

const Banner: FC<Props> = (props) => {
  return (
    <div className="banner" onClick={props.scrollToNewMessage}>
      You have {props.numOfNewMessages} new message(s)
    </div>
  );
};

export default Banner;
