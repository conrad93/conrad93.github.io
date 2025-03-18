"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="bg-white text-dark border-2 border-black w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center justify-center sm:justify-start">
                        <Link href="/" className="text-2xl font-bold">
                            Conrad Nunes
                        </Link>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end">
                        <button type='button' className="bg-white text-black text-lg font-bold py-1 px-2 hover:bg-black hover:text-white transition duration-300 cursor-pointer" onClick={toggleMenu}>
                            { isMenuOpen ? 'Close' : 'Menu' }
                        </button>
                    </div>
                </div>
                { isMenuOpen && (
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 mt-4">
                        <Link href="/" className="text-lg font-bold p-2 m-1">
                            Home
                        </Link>
                        <Link href="/blogs" className="text-lg font-bold p-2 m-1">
                            Blogs
                        </Link>
                        <Link href="/games" className="text-lg font-bold p-2 m-1">
                            Games
                        </Link>
                    </div>
                ) }
            </div>
        </nav>
    );
};

export default Navbar;