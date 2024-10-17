"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="bg-white text-dark border-2 border-black sticky w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">
                            Conrad Nunes
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button type='button' className="bg-white text-black text-lg font-bold py-1 px-2 hover:bg-black hover:text-white transition duration-300 cursor-pointer" onClick={toggleMenu}>
                            { isMenuOpen ? 'Close' : 'Menu' }
                        </button>
                    </div>
                </div>
                { isMenuOpen && (
                    <div className="flex items-center justify-center">
                        <Link href="/" className="text-lg font-bold p-2 m-1">
                            Home
                        </Link>
                        <Link href="/blogs" className="text-lg font-bold p-2 m-1">
                            Blogs
                        </Link>
                    </div>
                ) }
            </div>
        </nav>
    );
};

export default Navbar;