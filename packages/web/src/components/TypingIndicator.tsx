import React, { FC } from "react";
import { useGetUserTypingSubscription } from "../generated/graphql";

type Props = {
  userId: number;
};

const TypingIndicator: FC<Props> = ({ userId }) => {
  const { data, loading, error } = useGetUserTypingSubscription({
    variables: {
      selfId: userId,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="typingIndicator">
      {data && data.user_typing.length === 0
        ? ""
        : `${data && data.user_typing[0].username}{" "}is typing ...`}
    </div>
  );
};

export default TypingIndicator;
