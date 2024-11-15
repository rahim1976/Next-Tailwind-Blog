import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog4 = () => {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-[600px]">
                <Image
                    src="/blog4/gaming.jpg"
                    alt="blog4"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">
                        Everything You Need To Know

                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4">
                    <p data-aos="fade-right" className="text-lg leading-relaxed text-white font-mono">
                        Building a gaming PC doesn't have to break the bank. With careful planning and smart component selection, you can create a powerful gaming rig on a budget. In this guide, we'll walk you through the process of building a budget gaming PC, from selecting components to assembling the system.
                    </p>
                    <h3 data-aos="fade-right" className="text-xl font-semibold mb-2 font-mono text-amdOrange">Step 1: Set Your Budget</h3>
                    <p data-aos="fade-right" className="text-lg leading-relaxed text-white font-mono">
                        The first step is to determine your budget. This will help you narrow down your component choices. Consider factors like the resolution and refresh rate of your monitor, the types of games you want to play, and your desired level of performance.
                    </p>


                    <h3 data-aos="fade-right" className="text-xl font-semibold mb-2 font-mono text-amdOrange">Step 2: Choose Your Components</h3>
                    <p data-aos="fade-right" className="text-lg leading-relaxed text-white font-mono">
                        Once you have a budget in mind, you can start selecting components. Here are some key components to consider:
                    </p>
                    <ul data-aos="fade-right" className="list-disc pl-6 space-y-2 text-lg font-mono">
                        <li>
                            <b className='text-amdOrange'>Processor (CPU):</b> Opt for a budget-friendly CPU like the AMD Ryzen 5 or Intel Core i5.
                        </li>
                        <li>
                            <b className='text-amdOrange'>Graphics Card (GPU):</b> A mid-range GPU from NVIDIA or AMD can provide excellent performance for most games.
                        </li>
                        <li>
                            <b className='text-amdOrange'>Motherboard:</b> Choose a motherboard that is compatible with your CPU and GPU, and offers enough expansion slots for future upgrades.
                        </li>
                        <li>
                            <b className='text-amdOrange'>RAM:</b> 16GB of RAM is a good starting point for most gaming PCs.
                        </li>
                        <li>
                            <b className='text-amdOrange'>Storage:</b> A solid-state drive (SSD) for your operating system and frequently used games can significantly improve boot times and loading speeds.
                        </li>
                        <li>
                            <b className='text-amdOrange'>PSU:</b> Ensure your PSU can handle the power requirements of your components.
                        </li>
                        <li>
                            <b className='text-amdOrange'>Case:</b> Choose a case that provides good airflow and cable management.
                        </li>
                    </ul>
                </div>

                {/* Image next to text */}
                <div data-aos="fade-left" className="relative w-full md:w-1/2 h-[300px] md:h-[400px] ">
                    <Image
                        src="/blog4/build.jpg"
                        alt="blog4"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6 space-y-6 text-white font-mono">

                <h3 data-aos="fade-up" className="text-xl font-semibold mb-2 font-mono text-amdOrange">Step 3: Assemble Your PC</h3>

                <p data-aos="fade-up" className="text-lg leading-relaxed font-mono text-white">
                    Once you have all your components, it's time to assemble your PC. Here are the basic steps:

                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg text-white font-mono">
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the CPU:</b> Carefully install the CPU into the motherboard socket.

                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the CPU Cooler:</b> Attach the CPU cooler to the motherboard and connect the power cable.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the RAM:</b> Insert the RAM modules into the DIMM slots on the motherboard.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the Motherboard into the Case:</b> Secure the motherboard to the case using standoffs and screws.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the Storage Drives:</b> Connect the SSD or HDD to the motherboard using SATA cables.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the Graphics Card:</b> Insert the graphics card into a PCIe slot on the motherboard.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Install the Graphics Card:</b> Insert the graphics card into a PCIe slot on the motherboard.
                    </li>
                    <li data-aos="fade-up">
                        <b className='text-amdOrange'>Connect Peripherals:</b> Connect your keyboard, mouse, monitor, and other peripherals to the motherboard or graphics card.
                    </li>
                </ul>

                <h3 data-aos="fade-up" className="text-xl font-semibold mb-2 font-mono text-amdOrange">
                    Step 4: Install the Operating System and Drivers
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li data-aos="fade-up"><b className='text-amdOrange'>Install the Operating System: </b>Install your preferred operating system, such as Windows 10 or 11. </li>
                    <li data-aos="fade-up"><b className='text-amdOrange'>Install Drivers:</b> Install the latest drivers for your motherboard, graphics card, and other components.</li>
                </ul>


                <h3 data-aos="fade-up" className="text-xl font-semibold mb-2 font-mono text-amdOrange">
                    Step 5: Optimize Your PC
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li data-aos="fade-up"><b className='text-amdOrange'>Update Drivers: </b>Keep your drivers up-to-date to ensure optimal performance.</li>
                    <li data-aos="fade-up"><b className='text-amdOrange'>Adjust Settings:</b>Tweak your game settings to balance performance and visual quality.</li>
                    <li data-aos="fade-up"><b className='text-amdOrange'>Overclocking:</b>  If you're comfortable, you can overclock your CPU and GPU to boost performance. However, this requires careful monitoring and can void your warranty.</li>
                </ul>
                <p className='text-lg leading-relaxed'>
                    By following these steps, you can build a powerful and affordable gaming PC that can handle the latest games. Remember to do thorough research and read reviews before purchasing any components.
                </p>
            </div>

            <Footer />
        </>
    );
}

export default Blog4;
