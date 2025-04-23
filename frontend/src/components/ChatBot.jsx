import axios from "axios";
import SplitText from "../animations/SplitText.jsx";
import { RxCross2 } from "react-icons/rx";
import customResponses from "../api/botInfo.json";
import { useState, useRef, useEffect } from "react";
const ChatBot = ({ setShowChatBot }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" }
  ]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const chatBoxRef = useRef(null);

  const devProfile = `
  Safayet is a 20-year-old web developer from Keraniganj, Dhaka.
  He knows HTML, CSS, JavaScript, Tailwind, React, MongoDB, Express, and JWT authentication.
  He is building a football player card collection game and plans to start a web agency.
`;

  // Fuzzy matching function
  const findClosestMatch = (input, patterns) => {
    const inputLower = input.toLowerCase();

    return patterns.find(pattern => {
      const similarity = (str1, str2) => {
        let matches = 0;
        const length = Math.max(str1.length, str2.length);

        // Count matching characters
        for (let i = 0; i < length; i++) {
          if (str1[i] === str2[i]) matches++;
        }

        return matches / length;
      };

      return similarity(inputLower, pattern) > 0.7; // 70% similarity threshold
    });
  };

  const handleSendMessage = async e => {
    e.preventDefault();
    setButtonDisable(true);
    if (!input.trim()) return;

    //updated code

    // Add user's message
    const userMessage = { sender: "user", text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const context = `${devProfile} User asked: "${input}"`;

    const lowerInput = input.toLowerCase();

    // 🔥 Check for fuzzy-matched custom responses first!
    for (let custom of customResponses) {
      const matchedPattern = findClosestMatch(lowerInput, custom.patterns);

      if (matchedPattern) {
        const botMessage = { sender: "bot", text: custom.response };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setInput("");
        setButtonDisable(false);
        return;
      }
    }

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-3B",
        { inputs: context },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json"
          }
        }
      );

      const botMessage = {
        sender: "bot",
        text: response?.data[0]?.generated_text || "I didn't understand that."
      };
      if (response.status === 200) {
        setButtonDisable(false);
      }
      // Add bot's reply
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      setButtonDisable(false);
      console.error("Error:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: "bot", text: "Oops! Something went wrong." }
      ]);
    }

    setInput("");
  };

  const handleClick = () => {
    setShowChatBot(prev => !prev);
  };
  // Automatically scroll to the latest message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="z-30 border-borderColor border-2 fixed bg-mainBackground md:bottom-6 bottom-20 right-3 w-72 mx-auto p-5 shadow-lg rounded-lg">
      <button
        onClick={handleClick}
        className=" absolute bg-buttonBackground text-textColor rounded-full p-2 -right-2 -top-4 "
      >
        <RxCross2 />
      </button>
      <h1 className=" text-xl text-textColor font-semibold text-center">
        AI Chatbot
      </h1>

      <p className="text-[8px] text-textColor text-center">
        Maybe all answers aren't correct
      </p>

      <div
        ref={chatBoxRef}
        className="bg-buttonBackground h-64 w-full overflow-y-auto border border-borderColor p-3 rounded-md my-3"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } my-1`}
          >
            <div
              className={` px-3 py-2 my-1 rounded-lg text-textColor ${
                msg.sender === "user" ? "bg-gray-700" : "bg-mainBackground"
              }`}
            >
              <SplitText
                text={msg.text}
                className=" text-center"
                delay={20}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)"
                }}
                animationTo={{
                  opacity: 1,
                  transform: "translate3d(0,0,0)"
                }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
          </div>
        ))}
      </div>

      <form className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          className="bg-transparent border-2 border-borderColor w-full p-2 rounded-md focus:outline-none focus:ring-2
          focus:ring-borderColor"
        />
        <button
          disabled={buttonDisable}
          type="submit"
          onClick={e => handleSendMessage(e)}
          className="px-4 py-2 text-textColor border-2 border-borderColor rounded-md bg-buttonBackground transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
