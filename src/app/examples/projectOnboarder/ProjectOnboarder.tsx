"use client";

import { Message } from 'ai';
import { useChat } from 'ai/react';
import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Messages from '../../components/common/Messages';
import ChatForm from '@/app/components/forms/ChatForm';

const chatConfig = {
    initialMessages: [
        {
            role: "assistant",
            content: `Hi and welcome. Lets get started with your onboarding into the project Atlas.`,
            id: `${uuidv4()}`,
        },
        {
            role: "assistant",
            content: `Where do you want to start?`,
            id: `${uuidv4()}`,
        },
    ] as Message[]
}

const ProjectOnboarder = () => {
    const { messages, input, handleInputChange, handleSubmit, isLoading, error, setMessages, stop } = useChat({
        onFinish: () => {
        },
        onError: () => {
        },
        ...chatConfig
    });

    return (
        <div className='space-y-4'>
            <p className='text-3xl underline'>Onboard your team faster!</p>
            <p>Detta project bygger på att du ska kunna onboarda nya teammedlemmar snabbare samt ge dem möjligheten att ställa frågor kring projektet.</p>

            <div className='border p-4 rounded bg-white text-black'>
                <code>src/app/examples/projectOnboarder</code>
            </div>
            <div className='w-full p-8 bg-white text-black rounded'>
                <p className='text-2xl mb-2'>Project Atlas</p>

                <Messages messages={messages} />
                <ChatForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} />
            </div>
        </div>
    );
};

export default ProjectOnboarder;