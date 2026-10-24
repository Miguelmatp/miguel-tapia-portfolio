
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

export default function App() {
    return (
        <div className="ctnGeneral">
            <Header />
            <main className="ctnMain">
                <Hero />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
