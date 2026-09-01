import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Industries from "../components/Industries";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Technology from "../components/Technology";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />

            <main>

                <Hero />

                <Services />

                <About />

                <Process />

                <Industries />

                <Portfolio />

                <Testimonials />

                <Technology />

                <CTA />

            </main>

            <Footer />
        </>
    );
}