import { Message as MessageT } from 'ai';
import React from 'react';

const Message = ({ message, botName }: { message: MessageT, botName?: string }) => {
    const { role, content } = message;

    return (
        <div className='pb-2 my-2'>
            <div className={`flex flex-col  ${role === "user" ? "items-end" : "items-start"}`}>
                <div className={`flex flex-col ${role === "user" ? "items-end" : "items-start"}`}>
                    {role !== "user" && (
                        <div className='mb-2 '>
                            <p className='text-sm font-medium text-gray-400'>{botName ? botName : "AI"}</p>
                        </div>
                    )}
                    <div className={`p-2 rounded-md max-w-[25rem] ${role === "user" ? "bg-blue-500" : "bg-gray-500"}`}>
                        <p className={`text-sm font-medium ${role === "user" ? "text-white" : "text-gray-100"}`}>{content}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Message;