import React from 'react';
import Image from 'next/image';
import boy from "../images/boy.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />

            <div
                className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Container with low opacity */}
                <div className="max-w-4xl w-full rounded-lg shadow-lg p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* Profile Image */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-200">
                            <Image
                                src={boy}
                                alt="About Me"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {/* Bio Text */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                Who Is Rahim Ali.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                I am an experianced Front-End Developer, Passionate and results-driven with over two years of hands-on experience in building dynamic, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, frameworks like React, Next.js & Laravel/PHP.
                            </p>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                Over the course of my career, I’ve developed and maintained websites for a variety of clients from Pakistan & UAE, optimizing their performance, SEO, and user experience. including developing eCommerce sites using PHP/Laravel and MySQL,
                            </p>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                I am constantly evolving and learning new technologies to stay at the forefront of the ever-changing web development landscape. Currently, I am delving into Web3 development and improving my expertise in frontend frameworks.

                                I am confident in my ability to contribute effectively to any team or project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
