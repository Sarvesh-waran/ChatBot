import { useEffect, useRef } from 'react';
import userpro from '../assets/User-Profile-PNG-Image.png'
import robopro from '../assets/robo-profile.avif'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Chatbox(props) {
  const scr = useRef(null)
  useEffect(() => {
    const bar = scr.current
    if (bar) {
      bar.scrollTop = bar.scrollHeight
    }
  }, [props.message])

  return (
    <div className="chat-messages" ref={scr}>
      {props.message.map(mes => (
        <div className={`message ${mes.sender === 'user' ? 'user' : 'bot'}`} key={mes.key}>
          <img
            className="message-avatar"
            src={mes.sender === 'robot' ? robopro : userpro}
            alt="profile"
          />
          <div className="message-bubble">
            {mes.sender === "robot" ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {mes.message}
              </ReactMarkdown>
            ) : (
              mes.message
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chatbox;
