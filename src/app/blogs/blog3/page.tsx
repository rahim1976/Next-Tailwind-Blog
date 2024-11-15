import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog3 = () => {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-[400px]">
                <Image
                    src="/blog3/bg.jpg"
                    alt="blog3"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">
                        A Glimpse into Tomorrow's Tech
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div data-aos="fade-right" className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg leading-relaxed font-mono text-white">
                        PC gaming has come a long way since its humble beginnings. From the early days of DOS-based games to the immersive experiences of today, the industry has consistently pushed the boundaries of technology. As we look ahead, it's clear that the future of PC gaming is poised for even greater innovation. In this blog post, we'll delve into some of the most exciting emerging technologies and trends that are shaping the future of PC gaming.
                    </p>
                    <p className="text-lg leading-relaxed font-mono text-white">
                        The future of PC gaming is incredibly bright, with exciting innovations on the horizon. From cutting-edge hardware to groundbreaking technologies, the gaming industry is constantly evolving. By embracing these advancements, gamers can look forward to even more immersive, realistic, and enjoyable experiences.
                    </p>
                </div>

                {/* Image next to text */}
                <div data-aos="fade-right" className="relative w-full md:w-1/2 h-[200px] md:h-[400px]">
                    <Image
                        src="/blog3/pc.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6 space-y-6 text-white">
                <p data-aos="fade-up" className="text-lg leading-relaxed font-mono text-amdOrange">
                    Next-Generation Hardware
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg font-mono">
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>DDR5 RAM:</b> The next generation of RAM, DDR5, offers significantly higher bandwidth and lower latency than its predecessor, DDR4. This translates to faster loading times, smoother gameplay, and improved overall system responsiveness.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>PCIe 5.0 SSDs:</b> PCIe 5.0 SSDs are set to revolutionize storage performance, delivering lightning-fast read and write speeds. This will significantly reduce load times for games and other applications, making the gaming experience even more seamless.


                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Advanced Cooling Solutions:</b> As hardware becomes more powerful, efficient cooling solutions are essential to maintain optimal performance and prevent thermal throttling. Liquid cooling systems and advanced air cooling solutions will continue to evolve, offering better cooling performance and quieter operation.


                    </li>
                </ul>

                <p data-aos="fade-up" className="text-lg leading-relaxed font-mono">
                    Emerging technologies are rapidly transforming the gaming landscape. From advanced graphics rendering techniques like ray tracing to immersive virtual and augmented reality experiences, these innovations are pushing the boundaries of what's possible in PC gaming.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg font-mono">
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Ray Tracing:</b> Ray tracing is a rendering technique that simulates the behavior of light, resulting in incredibly realistic lighting and reflections. While it's already available in some games, future advancements in hardware and software will make ray tracing more accessible and visually stunning.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Cloud Gaming:</b> Cloud gaming services allow players to stream games to their devices without the need for powerful hardware. This could democratize PC gaming, making it accessible to a wider audience.

                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>E-sports and Competitive Gaming:</b> E-sports continues to grow in popularity, with millions of people tuning in to watch professional gamers compete. As the industry matures, we can expect to see even larger prize pools, more sophisticated tournaments, and greater integration of technology.

                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Subscription Services: </b>Subscription services offer gamers access to a library of games for a monthly fee. This model provides excellent value for money and eliminates the need for individual game purchases.

                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Artificial Intelligence (AI):  </b>AI is being used in various aspects of gaming, from generating realistic environments to enhancing gameplay experiences. AI-powered NPCs, dynamic weather systems, and intelligent opponents are just a few examples of how AI is shaping the future of gaming.
                    </li>
                </ul>
            </div>

            <Footer />
        </>
    );
}

export default Blog3;
