import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Blog() {

    return (
        <>
            <Navbar />
            <main className="grid grid-cols-4">
                <div className="col-span-3 h-full">
                    <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
                        <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
                            Test working
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