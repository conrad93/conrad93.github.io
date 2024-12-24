"use client";

import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import StakeAd from "@/components/StakeAd";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="grid grid-cols-4">
                <div className="col-span-3 h-full">
                    <StakeAd />
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <ContactMe />
                </div>
                <div className="col-span-1 h-full"></div>
            </main>
            <Footer />
        </>
    );
}
