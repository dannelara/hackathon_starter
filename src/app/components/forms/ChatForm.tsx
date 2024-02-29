import React from 'react';
import Input from '../ui/Input';

type Props = {
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const ChatForm = ({ handleInputChange, handleSubmit, input }: Props) => {
    return (
        <form onSubmit={handleSubmit} className='mt-4'>
            <div className='flex gap-2 divide-x-2'>
                <Input
                    value={input}
                    type='text'
                    onChange={handleInputChange}
                    name='message'
                    className='w-full placeholder:black py-4 border-2 rounded'
                    placeholder='Type your message here...'
                />
                <button
                    className='ml-2 px-8 py-2 rounded bg-black text-white'
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ChatForm;