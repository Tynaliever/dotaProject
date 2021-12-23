import React from 'react';
import { useAuth } from '../../contexts/authContext';

const Chat = () => {
    const { user } = useAuth();
    return (
        <div>
            Chat
        </div>
    );
};

export default Chat;