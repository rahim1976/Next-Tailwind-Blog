import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const Blog1 = () => {
    return (
        <>
            <Navbar />


            <div className="relative w-full h-[500px]">
                <Image
                    src="/blog1/amd.jpg"
                    alt="blog1"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-5xl font-bold text-left font-mono">A New Standard in Performance</h1>
                </div>  
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div data-aos="fade-right" className="md:w-1/2">
                    <p className="text-lg font-mono">
                        AMD has once again shaken the tech world with its latest release: the Ryzen 9000 Zen 5 Series. Built on the advanced 5nm architecture, this series is set to redefine expectations for high-performance CPUs, especially in the realm of gaming and professional workloads. The company has aimed this launch squarely at outperforming Intel’s Core i9 Ultra series, and early benchmarks suggest they’ve achieved just that.
                    </p>
                    <p className="text-lg font-mono">
                        For years, AMD has been closing the gap with Intel, but the Ryzen 9000 appears to firmly put AMD on top, particularly in gaming performance. In real-world FPS tests, Ryzen 9000 Zen 5 processors surpass the Intel Core i9 Ultra by a significant margin in several popular titles. Gamers report a smooth experience in demanding AAA games, with AMD’s chips delivering higher frame rates while keeping temperatures in check.


                    </p>
                </div>

                {/* Image next to text */}
                <div data-aos="fade-left" className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="/blog1/9800x3d.jpg"
                        alt="blog1"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6">
                <h2 data-aos="fade-up" className="text-2xl font-bold mb-4 text-amdOrange font-mono">Zen 5 Architecture: Breaking New Ground</h2>
                <p data-aos="fade-up" className="mb-4 font-mono">
                    One of the reasons for this leap is AMD’s innovative Zen 5 architecture. Designed with energy efficiency and raw power in mind, the architecture enables better multicore performance and optimized power consumption. For users who need a powerful machine for multitasking and demanding workloads, this series provides a noticeable improvement, particularly for creators working with 4K video editing, 3D modeling, or machine learning tasks.


                </p>
                <p data-aos="fade-up" className="mb-4 font-mono">
                With the Ryzen 9000 Zen 5 Series, AMD continues to offer better value for performance compared to Intel. The reduced power draw means not only cooler performance but also a decrease in overall energy consumption—a detail increasingly significant for eco-conscious consumers and businesses alike. Gamers, content creators, and tech enthusiasts now have a reliable alternative to Intel that outshines in FPS, energy efficiency, and price.
                </p>
                <h3 data-aos="fade-up"  className="text-xl font-semibold mb-2 font-mono text-amdOrange">AMD's Ryzen 9000 Series outperforms Intel's Core i9 Ultra</h3>
                <p data-aos="fade-up"  className="mb-4 font-mono">
                    <strong className='text-amdSilver'>Higher FPS in AAA Gaming: AMD’s Ryzen 9000 Dominates Core i9 Ultra: </strong>The Ryzen 9000 Series shines in gaming, delivering higher frames per second in top-tier AAA titles. With smoother gameplay and reduced frame drops, it’s a favorite for gamers seeking peak performance. AMD’s new architecture ensures the Ryzen 9000 consistently outpaces Intel’s Core i9 Ultra in real-world tests.
                </p>
                <p data-aos="fade-up"  className="mb-4 font-mono">
                    <strong className='text-amdSilver'>Efficient Power Consumption and Cooling Solutions with Zen 5 Architecture:</strong> Trust is part of the bedrock of AI’s deployment. Globally, 78% of respondents say it is very or critically important that they can trust their AI’s output is fair, safe, and reliable. Additionally, being able to explain how AI arrived at a decision is universally important (83%).
                </p>
                <p data-aos="fade-up"  className="mb-4 font-mono">
                    <strong className='text-amdSilver'>Multitasking and Creative Workloads: Ryzen 9000 Leads in Productivity:</strong> AMD’s Ryzen 9000 Series excels in tasks like video editing, 3D rendering, and data processing. Its enhanced core performance and multitasking capabilities give it a clear advantage over Intel’s Core i9 Ultra, making it the top choice for professionals needing reliable, high-powered productivity.
                </p>
            </div>

            <Footer />
        </>
    );
}

export default Blog1;