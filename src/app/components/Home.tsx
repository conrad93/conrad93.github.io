import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="grid grid-cols-4">
                <div className="col-span-3 h-full">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                </div>
                <div className="col-span-1 h-full">
                </div>
            </main>
            <Footer />
        </>
    );
}