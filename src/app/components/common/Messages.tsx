import React from 'react';
import Message from './Message';
import { Message as MessageT } from 'ai';
import { cn } from '@/app/utils';

type Props = {
    messages: MessageT[]
    className?: string
    botName?: string
};

const Messages = ({ messages, className, botName }: Props) => {

    return (
        <div className={cn('pb-4 bg-white bg-opacity-15 h-[35rem] overflow-y-auto rounded-sm', className)}>
            {messages.map((message) => (<Message key={message.content} message={message} botName={botName} />))}
        </div>
    );
};

export default Messages;