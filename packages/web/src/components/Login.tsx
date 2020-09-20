import React, { FC } from "react";
import { useInsertUserMutation } from "../generated/graphql";

type Props = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  login: (userId: number) => void;
};

const Login: FC<Props> = ({ username, setUsername, login }) => {
  const [insertUser, { data, error, loading }] = useInsertUserMutation({
    variables: {
      username: username,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (data?.insert_user?.returning.length) {
    login(data?.insert_user?.returning[0].id);
  }

  return (
    <div className="loginWrapper">
      <h2 className="loginHeading">
        {" "}
        Welcome to sample chat app made with Hasura GraphQL Engine{" "}
      </h2>
      <div className="login">
        <div>
          <form>
            <input
              type="text"
              id="username"
              className="loginTextbox"
              placeholder="Username"
              autoFocus={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className="loginButton"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (username.match(/^[a-z0-9_-]{3,15}$/g)) {
                  insertUser();
                } else {
                  alert(
                    "Invalid username. Spaces and special characters not allowed. Please try again"
                  );
                  setUsername("");
                }
              }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
