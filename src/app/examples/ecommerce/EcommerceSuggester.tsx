
import React from 'react';
import EcommerceSearch from '../../components/ecommerce/EcommerceSerach';
import EcommerceChatBox from '../../components/ecommerce/EcommerceChatBox';
import EcommerceChatBoxTrigger from '../../components/ecommerce/EcommerceChatBoxTrigger';


const EcommerceSuggester = () => {
    return (
        <div className='space-y-4 '>
            <p className='text-3xl underline'>Product finder.</p>
            <p>Detta projekt bygger på att ge potentiella kunder möjligheten att hjälpa dem hitta en produkt som passar de annars inte hade hittat i en online butik.</p>
            <p>Genom att beskriva dig själv som person kommer AI rekommendera en produkt som passar dig perfekt ur sortimetet!</p>

            <div className='border p-4 rounded bg-white text-black'>
                <code>src/app/examples/ecommerce</code>
            </div>
            <div className='w-full p-8 bg-white text-black rounded min-h-[40rem] relative'>
                <EcommerceSearch />
                <EcommerceChatBox />
                <EcommerceChatBoxTrigger />
            </div>
        </div >
    );
};

export default EcommerceSuggester;