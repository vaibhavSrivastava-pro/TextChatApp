import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  console.log("PID", props)
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="3ea168f9-fd95-4fec-9f14-911e487330bd"
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
