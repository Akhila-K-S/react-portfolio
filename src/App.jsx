import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
    return (
        <div className="overflow-x-hidden bg-neutral-50 text-neutral-800 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:bg-transparent dark:text-neutral-300">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </div>

            <Navbar />

            <main className="container mx-auto max-w-7xl px-6 pt-[4.5rem] sm:px-8">
                <Hero />
                <About />
                <Technologies />
                <Experiences />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;
