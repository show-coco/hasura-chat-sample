import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<number>();

  const login = (userId: number) => {
    setIsLoggedIn(true);
    setUserId(userId);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login username={username} setUsername={setUsername} login={login} />
      ) : (
        <Chat userId={userId || 0} username={username} />
      )}
    </div>
  );
}

export default App;
