"use client";

import Input from '@/app/components/ui/Input';
import Spinner from '@/app/components/ui/Spinner';
import React from 'react';

const ImageGenerator = () => {
    const [prompt, setPrompt] = React.useState<string>('A painting of a beautiful sunset over the ocean.')
    const [generatedUrl, setGeneratedUrl] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);

    const genereateImage = async () => {
        setLoading(true);
        const response = await fetch('/api/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt }),
        });

        const res = await response.json();

        if (Object.prototype.hasOwnProperty.call(res, 'data')) {
            const { data } = res
            if (Array.isArray(data) && !!data.length) {
                const [first] = data;
                const { url } = first;
                setGeneratedUrl(url);
            }
        }
        setLoading(false);
    }

    return (
        <div className='space-y-4'>
            <p className='text-3xl underline'>Promt to image</p>
            <p>Detta är en enkel modell som kan generera bilder utifrån en prompt. Skriv in en prompt och se vad som genereras.</p>
            <div className='border p-4 rounded bg-white text-black'>
                <code>src/app/examples/imageGenerator</code>
            </div>
            <div className='w-full flex flex-col p-8 bg-white text-black rounded min-h-[40rem] relative'>

                {generatedUrl && (
                    <div className='py-8'>
                        <img src={decodeURI(generatedUrl)} alt='Generated image' width={512} height={512} />
                    </div>
                )}

                <div className='mt-auto flex gap-8 relative'>
                    {loading && (
                        <div className='absolute inset-0 h-full w-full bg-modal flex items-center justify-center'>
                            <Spinner />
                        </div>
                    )}
                    <Input
                        className='w-full placeholder:black py-4 border-2 rounded'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button
                        onClick={genereateImage}
                        className='px-8 py-2 rounded bg-black text-white'
                    >
                        Generate image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator;