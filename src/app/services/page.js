import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./services.css";

export const metadata = {
    title: "Services | NYSoftech - Web & Software Solutions",
    description:
        "NYSoftech provides web development, SaaS, e-commerce, WordPress, Shopify, custom software, UI/UX design, and API integration solutions for growing businesses.",
};

const services = [
    {
        number: "01",
        icon: "bi-window-stack",
        title: "Web Development",
        slug: "web-development",
        description:
            "Fast, modern and scalable websites and web applications designed around your business goals.",
        tags: ["Next.js", "React", "Node.js"],
        className: "service-tile-large",
    },

    {
        number: "02",
        icon: "bi-cloud-check",
        title: "SaaS Development",
        slug: "saas-development",
        description:
            "Turn your product idea into a scalable SaaS platform built for real users and long-term growth.",
        tags: ["SaaS", "Cloud", "API"],
        className: "service-tile-dark",
    },

    {
        number: "03",
        icon: "bi-cart3",
        title: "E-Commerce",
        slug: "ecommerce",
        description:
            "High-performing online stores focused on usability, performance and conversions.",
        tags: ["Shopify", "WooCommerce"],
        className: "",
    },

    {
        number: "04",
        icon: "bi-cpu",
        title: "Custom Software",
        slug: "custom-software",
        description:
            "Purpose-built software that fits your workflows, automates processes and solves specific business challenges.",
        tags: ["Laravel", "PHP", "Node.js"],
        className: "service-tile-wide service-tile-dark",
    },

    {
        number: "05",
        icon: "bi-globe2",
        title: "WordPress",
        slug: "wordpress",
        description:
            "Custom WordPress websites, themes, plugins and business platforms.",
        tags: ["WordPress", "PHP"],
        className: "",
    },

    {
        number: "06",
        icon: "bi-bag-check",
        title: "Shopify",
        slug: "shopify",
        description:
            "Custom Shopify stores and integrations designed for better customer experiences.",
        tags: ["Shopify", "Liquid"],
        className: "",
    },

    {
        number: "07",
        icon: "bi-palette",
        title: "UI / UX Design",
        slug: "ui-ux",
        description:
            "Simple, intuitive interfaces designed around users, products and business objectives.",
        tags: ["UI", "UX", "Figma"],
        className: "service-tile-dark",
    },

    {
        number: "08",
        icon: "bi-plug",
        title: "API & Integrations",
        slug: "api-integrations",
        description:
            "Connect your systems, services and business tools with reliable APIs and integrations.",
        tags: ["REST API", "Integration"],
        className: "service-tile-wide",
    },
];

const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "Laravel",
    "PHP",
    "WordPress",
    "Shopify",
    "MongoDB",
    "MySQL",
    "REST API",
];

export default function Services() {
    return (
        <>
            <Header />

            <main className="services-page">

                {/* =========================================
                    BANNER
                ========================================= */}

                <section className="inner-page-banner services-banner">

                    <div className="container">

                        <div className="inner-page-banner-content">

                            <div className="section-subtitle">
                                What We Build
                            </div>

                            <h1>
                                Digital solutions
                                <span> that move businesses.</span>
                            </h1>

                            <p>
                                We design and develop websites, software,
                                e-commerce platforms and digital products
                                built around your business.
                            </p>

                            <div className="inner-page-breadcrumb">

                                <a href="/">
                                    Home
                                </a>

                                <i className="bi bi-chevron-right"></i>

                                <span>
                                    Services
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    INTRO
                ========================================= */}

                <section className="services-intro section">

                    <div className="container">

                        <div className="services-intro-grid">

                            <div className="services-intro-heading">

                                <div className="services-label">
                                    Our Expertise
                                </div>

                                <h2>
                                    Technology with a
                                    <span> purpose.</span>
                                </h2>

                            </div>

                            <div className="services-intro-text">

                                <div className="services-intro-number">
                                    08
                                </div>

                                <p>
                                    From a simple business website to a
                                    complex software platform, we combine
                                    strategy, design and development to
                                    create technology that delivers real
                                    business value.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    SERVICE TILES
                ========================================= */}

                <section className="services-tiles-section">

                    <div className="container">

                        <div className="services-tiles-grid">

                            {services.map((service) => (

                               <a
									href={`/services/${service.slug}`}
									className={`service-tile ${service.className}`}
									key={service.number}
								>

                                    <div className="service-tile-top">

                                        <span className="service-number">
                                            {service.number}
                                        </span>

                                        <div className="service-icon">
                                            <i
                                                className={`bi ${service.icon}`}
                                            ></i>
                                        </div>

                                    </div>


                                    <div className="service-tile-body">

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>

                                    </div>


                                    <div className="service-tile-bottom">

                                        <div className="service-tags">

                                            {service.tags.map((tag) => (
                                                <span key={tag}>
                                                    {tag}
                                                </span>
                                            ))}

                                        </div>

                                        <div className="service-arrow">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </div>

                                    </div>

                                </a>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =========================================
                    FEATURE / PRODUCT SECTION
                ========================================= */}

                <section className="services-product section">

                    <div className="container">

                        <div className="services-product-grid">

                            <div className="services-product-content">

                                <div className="services-label">
                                    From Idea To Product
                                </div>

                                <h2>
                                    Build something
                                    <span> meaningful.</span>
                                </h2>

                                <p>
                                    Have an idea but don't know where to
                                    start? We help turn concepts into
                                    real digital products through strategy,
                                    design, development and technology.
                                </p>

                                <a
                                    href="/contact"
                                    className="services-product-button"
                                >

                                    <span>
                                        Start a Conversation
                                    </span>

                                    <i className="bi bi-arrow-up-right"></i>

                                </a>

                            </div>


                            <div className="services-product-visual">

                                <div className="product-grid-lines"></div>

                                <div className="product-orbit product-orbit-one">
                                    <span></span>
                                </div>

                                <div className="product-orbit product-orbit-two">
                                    <span></span>
                                </div>

                                <div className="product-core">

                                    <i className="bi bi-code-slash"></i>

                                    <span>
                                        NYSOFTECH
                                    </span>

                                </div>

                                <div className="product-node node-one">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <div className="product-node node-two">
                                    <i className="bi bi-palette"></i>
                                </div>

                                <div className="product-node node-three">
                                    <i className="bi bi-code-square"></i>
                                </div>

                                <div className="product-node node-four">
                                    <i className="bi bi-rocket-takeoff"></i>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    TECHNOLOGY
                ========================================= */}

                <section className="services-technology section">

                    <div className="container">

                        <div className="technology-header">

                            <div>

                                <div className="services-label">
                                    Technology
                                </div>

                                <h2>
                                    Built with the
                                    <span> right tools.</span>
                                </h2>

                            </div>

                            <p>
                                We select technologies based on your product,
                                business requirements, performance needs and
                                long-term goals.
                            </p>

                        </div>


                        <div className="technology-bento">

                            {technologies.map((technology, index) => (

                                <div
                                    className="technology-tile"
                                    key={technology}
                                >

                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <strong>
                                        {technology}
                                    </strong>

                                    <i className="bi bi-arrow-up-right"></i>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =========================================
                    PROCESS
                ========================================= */}

                <section className="services-process section">

                    <div className="container">

                        <div className="process-heading">

                            <div>

                                <div className="services-label">
                                    How We Work
                                </div>

                                <h2>
                                    From concept
                                    <span> to launch.</span>
                                </h2>

                            </div>

                            <p>
                                A simple process keeps your project clear,
                                focused and moving forward.
                            </p>

                        </div>


                        <div className="process-tiles">

                            <div className="process-tile">

                                <span>
                                    01
                                </span>

                                <div className="process-icon">
                                    <i className="bi bi-search"></i>
                                </div>

                                <h3>
                                    Discover
                                </h3>

                                <p>
                                    Understand your business, users and goals.
                                </p>

                            </div>


                            <div className="process-tile process-tile-featured">

                                <span>
                                    02
                                </span>

                                <div className="process-icon">
                                    <i className="bi bi-diagram-3"></i>
                                </div>

                                <h3>
                                    Design
                                </h3>

                                <p>
                                    Shape the product, experience and roadmap.
                                </p>

                            </div>


                            <div className="process-tile">

                                <span>
                                    03
                                </span>

                                <div className="process-icon">
                                    <i className="bi bi-code-slash"></i>
                                </div>

                                <h3>
                                    Build
                                </h3>

                                <p>
                                    Develop, integrate and test the solution.
                                </p>

                            </div>


                            <div className="process-tile">

                                <span>
                                    04
                                </span>

                                <div className="process-icon">
                                    <i className="bi bi-rocket-takeoff"></i>
                                </div>

                                <h3>
                                    Launch
                                </h3>

                                <p>
                                    Launch and continue improving your product.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    WHY NYSOFTECH
                ========================================= */}

                <section className="services-why">

                    <div className="container">

                        <div className="services-why-grid">

                            <div className="services-why-main">

                                <div className="services-label">
                                    Why NYSoftech
                                </div>

                                <h2>
                                    Not just developers.
                                    <span> Your technology partner.</span>
                                </h2>

                                <p>
                                    We work closely with businesses to
                                    understand their challenges and create
                                    practical digital solutions that can
                                    grow with them.
                                </p>

                                <a
                                    href="/about"
                                    className="services-about-link"
                                >
                                    <span>
                                        Discover NYSoftech
                                    </span>

                                    <i className="bi bi-arrow-up-right"></i>
                                </a>

                            </div>


                            <div className="services-why-tiles">

                                <div className="why-tile">

                                    <span>
                                        01
                                    </span>

                                    <h3>
                                        Business First
                                    </h3>

                                    <p>
                                        Technology decisions driven by
                                        your actual business requirements.
                                    </p>

                                </div>


                                <div className="why-tile why-tile-accent">

                                    <span>
                                        02
                                    </span>

                                    <h3>
                                        Built to Scale
                                    </h3>

                                    <p>
                                        Solutions designed with future
                                        growth in mind.
                                    </p>

                                </div>


                                <div className="why-tile">

                                    <span>
                                        03
                                    </span>

                                    <h3>
                                        Clear Process
                                    </h3>

                                    <p>
                                        Transparent communication from
                                        start to launch.
                                    </p>

                                </div>


                                <div className="why-tile">

                                    <span>
                                        04
                                    </span>

                                    <h3>
                                        Long-Term Support
                                    </h3>

                                    <p>
                                        We remain available as your
                                        technology evolves.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    CTA
                ========================================= */}

                <section className="services-cta">

                    <div className="container">

                        <div className="services-cta-inner">

                            <div className="services-cta-number">
                                LET'S BUILD
                            </div>

                            <div className="services-cta-content">

                                <div className="services-label">
                                    Start a Project
                                </div>

                                <h2>
                                    Have an idea worth
                                    <span> building?</span>
                                </h2>

                                <p>
                                    Tell us what you're working on and
                                    let's explore what we can build together.
                                </p>

                            </div>

                            <a
                                href="/contact"
                                className="services-cta-button"
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