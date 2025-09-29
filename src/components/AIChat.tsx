import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBVwwgUly3S-aQN5Id0puT8Ao9QHjX72IQ`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful assistant for the DBT Awareness Portal. Answer questions about Direct Beneficiary Transfer (DBT), Aadhaar linking, bank accounts, scholarships for SC students, and related government services. Keep responses concise and helpful. User question: ${message}`
            }]
          }]
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not process your request. Please try again.';

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <Bot className="mr-2 text-orange-500" size={24} />
        {t('chat.title')}
      </h3>

      {/* Messages */}
      <div className="h-64 overflow-y-auto mb-4 border rounded-lg p-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <Bot size={48} className="mx-auto mb-2 text-gray-400" />
            <p>Ask me anything about DBT, scholarships, or account verification!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isUser
                      ? 'bg-orange-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!msg.isUser && <Bot size={16} className="text-orange-500 mt-1 flex-shrink-0" />}
                    {msg.isUser && <User size={16} className="text-white mt-1 flex-shrink-0" />}
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-orange-500" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chat.placeholder')}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;