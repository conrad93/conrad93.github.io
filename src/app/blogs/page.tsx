'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Blogs() {

    const router = useRouter();

    const handleRedirect = (slug: string): void => {
        router.push(`/blog/${slug}`);
    };

    return (
        <>
            <Navbar />
            <main className="grid grid-cols-4">
                <div className="col-span-3 h-full">
                    <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
                        <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
                            <button onClick={() => handleRedirect("test")} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Test
                            </button>
                        </div>
                    </section>
                </div>
                <div className="col-span-1 h-full">
                </div>
            </main>
            <Footer />
        </>
    );
};