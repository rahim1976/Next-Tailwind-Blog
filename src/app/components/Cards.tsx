import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import data from './CardsData';


const Cards = () => {
    return (
        <div className="max-w-7xl mx-auto px-4" id='blogs'>
            <h1 data-aos="zoom-in" className='text-2xl text-center font-mono font-bold my-10 lg:text-3xl'>Our Latest Blogs</h1>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((card, index) => (
                    <div key={index} className="bg-cardColor shadow-md border border-gray-200 rounded-lg flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl">
                        {/* Image with Link */}
                        <Link href={card.href}>
                            <Image
                                className="rounded-t-lg sm:w-full cursor-pointer"
                                src={card.img}
                                alt="image"
                                width={600}
                                height={250}
                            />
                        </Link>
                        <div className="p-5 flex-grow">
                            <Link href={card.href}>
                                <h5 data-aos="fade-up" className="text-gray-900 font-bold text-2xl tracking-tight mb-2 cursor-pointer font-mono">
                                    {card.title}
                                </h5>
                            </Link>
                            <p data-aos="fade-up" className="font-norma font-mono text-gray-700">{card.description}</p>
                        </div>
                        <div className="p-5">
                            <Link href={card.href}>
                                <span className="text-white font-mono bg-amdOrange hover:bg-amdorange focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-3 py-2 text-center inline-flex items-center w-full justify-center cursor-pointer font-bold">
                                    Read more
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
