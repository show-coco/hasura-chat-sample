import { Message as PerfectMessage } from "../generated/graphql";

export type Message =
  | ({ __typename?: "message" | undefined } & Pick<
      PerfectMessage,
      "id" | "text" | "username" | "timestamp"
    >)
  | undefined;

export type Messages =
  | ({ __typename?: "message" | undefined } & Pick<
      PerfectMessage,
      "id" | "text" | "username" | "timestamp"
    >)[]
  | undefined;
