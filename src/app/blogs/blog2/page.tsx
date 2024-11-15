import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const Blog2 = () => {
    return (
        <>
            <Navbar />


            <div className="relative w-full h-[600px]">
                <Image
                    src="/blog2/series.jpg"
                    alt="image"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center font-mono"> MSI X870 Motherboard Series: Tailored for Every Need
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6 font-mono">
                {/* Text content */}
                <div data-aos="fade-right" className="md:w-1/2">
                    <p className="text-lg">
                        MSI has taken a bold step forward in motherboard design with the launch of its new X870 chipset, specifically engineered to support AMD’s groundbreaking Ryzen 9000 Series processors. These new processors, built on cutting-edge 4nm process technology, promise to redefine performance standards for high-end gaming, content creation, and professional workloads. With the latest features and unmatched reliability, MSI’s X870 motherboards cater to a wide range of users, from extreme enthusiasts to everyday professionals. Let’s dive deeper into the features and the MSI motherboard series built for these processors.


                    </p>
                    <p className="text-lg font-mono">
                        At the core of this new offering is the AMD Ryzen 9000 Series, which includes the powerful Ryzen™ 9 9950X, 9900X, Ryzen™ 7 9700X, and Ryzen™ 5 9600X processors. Designed with an AM5 socket, these processors are optimized for the latest X870 motherboards, providing users with unparalleled performance, especially in multi-threaded tasks like gaming, video rendering, and AI computing. The processors are built on AMD’s new 4nm architecture, which promises significantly improved efficiency and speed over previous generations

                    </p>
                </div>

                {/* Image next to text */}
                <div data-aos="fade-left" className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="/blog2/zero.jpg"
                        alt="blog2"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6">
                <h2 data-aos="fade-up" className="text-2xl font-bold mb-4 font-mono text-amdOrange">The Ryzen 9000 Series: A New Era of Performance
                </h2>
                <p data-aos="fade-up" className="mb-4 font-mono">
                    MSI’s new X870 motherboards are divided into several distinct product lines: MEG, MPG, and MAG. Each series is designed to meet specific needs, whether you're an enthusiast looking for the highest performance or a gamer who values aesthetics alongside functionality.
                </p>
                <p data-aos="fade-up" className="mb-4 font-mono">
                    The X870 chipset delivers support for PCIe Gen 5.0, providing double the bandwidth of PCIe 4.0, making it ideal for high-speed data transfer, whether you’re adding the latest NVMe drives or utilizing next-gen GPUs. Additionally, these boards come with support for USB 4 and Wi-Fi 7, ensuring future-proof connectivity options that offer speeds of up to 40Gbps for USB devices and 5.8Gbps for wireless internet
                </p>
                <h3 data-aos="fade-up" className="text-xl font-semibold mb-2 text-amdOrange">MSI X870 Motherboard Series: Tailored for Every Need</h3>
                <p data-aos="fade-up" className="mb-4 font-mono">
                    <strong className='text-amdSilver'>MAG Series: Affordable Performance for Gamers: </strong>The MAG X870 TOMAHAWK WIFI continues MSI’s tradition of delivering reliable motherboards at an affordable price. While it doesn’t have all the bells and whistles of the MEG or MPG series, it still offers top-tier performance and cutting-edge features, making it an excellent choice for budget-conscious gamers
                </p>
                <p data-aos="fade-up" className="mb-4 font-mono">
                    <strong className='text-amdSilver'>MPG Series: Gaming and Performance in Balance:</strong> Next up is the MPG X870E CARBON WIFI, designed for gamers who want premium features at a more accessible price point. With a sleek carbon fiber finish and customizable RGB lighting, this motherboard not only looks good but also packs a punch in terms of performance. It comes equipped with a robust 18-phase power system, efficient extended heatsinks, and Wi-Fi 7 support, ensuring that your gaming or content creation experience is seamless
                </p>
                <p data-aos="fade-up" className="mb-4 font-mono">
                    <strong className='text-amdSilver'>MEG Series: The Pinnacle of Performance:</strong> The MEG X870E GODLIKE is the star of MSI’s MEG lineup. Built for the most demanding users, it features a premium 24+2+1 phase design to deliver stable power for the latest Ryzen processors. It includes a 3.99-inch LCD Dynamic Dashboard that provides real-time hardware monitoring, BIOS updates, and other customizable displays. The motherboard also boasts M.2 XPANDER-Z SLIDER GEN5 slots, providing up to seven M.2 drives for massive storage capacity and speed
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Blog2;