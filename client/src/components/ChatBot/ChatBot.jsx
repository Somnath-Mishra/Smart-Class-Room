import React from 'react';
import { useState } from "react";

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() === "") return;

    // For demonstration, generating a dummy response
    const response = generateResponse(prompt);

    setMessages([...messages, { type: "user", text: prompt }]);
    setPrompt(""); // Clearing prompt after submission
    setTimeout(() => {
      setMessages([...messages, { type: "bot", text: response }]);
    }, 1000); // Simulating delay for bot response
  };

  const generateResponse = (prompt) => {
    // Here you would call your API or function to generate GPT response
    // For demonstration, just echoing the prompt
    return `You said: "${prompt}"`;
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-100 border-b">
          <p className="font-bold text-lg">ChatBot</p>
        </div>
        <div className="p-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.type === "user" ? "text-right text-blue-700" : "text-left text-gray-700"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={handlePromptChange}
            className="w-full px-4 py-2 bg-gray-200 border-t border-gray-300"
            placeholder="Type something..."
          />
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
