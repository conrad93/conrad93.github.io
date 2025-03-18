'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StakeAd from "@/components/StakeAd";
import { useRouter } from "next/navigation";

export default function Games() {

    const router = useRouter();

    const handleRedirect = (slug: string): void => {
        router.push(`/game/${slug}`);
    };

    const games = [
        { name: "Snake", slug: "snake", key: 0 }
    ];

    return (
        <>
            <Navbar />
            <main className="grid grid-cols-4">
                <div className="col-span-3 h-full">
                    <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
                        <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
                                {games && games.map(g => (
                                    <div key={g.key} 
                                        onClick={() => handleRedirect(g.slug)}
                                        className="p-4 bg-white text-dark border-2 border-black font-bold text-center hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                                        {g.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-span-1 h-full">
                </div>
            </main>
            <StakeAd />
            <Footer />
        </>
    );
};