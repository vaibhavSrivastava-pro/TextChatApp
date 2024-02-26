import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState();
  console.log("USER", user)

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <AuthPage onAuth={(user) => setUser(user)} /> : <Navigate to="/chats" />} />
        <Route path="/chats" element={user ? <ChatsPage user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;