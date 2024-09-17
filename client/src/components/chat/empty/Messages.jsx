import { useState, useContext, useEffect, useRef } from 'react';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider.jsx';
import { newMessage, getMessages } from '../../../service/api';
import Message from './Message.jsx';
import '../../../style/empty/Messages.css';

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [sendMessageFlag, setSendMessageFlag] = useState(false); // Toggler state
  const { account, socket } = useContext(AccountContext);
  const messagesEndRef = useRef(null); // Reference to the messages container
  const [file, setFile] = useState();
  const [incomingMessage, setIncomingMessage] = useState(null);

  // Listen for incoming messages via socket
  useEffect(() => {
    socket.current.on('getMessage', (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });

    // Cleanup the listener when the component unmounts
    return () => socket.current.off('getMessage');
  }, [socket]);

  // Fetch messages when conversation or person changes
  useEffect(() => {
    const getAllMessages = async () => {
      if (conversation?._id) {
        let allMessages = await getMessages(conversation._id);
        setMessages(allMessages);
      }
    };

    getAllMessages();
  }, [person._id, conversation._id, sendMessageFlag]);

  // Update messages state when a new incoming message arrives
  useEffect(() => {
    if (incomingMessage && conversation?.members?.includes(incomingMessage.senderId)) {
      setMessages((prev) => [...prev, incomingMessage]);
    }
  }, [incomingMessage, conversation]);

  // Send message on Enter key press
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13 && value.trim()) {
      const message = {
        senderId: account.sub,
        recieverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value,
      };

      socket.current.emit('sendMessage', message);
      await newMessage(message);

      setMessages((prevMessages) => [...prevMessages, message]);
      setSendMessageFlag((prevValue) => !prevValue);

      setValue(''); // Clear the input field
    }
  };

  return (
    <div className='Wrapper'>
      <div className='messagesComponent'>
        {messages && messages.map((message, idx) => (
          <Message message={message} key={idx} />
        ))}
        {/* Scroll reference */}
        <div ref={messagesEndRef} />
      </div>
      <Footer 
        value={value}
        setValue={setValue}
        sendText={sendText}
        file={file}
        setFile={setFile}
      />
    </div>
  );
};

export default Messages;
