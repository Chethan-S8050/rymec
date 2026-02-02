import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! I\'m your Smart Campus Assistant. How can I help you regarding generic queries, admissions, or fees?', chips: ['Admissions', 'Fee Structure', 'Placements'] }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Persist chat history
    useEffect(() => {
        const savedChat = localStorage.getItem('rymec_chat_history');
        if (savedChat) {
            setMessages(JSON.parse(savedChat));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('rymec_chat_history', JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = async (text = inputText) => {
        if (!text.trim()) return;

        // User Message
        const newMessages = [...messages, { type: 'user', text }];
        setMessages(newMessages);
        setInputText('');
        setIsTyping(true);

        try {
            const res = await axios.post('http://localhost:5000/api/chat', { message: text });

            // Artificial delay for better UX is handled in backend, but just in case
            setTimeout(() => {
                const botResponse = {
                    type: 'bot',
                    text: res.data.text,
                    chips: res.data.chips || []
                };
                setMessages(prev => [...prev, botResponse]);
                setIsTyping(false);

                if (res.data.action && res.data.action.type === 'navigate') {
                    setTimeout(() => {
                        navigate(res.data.action.payload);
                    }, 1500); // Wait a bit before navigating so user can read
                }
            }, 500); // Small frontend buffer

        } catch (error) {
            setMessages(prev => [...prev, { type: 'bot', text: 'Sorry, I encountered an error. Please try again later.' }]);
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="mb-4 w-[90vw] md:w-96 h-[500px] flex flex-col rounded-2xl overflow-hidden glass-card !p-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-white/20 rounded-full">
                                    <Bot className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Campus Assistant</h3>
                                    <p className="text-xs text-cyan-100 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 backdrop-blur-md">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl p-3 px-4 text-sm ${msg.type === 'user'
                                        ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-tr-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                                        }`}>
                                        <p>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 px-4 flex gap-1 shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Chips & Input */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            {/* Chips (Show for last bot message if available) */}
                            {messages.length > 0 && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].chips && (
                                <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-none">
                                    {messages[messages.length - 1].chips.map((chip, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSend(chip)}
                                            className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                                        >
                                            {chip}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-gray-400"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!inputText.trim()}
                                    className="p-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_4px_20px_rgba(99,102,241,0.4)] z-50"
            >
                <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20"></div>
                {isOpen ? <X className="text-white w-6 h-6" /> : <Bot className="text-white w-7 h-7" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
