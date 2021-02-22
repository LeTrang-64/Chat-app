import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="
    7b3792b9-f687-41f1-92e3-c2b06cff974b"
      userName="TheAnh"
      userSecret="123456789"
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />} //phan chat o giua
    />
  );
}

export default App;
