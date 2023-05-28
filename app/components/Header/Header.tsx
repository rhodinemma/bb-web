"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/public/images/baby.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed sm:w-full sm:top-0 sm:left-0 z-20 text-white backdrop-blur-sm bg-white-200/30 sm:flex-wrap sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div>
                        <Image src={Logo} alt="BabyBridge" width={120} height={120} />
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6 fill-black" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className={`px-2 pt-2 pb-4 gap-10 sm:flex sm:flex-wrap hidden md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="block px-2 py-1 bg-[#FFBF9B] text-black font-semibold text-2xl rounded hover:bg-[#FFBF9B] hover:text-black">
                        Home
                    </a>
                    <a href="#" className="mt-1 block px-2 py-1 bg-[#FFBF9B] text-black text-2xl font-semibold rounded hover:bg-[#FFBF9B] hover:text-black sm:mt-0 sm:ml-2">
                        Services
                    </a>
                    <a href="#" className="mt-1 block px-2 py-1 bg-[#FFBF9B] text-black text-2xl font-semibold rounded hover:bg-[#FFBF9B] hover:text-black sm:mt-0 sm:ml-2">
                        About Us
                    </a>
                    <a href="#" className="mt-1 block px-2 py-1 bg-[#FFBF9B] text-black text-2xl font-semibold rounded hover:bg-[#FFBF9B] hover:text-black sm:mt-0 sm:ml-2">
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
