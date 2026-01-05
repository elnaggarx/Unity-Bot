import Message from "./message"
import Promptbar from "./promptbar"

const Chat = () => {
  return (
    <div className="chat-prompt-container">
      <div className='chat'>
        <Message></Message>
        <Message></Message>
      </div>
       <Promptbar></Promptbar>
    </div>
  )
}

export default Chat