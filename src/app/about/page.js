import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./about.css";

export const metadata = {
    title: "About NYSoftech | Web & Software Solutions",
    description:
        "Learn about NYSoftech, a digital solutions and software development company creating modern websites, SaaS platforms, e-commerce solutions, and custom software.",
};

export default function About() {
    return (
        <>
            <Header />

            <main className="about-page">

                {/* =========================================
                    ABOUT PAGE BANNER
                ========================================= */}

                <section className="inner-page-banner about-banner">

                    <div className="container">

                        <div className="inner-page-banner-content">

                            <div className="section-subtitle">
                                About NYSoftech
                            </div>

                            <h1>
                                Building <span>Digital Solutions.</span>
                            </h1>

                            <p>
                                We design and develop modern digital products
                                that help businesses work smarter, grow faster,
                                and stay ahead.
                            </p>

                            <div className="inner-page-breadcrumb">

                                <a href="/">
                                    Home
                                </a>

                                <i className="bi bi-chevron-right"></i>

                                <span>
                                    About
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    WHO WE ARE
                ========================================= */}

                <section className="about-intro section">

                    <div className="container">

                        <div className="row align-items-center g-5">

                            <div className="col-lg-6">

                                <div className="about-intro-content">

                                    <div className="about-section-label">
                                        Who We Are
                                    </div>

                                    <h2>
                                        We turn ideas into
                                        <span> digital products.</span>
                                    </h2>

                                    <p className="about-intro-lead">
                                        NYSoftech is a digital solutions and
                                        software development company focused
                                        on building technology that solves
                                        real business problems.
                                    </p>

                                    <p>
                                        From websites and e-commerce platforms
                                        to SaaS products and custom software,
                                        we combine strategy, design, and
                                        development to create reliable,
                                        scalable, and easy-to-use solutions.
                                    </p>

                                    <a
                                        href="/contact"
                                        className="about-primary-button"
                                    >
                                        <span>
                                            Start a Conversation
                                        </span>

                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>

                                </div>

                            </div>


                            <div className="col-lg-6">

                                <div className="about-intro-visual">

                                    <div className="about-visual-main">

                                        <div className="about-visual-number">
                                            01
                                        </div>

                                        <div className="about-visual-content">

                                            <span>
                                                Our Approach
                                            </span>

                                            <h3>
                                                Technology with purpose.
                                            </h3>

                                            <p>
                                                We don't just build software.
                                                We understand the problem,
                                                create the right solution,
                                                and build it for long-term
                                                growth.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="about-floating-card">

                                        <i className="bi bi-stars"></i>

                                        <div>
                                            <strong>
                                                Built for Growth
                                            </strong>

                                            <span>
                                                Modern. Scalable. Reliable.
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    STATS
                ========================================= */}

                <section className="about-stats">

                    <div className="container">

                        <div className="about-stats-grid">

                            <div className="about-stat">

                                <strong>
                                    10+
                                </strong>

                                <span>
                                    Years Experience
                                </span>

                            </div>


                            <div className="about-stat">

                                <strong>
                                    100+
                                </strong>

                                <span>
                                    Projects Delivered
                                </span>

                            </div>


                            <div className="about-stat">

                                <strong>
                                    50+
                                </strong>

                                <span>
                                    Happy Clients
                                </span>

                            </div>


                            <div className="about-stat">

                                <strong>
                                    15+
                                </strong>

                                <span>
                                    Industries Served
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    WHAT WE BELIEVE
                ========================================= */}

                <section className="about-believe section">

                    <div className="container">

                        <div className="row align-items-end about-heading-row">

                            <div className="col-lg-7">

                                <div className="about-section-label">
                                    What We Believe
                                </div>

                                <h2>
                                    Technology should make
                                    <span> business simpler.</span>
                                </h2>

                            </div>

                            <div className="col-lg-5">

                                <p>
                                    Great technology isn't about adding
                                    complexity. It's about creating better
                                    experiences, smarter workflows, and
                                    solutions that move your business forward.
                                </p>

                            </div>

                        </div>


                        <div className="row g-4 about-believe-cards">

                            <div className="col-lg-4">

                                <div className="about-believe-card">

                                    <div className="about-card-top">

                                        <span>
                                            01
                                        </span>

                                        <i className="bi bi-lightbulb"></i>

                                    </div>

                                    <h3>
                                        Think Clearly
                                    </h3>

                                    <p>
                                        We understand the problem before
                                        writing a single line of code.
                                    </p>

                                </div>

                            </div>


                            <div className="col-lg-4">

                                <div className="about-believe-card">

                                    <div className="about-card-top">

                                        <span>
                                            02
                                        </span>

                                        <i className="bi bi-code-slash"></i>

                                    </div>

                                    <h3>
                                        Build Better
                                    </h3>

                                    <p>
                                        We focus on clean design, reliable
                                        development, performance, and scale.
                                    </p>

                                </div>

                            </div>


                            <div className="col-lg-4">

                                <div className="about-believe-card">

                                    <div className="about-card-top">

                                        <span>
                                            03
                                        </span>

                                        <i className="bi bi-graph-up-arrow"></i>

                                    </div>

                                    <h3>
                                        Grow Together
                                    </h3>

                                    <p>
                                        We build long-term partnerships and
                                        solutions that evolve with your business.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    CAPABILITIES
                ========================================= */}

                <section className="about-capabilities section">

                    <div className="container">

                        <div className="about-capabilities-header">

                            <div>

                                <div className="about-section-label">
                                    Our Capabilities
                                </div>

                                <h2>
                                    What we <span>do best.</span>
                                </h2>

                            </div>

                            <p>
                                From an idea to a complete digital product,
                                we provide the technology and expertise
                                needed to bring it to life.
                            </p>

                        </div>


                        <div className="about-services-grid">

                            <div className="about-service-item">

                                <div className="about-service-number">
                                    01
                                </div>

                                <div className="about-service-icon">
                                    <i className="bi bi-window"></i>
                                </div>

                                <div className="about-service-content">

                                    <h3>
                                        Web Development
                                    </h3>

                                    <p>
                                        Modern websites and powerful web
                                        applications built for performance
                                        and growth.
                                    </p>

                                </div>

                                <i className="bi bi-arrow-up-right about-service-arrow"></i>

                            </div>


                            <div className="about-service-item">

                                <div className="about-service-number">
                                    02
                                </div>

                                <div className="about-service-icon">
                                    <i className="bi bi-cloud-check"></i>
                                </div>

                                <div className="about-service-content">

                                    <h3>
                                        SaaS Development
                                    </h3>

                                    <p>
                                        Scalable SaaS products designed to
                                        support growing users and businesses.
                                    </p>

                                </div>

                                <i className="bi bi-arrow-up-right about-service-arrow"></i>

                            </div>


                            <div className="about-service-item">

                                <div className="about-service-number">
                                    03
                                </div>

                                <div className="about-service-icon">
                                    <i className="bi bi-cart3"></i>
                                </div>

                                <div className="about-service-content">

                                    <h3>
                                        E-Commerce
                                    </h3>

                                    <p>
                                        High-performing online stores designed
                                        to create better customer experiences.
                                    </p>

                                </div>

                                <i className="bi bi-arrow-up-right about-service-arrow"></i>

                            </div>


                            <div className="about-service-item">

                                <div className="about-service-number">
                                    04
                                </div>

                                <div className="about-service-icon">
                                    <i className="bi bi-cpu"></i>
                                </div>

                                <div className="about-service-content">

                                    <h3>
                                        Custom Software
                                    </h3>

                                    <p>
                                        Business-specific software designed
                                        around your workflows and requirements.
                                    </p>

                                </div>

                                <i className="bi bi-arrow-up-right about-service-arrow"></i>

                            </div>


                            <div className="about-service-item">

                                <div className="about-service-number">
                                    05
                                </div>

                                <div className="about-service-icon">
                                    <i className="bi bi-palette"></i>
                                </div>

                                <div className="about-service-content">

                                    <h3>
                                        UI / UX Design
                                    </h3>

                                    <p>
                                        Clean, intuitive interfaces designed
                                        around real users and real goals.
                                    </p>

                                </div>

                                <i className="bi bi-arrow-up-right about-service-arrow"></i>

                            </div>


                            <div className="about-service-item">

                                <div className="about-service-number">
                                    06
                                </div>

                                <div className="about-service-icon">
                                    <i className="bi bi-gear-wide-connected"></i>
                                </div>

                                <div className="about-service-content">

                                    <h3>
                                        Digital Solutions
                                    </h3>

                                    <p>
                                        Technology solutions tailored to your
                                        business challenges and opportunities.
                                    </p>

                                </div>

                                <i className="bi bi-arrow-up-right about-service-arrow"></i>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    PROCESS
                ========================================= */}

                <section className="about-process section">

                    <div className="container">

                        <div className="row align-items-end about-heading-row">

                            <div className="col-lg-7">

                                <div className="about-section-label">
                                    How We Work
                                </div>

                                <h2>
                                    From idea to
                                    <span> impact.</span>
                                </h2>

                            </div>

                            <div className="col-lg-5">

                                <p>
                                    A simple, transparent process designed
                                    to turn your business idea into a reliable
                                    digital product.
                                </p>

                            </div>

                        </div>


                        <div className="about-process-list">

                            <div className="about-process-item">

                                <div className="about-process-number">
                                    01
                                </div>

                                <div className="about-process-icon">
                                    <i className="bi bi-search"></i>
                                </div>

                                <div className="about-process-content">

                                    <h3>
                                        Discover
                                    </h3>

                                    <p>
                                        Understand your business, users,
                                        goals, and requirements.
                                    </p>

                                </div>

                                <span className="about-process-label">
                                    Understand
                                </span>

                            </div>


                            <div className="about-process-item">

                                <div className="about-process-number">
                                    02
                                </div>

                                <div className="about-process-icon">
                                    <i className="bi bi-diagram-3"></i>
                                </div>

                                <div className="about-process-content">

                                    <h3>
                                        Define
                                    </h3>

                                    <p>
                                        Create the strategy, architecture,
                                        roadmap, and project direction.
                                    </p>

                                </div>

                                <span className="about-process-label">
                                    Plan
                                </span>

                            </div>


                            <div className="about-process-item">

                                <div className="about-process-number">
                                    03
                                </div>

                                <div className="about-process-icon">
                                    <i className="bi bi-code-square"></i>
                                </div>

                                <div className="about-process-content">

                                    <h3>
                                        Build
                                    </h3>

                                    <p>
                                        Design, develop, test, and integrate
                                        your digital solution.
                                    </p>

                                </div>

                                <span className="about-process-label">
                                    Create
                                </span>

                            </div>


                            <div className="about-process-item">

                                <div className="about-process-number">
                                    04
                                </div>

                                <div className="about-process-icon">
                                    <i className="bi bi-rocket-takeoff"></i>
                                </div>

                                <div className="about-process-content">

                                    <h3>
                                        Launch & Grow
                                    </h3>

                                    <p>
                                        Launch confidently and continue
                                        improving as your business grows.
                                    </p>

                                </div>

                                <span className="about-process-label">
                                    Grow
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    WHY NYSOFTECH
                ========================================= */}

                <section className="about-why">

                    <div className="container">

                        <div className="row align-items-center g-5">

                            <div className="col-lg-6">

                                <div className="about-why-content">

                                    <div className="about-section-label">
                                        Why NYSoftech
                                    </div>

                                    <h2>
                                        Built for businesses
                                        <span> ready to move forward.</span>
                                    </h2>

                                    <p>
                                        We bring together business thinking,
                                        creative design, and modern technology
                                        to create digital solutions that make
                                        a measurable difference.
                                    </p>

                                </div>

                            </div>


                            <div className="col-lg-6">

                                <div className="about-why-list">

                                    <div className="about-why-item">

                                        <div className="about-why-icon">
                                            <i className="bi bi-chat-square-text"></i>
                                        </div>

                                        <div>
                                            <h3>
                                                Clear Communication
                                            </h3>

                                            <p>
                                                Transparent communication
                                                without unnecessary technical
                                                complexity.
                                            </p>
                                        </div>

                                    </div>


                                    <div className="about-why-item">

                                        <div className="about-why-icon">
                                            <i className="bi bi-bullseye"></i>
                                        </div>

                                        <div>
                                            <h3>
                                                Practical Solutions
                                            </h3>

                                            <p>
                                                Technology focused on solving
                                                real business problems.
                                            </p>
                                        </div>

                                    </div>


                                    <div className="about-why-item">

                                        <div className="about-why-icon">
                                            <i className="bi bi-layers"></i>
                                        </div>

                                        <div>
                                            <h3>
                                                Scalable Technology
                                            </h3>

                                            <p>
                                                Solutions designed to evolve
                                                as your business grows.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="about-why-item">

                                        <div className="about-why-icon">
                                            <i className="bi bi-check2-circle"></i>
                                        </div>

                                        <div>
                                            <h3>
                                                Quality First
                                            </h3>

                                            <p>
                                                Performance, usability,
                                                reliability, and clean
                                                development from day one.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    FINAL CTA
                ========================================= */}

                <section className="about-cta">

                    <div className="container">

                        <div className="about-cta-inner">

                            <div className="about-cta-content">

                                <div className="section-subtitle">
                                    Let's Build Something
                                </div>

                                <h2>
                                    Have an idea worth
                                    <span> building?</span>
                                </h2>

                                <p>
                                    Let's turn your next idea into a digital
                                    solution that makes a difference.
                                </p>

                            </div>


                            <a
                                href="/contact"
                                className="about-cta-button"
                            >

                                <span>
                                    Start a Project
                                </span>

                                <i className="bi bi-arrow-up-right"></i>

                            </a>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}