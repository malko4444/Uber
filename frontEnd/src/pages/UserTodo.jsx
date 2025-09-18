
import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

export default function UserTodo() {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]); 
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000", {
      
    });
    console.log(newSocket);
    
    setSocket(newSocket);

    newSocket.on("welcome", (msg) => {
      console.log(msg);
    });

    newSocket.on("message", (msg) => {
      console.log("Message from server:", msg);
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const user = localStorage.getItem('user');
  const userData = user ? JSON.parse(user) : {};

  const sendMesssage = () => {
    if (socket && userData.email && userMessage) {
      socket.emit("message", { email: userData.email, message: userMessage });
      setUserMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4 text-center">Chat App</h2>
        <div className="flex-grow mb-4 overflow-y-auto h-64 border p-2 rounded">
          {messages.length > 0 ? (
            messages.map((msg, idx) => (
              <div className="mb-2" key={idx}>
                <span className="font-semibold">{msg.email}:</span> {msg.message}
              </div>
            ))
          ) : (
            <div className="text-gray-400">No messages yet.</div>
          )}
        </div>
        <div className="flex">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="flex-grow border rounded-l px-4 py-2 focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMesssage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}