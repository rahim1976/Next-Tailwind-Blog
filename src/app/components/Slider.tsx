"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const Slider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [activeIndex]);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div id="default-carousel" className="relative w-full ">
                <div className="relative h-56 overflow-hidden md:h-96">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 duration-700 ease-in-out transform ${index === activeIndex
                                    ? "opacity-100 translate-x-0"    // Image is in the view
                                    : index < activeIndex
                                        ? "opacity-0 -translate-x-full"  // Exit to the left
                                        : "opacity-0 translate-x-full"   // Enter from the right
                                }`}
                            style={{ transition: "all 0.7s ease-in-out" }} // Smooth transition
                        >
                            <Image
                                src={img}
                                className="block w-full h-full object-cover"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Carousel navigation buttons */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-amdOrange" : "bg-gray-400"
                                }`}
                            aria-current={index === activeIndex ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => handleDotClick(index)}
                        ></button>
                    ))}
                </div>

                {/* Previous and Next buttons */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handlePrev}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/100 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handleNext}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/100 dark:group-hover:bg-gray-800/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
