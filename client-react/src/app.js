import { useState } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState();
  console.log("USER", user)

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
