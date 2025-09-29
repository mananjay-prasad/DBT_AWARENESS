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
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBVwwgUly3S-aQN5Id0puT8Ao9QHjX72IQ`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful assistant for the DBT Awareness Portal in India. You help users understand the difference between Aadhaar-linked and DBT-enabled bank accounts, especially for SC (Scheduled Caste) students applying for Pre-Matric and Post-Matric scholarships.

Key Information:
- Aadhaar-linked account: Basic Aadhaar number linked to bank account for KYC
- DBT-enabled account: Specially configured account that can receive government benefits directly
- For SC scholarships, students MUST have DBT-enabled Aadhaar-seeded bank accounts
- To enable DBT: Visit bank branch → Fill DBT enrollment form → Bank activates within 2-3 days
- Required documents: Original Aadhaar card, bank passbook, mobile number linked with Aadhaar
- Common issues: Mobile not linked with Aadhaar, dormant account, name mismatch

Always provide accurate, helpful information about DBT, scholarships, bank account requirements, and guide users to appropriate resources. Keep responses concise but informative. If asked about topics outside DBT/scholarships/banking, politely redirect to the relevant topic.

User question: ${message}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      let aiResponse = 'Sorry, I could not process your request. Please try again.';
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
        aiResponse = data.candidates[0].content.parts[0].text;
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error while processing your request. Please check your internet connection and try again. If the problem persists, contact our helpline at 1800-XXX-XXXX.',
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
            <p className="px-4">{t('chat.placeholder')}</p>
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
                    <p className="text-sm whitespace-pre-wrap break-words">{msg.text}</p>
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
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chat.placeholder')}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[60px]"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;