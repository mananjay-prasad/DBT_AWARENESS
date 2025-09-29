import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you understand the difference between Aadhaar-linked and DBT-enabled bank accounts. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    'difference': 'An Aadhaar-linked account simply has your Aadhaar number associated with it. A DBT-enabled account is specially configured to receive government benefits directly. For scholarships, you need a DBT-enabled account.',
    'dbt enable': 'To enable DBT: 1) Visit your bank branch with Aadhaar card, 2) Fill the DBT enrollment form, 3) Verify your details, 4) Bank will activate DBT on your account within 2-3 working days.',
    'scholarship': 'Pre-Matric and Post-Matric scholarships for SC students are disbursed only through DBT-enabled Aadhaar-seeded bank accounts. Ensure your account has DBT facility activated.',
    'documents': 'Required documents: Aadhaar Card, Bank Passbook, Mobile number registered with Aadhaar, and DBT enrollment form from your bank.',
    'track': 'You can track your scholarship status through the NSP portal or use our Track service. Enter your application ID to check the status.',
    'bank': 'Most public and private sector banks support DBT. Visit your nearest branch or check with customer service to confirm DBT availability.'
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isBot: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);

      // Simple keyword-based response
      const lowercaseInput = inputMessage.toLowerCase();
      let botResponse = "I understand your question. For detailed assistance, please visit our Guide section or contact the nearest Gram Panchayat office. You can also call our helpline: 1800-XXX-XXXX";

      Object.keys(predefinedResponses).forEach(key => {
        if (lowercaseInput.includes(key)) {
          botResponse = predefinedResponses[key];
        }
      });

      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);

      setInputMessage('');
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center z-50 ${
          isOpen ? 'hidden' : ''
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 sm:h-[500px] bg-white rounded-lg shadow-2xl z-50 flex flex-col max-w-[calc(100vw-3rem)]">
          {/* Header */}
          <div className="bg-orange-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <span className="font-medium">DBT Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-orange-600 p-1 rounded"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-orange-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 flex items-center justify-center min-w-[44px]"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;