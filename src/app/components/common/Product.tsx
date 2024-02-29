import React from 'react';

type Props = {
    name: string,
    description: string,
};

const Product = ({ description, name }: Props) => {
    return (
        <button className='grid gap-6 text-start'>
            <div className='size-9 bg-black text-white flex items-center justify-center rounded-md'>
                {name.charAt(0)}
                {name.charAt(name.length - 1)}
            </div>
            <div className=''>
                <p className='mb-2'>{name}</p>
                <p className='line-clamp-1 md:line-clamp-3 line-height-[1.6875rem] text-sm'>{description}</p>
            </div>
        </button>
    );
};

export default Product;