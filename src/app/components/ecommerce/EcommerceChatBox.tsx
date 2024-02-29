"use client";
import ChatForm from '@/app/components/forms/ChatForm';
import Messages from '@/app/components/common/Messages';
import { useEcommerceStore } from '@/app/store/Ecommerce';
import { Message } from 'ai';
import { useChat } from 'ai/react';
import { v4 as uuidv4 } from "uuid";

const chatConfig = {
    initialMessages: [
        {
            role: "assistant",
            content: `Explain what you are looking for and I will help you find it!`,
            id: `${uuidv4()}`,
        }
    ] as Message[]
}

const EcommerceChatBox = () => {
    const { chatBoxOpen, toggleChatBoxOpen } = useEcommerceStore()

    const { messages, input, handleInputChange, handleSubmit, isLoading, error, setMessages, stop } = useChat({
        onFinish: () => {
        },
        onError: () => {
        },
        ...chatConfig,
        api: "api/ecommerce"
    });

    if (!chatBoxOpen) return null

    return (
        <div className='fixed bg-modal inset-0 z-50 h-screen w-screen flex items-center justify-center'>
            <div className='py-8 w-2/3 bg-white rounded-md flex flex-col'>
                <div className='flex px-8'>
                    <button className='bg-black size-9 text-white rounded ml-auto' onClick={() => toggleChatBoxOpen()}>
                        X
                    </button>
                </div>

                <div className='px-8'>
                    <div className='w-full py-4 bg-white text-black rounded'>
                        <Messages messages={messages} className='bg-transparent h-[25rem] p-0' botName='AI 🦸🏻‍♂️' />
                        <ChatForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcommerceChatBox;