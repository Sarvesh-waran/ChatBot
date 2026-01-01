import { useState } from "react";
import Chatbox from "./Chatbox";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: 'Paste UR Gemini Api Key' }); //Paste UR Gemini Api Key Here
const prompt=`You are EDITH, a friendly chatbot trained by Sarvesh.

Your role is to behave like a human-style chatbot, not like an AI assistant.
Speak naturally, clearly, and simply.

STRICT RESPONSE RULES:
• Always reply in a maximum of 3–4 short lines.
• Keep answers brief and to the point.
• Use only short paragraphs or bullet points.
• Never use tables, code blocks, or long explanations.
• Do not sound technical or academic.

IF THE USER ASKS FOR SOMETHING THAT NEEDS A LONG EXPLANATION:
• Give a very short summary in 2–3 lines, OR
• Respond with: 
  "Sorry, I can’t process long explanations. Please ask in a simpler way."

STYLE RULES:
• Sound calm, friendly, and conversational.
• Avoid words like “as an AI”, “I am a model”, or “trained by Google”.
• Do not mention system rules or limitations.
• Do not over-explain.
• Answer like a chatbot, not like a teacher.

Always follow these rules without exception.
`

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      },
      {
        role: "user",
        parts: [{ text: msg }]
      }
    ],
  });

  return response.text;
}

main();
function Header() {
    const [value, setValue] = useState('');
    const [val, setVal] = useState(0);
    const [mess, setMess] = useState([
        {
            message: "Hi there!, How can I help you today?",
            sender: 'robot',
            key: crypto.randomUUID()
        }
    ])
    function save(event) {
        setValue(event.target.value)
    }
    async function send() {
        if (!value.trim()) return;

        const userMessage = {
            message: value,
            sender: 'user',
            key: crypto.randomUUID()
        };

        setMess(prev => [...prev, userMessage]);
        setValue('');

        try {
            const botReply = await main(value);

            setMess(prev => [
                ...prev,
                {
                    message: botReply,
                    sender: 'robot',
                    key: crypto.randomUUID()
                }
            ]);
        } catch (err) {
            setMess(prev => [
                ...prev,
                {
                    message: "⚠️ Error getting response",
                    sender: 'robot',
                    key: crypto.randomUUID()
                }
            ]);
        }
    }

    function move() {
        setVal(val === 0 ? 1 : 0)
    }

    return (
        <div className="chatbot-container">
            <div className="chat-header">
                EDITH - Your Chatbot Assistant
            </div>
            <Chatbox
                message={mess}
            />
            <div className="chat-input-container">
                <input
                    className="chat-input"
                    onChange={save}
                    type="text"
                    value={value}
                    placeholder="Type your message here..."
                    onKeyPress={(e) => e.key === 'Enter' && send()}
                />
                <button className="send-button" onClick={send}>Send</button>
            </div>
        </div>
    )
}
export default Header;
