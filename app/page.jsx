import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import RecruiterSnapshot from "../components/RecruiterSnapshot";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";

export default function Home() {
    return (
        <>
            <ClientEffects />

            <Navbar />

            <main>

                <Hero />

                <TechTicker />

                <RecruiterSnapshot/>

                <About />

                <Education />

                <Skills />

                <Projects />

                <Experience />

                <CTA />

                <Contact />

            </main>

            <Footer />
        </>
    );
}