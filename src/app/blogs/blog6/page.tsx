import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog6 = () => {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-[500px]">
                <Image
                    src="/blog6/bg.jpg"
                    alt="blog6"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">
                        A Guide to Powering Your Gaming Rig
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4 text-white font-mono">
                    <p data-aos="fade-right" className="text-lg leading-relaxed ">
                        As we dive deeper into 2024, the gaming industry continues to push the boundaries of technology. One of the most crucial components for any gaming rig is the graphics card (GPU). A powerful GPU can significantly enhance your gaming experience, allowing you to play the latest games at high resolutions and frame rates. In this guide, we'll explore the best gaming graphics cards available in 2024
                    </p>


                    <h3 data-aos="fade-right" className="text-2xl font-semibold mb-2 font-mono text-amdOrange">Top-Tier Gaming GPUs</h3>


                    <h3 data-aos="fade-right" className="text-xl font-semibold mb-2 font-mono text-amdOrange">1. NVIDIA GeForce RTX 4090</h3>


                    <ul data-aos="fade-right" className="list-disc pl-6 space-y-2 text-lg">
                        <li>
                            <b className='text-amdOrange'>The Ultimate Gaming Experience:</b> The RTX 4090 is the flagship GPU from NVIDIA, offering unparalleled performance and cutting-edge features like DLSS 3 and ray tracing. It's perfect for 4K gaming at high frame rates.
                        </li>
                    </ul>


                    <h3 data-aos="fade-right" className="text-xl font-semibold mb-2 font-mono text-amdOrange">2. NVIDIA GeForce RTX 4080</h3>


                    <ul data-aos="fade-right" className="list-disc pl-6 space-y-2 text-lg">
                        <li>
                            <b className='text-amdOrange'>High-Performance Gaming:</b> The RTX 4080 is a powerful GPU that delivers excellent performance for 1440p and 4K gaming. It's a great choice for gamers who want a balance of performance and price.
                        </li>
                    </ul>


                    <h3 data-aos="fade-right" className="text-xl font-semibold mb-2 font-mono text-amdOrange">3. AMD Radeon RX 7900 XTX</h3>


                    <ul data-aos="fade-right" className="list-disc pl-6 space-y-2 text-lg">
                        <li>
                            <b className='text-amdOrange'>AMD's Flagship:</b> The RX 7900 XTX is AMD's top-tier GPU, offering impressive performance and features like ray tracing and FSR 2.0. It's a strong contender for gamers who prefer AMD's ecosystem.
                        </li>
                    </ul>



                    <h3 data-aos="fade-right" className="text-xl font-semibold mb-2 font-mono text-amdOrange">4. AMD Radeon RX 7900 XT</h3>


                    <ul data-aos="fade-right" className="list-disc pl-6 space-y-2 text-lg">
                        <li>
                            <b className='text-amdOrange'>High-Performance Alternative:</b> The RX 7900 XT is a more affordable option from AMD, offering excellent performance for 1440p gaming. It's a good choice for gamers who want high performance without breaking the bank.
                        </li>
                    </ul>


                </div>

                {/* Image next to text */}
                <div data-aos="fade-left" className="relative w-full md:w-1/2 h-[300px] md:h-[600px]">
                    <Image
                        src="/blog6/gpu.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6 space-y-6 text-white font-mono">

                <h3 data-aos="fade-up" className="text-2xl font-semibold mb-2 font-mono text-amdOrange">
                    Choosing the Right GPU
                </h3>


                <h3 data-aos="fade-up" className="text-xl font-semibold mb-2 font-mono text-amdOrange">
                    When choosing a GPU, consider the following factors:
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Resolution and Refresh Rate:</b> If you're gaming at 4K resolution with a high refresh rate, you'll need a powerful GPU like the RTX 4090 or RX 7900 XTX. For 1440p gaming, the RTX 4080 or RX 7900 XT is a good choice.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Budget:</b> Determine your budget and choose a GPU that fits your needs and financial constraints.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Features:</b> Consider features like ray tracing, DLSS, and FSR, which can significantly enhance your gaming experience.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Future-Proofing:</b> If you want a GPU that will last for several years, consider a high-end model that can handle future gaming demands.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed ">
                    By carefully considering these factors, you can choose the best GPU to power your gaming rig and enjoy the latest games at their best.
                </p>
            </div>

            <Footer />
        </>
    );
}

export default Blog6;
