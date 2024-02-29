"use client";

import { useEcommerceStore } from "@/app/store/Ecommerce";

type Props = {

};

const EcommerceChatBoxTrigger = ({ }: Props) => {
    const { toggleChatBoxOpen } = useEcommerceStore()
    return (
        <div className='absolute bottom-12 right-12 rounded-full bg-black text-white size-32 flex items-center justify-center animate-bounce'>
            <button
                className='p-4'
                onClick={() => toggleChatBoxOpen()}
            >
                Let me help you!
            </button>
        </div>
    );
};

export default EcommerceChatBoxTrigger;