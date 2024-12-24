import About from "./About";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import StakeAd from "./StakeAd";

export default function Home() {
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
                <div className="col-span-1 h-full">
                </div>
            </main>
            <Footer />
        </>
    );
}