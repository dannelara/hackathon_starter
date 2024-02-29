"use client";

import Input from '@/app/components/ui/Input';
import { funnyProducts } from '@/data/dataStore';
import React from 'react';
import Product from '../common/Product';

const EcommerceSerach = () => {
    const [searchTerm, setSearchTerm] = React.useState('')

    const memoizedProducts = React.useMemo(() => {
        return funnyProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [searchTerm])

    return (
        <div>
            <Input
                type='text'
                placeholder='Search for products...'
                className='w-full placeholder-black py-4 border-2 rounded'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='p-10 grid grid-cols-3 gap-y-4 gap-x-8 '>
                {memoizedProducts.map(product => (
                    <Product description={product.description} name={product.name} />
                ))}
            </div>
        </div>
    );
};

export default EcommerceSerach;