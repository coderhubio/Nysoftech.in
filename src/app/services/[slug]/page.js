import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import "./service-detail.css";

const services = {
    "web-development": {
        number: "01",
        icon: "bi-window-stack",
        category: "Web Development",
        title: "Web Development",
        highlight: "Built for performance.",
        description:
            "We design and develop modern, high-performance websites and web applications that help businesses build credibility, improve customer experiences and grow online.",

        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "JavaScript",
            "REST API",
        ],

        benefits: [
            {
                icon: "bi-speedometer2",
                title: "High Performance",
                description:
                    "Fast-loading websites and applications built with performance and scalability in mind.",
            },
            {
                icon: "bi-phone",
                title: "Responsive Experience",
                description:
                    "Interfaces that work beautifully across desktops, tablets and mobile devices.",
            },
            {
                icon: "bi-shield-check",
                title: "Secure Architecture",
                description:
                    "Modern development practices focused on security, reliability and maintainability.",
            },
            {
                icon: "bi-graph-up-arrow",
                title: "Built to Grow",
                description:
                    "Flexible architecture that can evolve as your business and user requirements grow.",
            },
        ],
    },

    "saas-development": {
        number: "02",
        icon: "bi-cloud-check",
        category: "SaaS Development",
        title: "SaaS Development",
        highlight: "Turn ideas into products.",
        description:
            "We build scalable SaaS platforms that transform business ideas into real digital products with intuitive experiences, secure architecture and scalable technology.",

        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "REST API",
        ],

        benefits: [
            {
                icon: "bi-cloud-arrow-up",
                title: "Cloud Ready",
                description:
                    "Applications designed to run reliably on modern cloud infrastructure.",
            },
            {
                icon: "bi-people",
                title: "Multi User",
                description:
                    "Flexible user, account and role management for growing platforms.",
            },
            {
                icon: "bi-lock",
                title: "Secure",
                description:
                    "Authentication, authorization and secure application architecture.",
            },
            {
                icon: "bi-bar-chart",
                title: "Scalable",
                description:
                    "Architecture designed to support increasing users, data and business operations.",
            },
        ],
    },

    "ecommerce": {
        number: "03",
        icon: "bi-cart3",
        category: "E-Commerce",
        title: "E-Commerce Development",
        highlight: "Stores built to convert.",
        description:
            "We create modern e-commerce experiences that combine clean design, smooth shopping journeys, powerful integrations and reliable performance.",

        technologies: [
            "Shopify",
            "WooCommerce",
            "Next.js",
            "PHP",
            "REST API",
        ],

        benefits: [
            {
                icon: "bi-cart-check",
                title: "Better Shopping",
                description:
                    "Create simple and intuitive shopping experiences for your customers.",
            },
            {
                icon: "bi-credit-card",
                title: "Payments",
                description:
                    "Integrate secure payment gateways and checkout experiences.",
            },
            {
                icon: "bi-box-seam",
                title: "Product Management",
                description:
                    "Flexible product, inventory and order management solutions.",
            },
            {
                icon: "bi-graph-up",
                title: "Conversion Focused",
                description:
                    "Layouts and experiences designed to help turn visitors into customers.",
            },
        ],
    },

    "custom-software": {
        number: "04",
        icon: "bi-cpu",
        category: "Custom Software",
        title: "Custom Software",
        highlight: "Software around your business.",
        description:
            "We build custom software solutions around your workflows, processes and business requirements instead of forcing your business to adapt to generic software.",

        technologies: [
            "Laravel",
            "PHP",
            "Node.js",
            "MySQL",
            "MongoDB",
        ],

        benefits: [
            {
                icon: "bi-diagram-3",
                title: "Custom Workflows",
                description:
                    "Software designed around the way your business actually operates.",
            },
            {
                icon: "bi-gear",
                title: "Automation",
                description:
                    "Automate repetitive processes and reduce unnecessary manual work.",
            },
            {
                icon: "bi-database",
                title: "Data Driven",
                description:
                    "Centralize business information and make it easier to manage.",
            },
            {
                icon: "bi-arrow-up-right",
                title: "Scalable",
                description:
                    "Build a foundation that can grow alongside your organization.",
            },
        ],
    },

    "wordpress": {
        number: "05",
        icon: "bi-globe2",
        category: "WordPress Development",
        title: "WordPress Development",
        highlight: "Powerful WordPress experiences.",
        description:
            "From business websites to custom WordPress platforms, we create fast, flexible and maintainable WordPress solutions.",

        technologies: [
            "WordPress",
            "PHP",
            "MySQL",
            "ACF",
            "JavaScript",
        ],

        benefits: [
            {
                icon: "bi-layout-text-window",
                title: "Custom Websites",
                description:
                    "Unique websites designed around your brand and business objectives.",
            },
            {
                icon: "bi-plugin",
                title: "Custom Plugins",
                description:
                    "Develop functionality specifically for your business requirements.",
            },
            {
                icon: "bi-speedometer",
                title: "Optimized",
                description:
                    "Clean and optimized WordPress implementations focused on performance.",
            },
            {
                icon: "bi-pencil-square",
                title: "Easy Management",
                description:
                    "Flexible content management that makes updating your website simple.",
            },
        ],
    },

    "shopify": {
        number: "06",
        icon: "bi-bag-check",
        category: "Shopify Development",
        title: "Shopify Development",
        highlight: "E-commerce without limits.",
        description:
            "We create custom Shopify stores, themes and integrations designed around your products, customers and business goals.",

        technologies: [
            "Shopify",
            "Liquid",
            "JavaScript",
            "REST API",
            "Shopify API",
        ],

        benefits: [
            {
                icon: "bi-shop",
                title: "Custom Stores",
                description:
                    "Create a Shopify storefront that reflects your brand instead of a generic template.",
            },
            {
                icon: "bi-code-slash",
                title: "Custom Development",
                description:
                    "Extend Shopify with custom features and business functionality.",
            },
            {
                icon: "bi-plug",
                title: "Integrations",
                description:
                    "Connect Shopify with external tools, platforms and business systems.",
            },
            {
                icon: "bi-graph-up-arrow",
                title: "Growth Ready",
                description:
                    "Build an experience that supports your store as it grows.",
            },
        ],
    },

    "ui-ux": {
        number: "07",
        icon: "bi-palette",
        category: "UI / UX Design",
        title: "UI / UX Design",
        highlight: "Design people understand.",
        description:
            "We design intuitive digital experiences that balance user needs, visual clarity and business objectives.",

        technologies: [
            "Figma",
            "Wireframes",
            "Prototyping",
            "UI Design",
            "UX Research",
        ],

        benefits: [
            {
                icon: "bi-person",
                title: "User Focused",
                description:
                    "Design decisions based on real user needs and behaviors.",
            },
            {
                icon: "bi-grid",
                title: "Clear Interfaces",
                description:
                    "Simple and structured interfaces that are easy to understand.",
            },
            {
                icon: "bi-phone",
                title: "Responsive",
                description:
                    "Experiences designed for every screen size and device.",
            },
            {
                icon: "bi-bezier2",
                title: "Prototyping",
                description:
                    "Visualize and validate ideas before development begins.",
            },
        ],
    },

    "api-integrations": {
        number: "08",
        icon: "bi-plug",
        category: "API & Integrations",
        title: "API & Integrations",
        highlight: "Connect your digital ecosystem.",
        description:
            "We connect websites, applications, platforms and third-party services through reliable APIs and custom integrations.",

        technologies: [
            "REST API",
            "Node.js",
            "PHP",
            "Webhooks",
            "OAuth",
        ],

        benefits: [
            {
                icon: "bi-plug",
                title: "System Integration",
                description:
                    "Connect multiple business systems and platforms together.",
            },
            {
                icon: "bi-arrow-left-right",
                title: "Data Sync",
                description:
                    "Move and synchronize information between different applications.",
            },
            {
                icon: "bi-shield-check",
                title: "Secure APIs",
                description:
                    "Implement secure authentication and reliable API communication.",
            },
            {
                icon: "bi-lightning",
                title: "Automation",
                description:
                    "Reduce manual processes by connecting your digital tools.",
            },
        ],
    },
};

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const service = services[slug];

    if (!service) {
        return {
            title: "Service Not Found | NYSoftech",
            description:
                "The requested NYSoftech service could not be found.",
        };
    }

    return {
        title: `${service.title} | NYSoftech`,
        description: service.description,
    };
}

export default async function ServiceDetail({ params }) {
    const { slug } = await params;

    const service = services[slug];

    if (!service) {
        return (
            <>
                <Header />

                <main className="service-not-found">

                    <div className="container">

                        <span>
                            404
                        </span>

                        <h1>
                            Service Not Found
                        </h1>

                        <p>
                            The service you're looking for doesn't exist.
                        </p>

                        <a href="/services">
                            <span>
                                Back to Services
                            </span>

                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </div>

                </main>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="service-detail-page">

                {/* =========================================
                    HERO
                ========================================= */}

                <section className="service-detail-hero">

                    <div className="container">

                        <div className="service-detail-hero-grid">

                            <div className="service-detail-hero-content">

                                <div className="service-detail-label">
                                    <span>
                                        {service.number}
                                    </span>

                                    {service.category}
                                </div>

                                <h1>
                                    {service.title}
                                    <span>
                                        {service.highlight}
                                    </span>
                                </h1>

                                <p>
                                    {service.description}
                                </p>

                                <div className="service-detail-actions">

                                    <a
                                        href="/contact"
                                        className="service-primary-button"
                                    >
                                        <span>
                                            Start a Project
                                        </span>

                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>

                                    <a
                                        href="/services"
                                        className="service-secondary-button"
                                    >
                                        <i className="bi bi-arrow-left"></i>

                                        <span>
                                            All Services
                                        </span>
                                    </a>

                                </div>

                            </div>


                            <div className="service-detail-visual">

                                <div className="service-visual-grid"></div>

                                <div className="service-visual-circle circle-one"></div>

                                <div className="service-visual-circle circle-two"></div>

                                <div className="service-visual-core">

                                    <i className={`bi ${service.icon}`}></i>

                                    <span>
                                        NYSOFTECH
                                    </span>

                                </div>

                                <div className="service-visual-number">
                                    {service.number}
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    OVERVIEW
                ========================================= */}

                <section className="service-overview section">

                    <div className="container">

                        <div className="service-overview-grid">

                            <div>

                                <div className="service-section-label">
                                    What We Deliver
                                </div>

                                <h2>
                                    Technology designed
                                    <span>
                                        around your goals.
                                    </span>
                                </h2>

                            </div>

                            <div>

                                <p>
                                    We don't believe in one-size-fits-all
                                    solutions. Every project starts with
                                    understanding your business, your users
                                    and the problem you want to solve.
                                </p>

                                <p>
                                    Our team combines strategy, design and
                                    development to create digital products
                                    that are practical, scalable and ready
                                    for the future.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    BENEFITS
                ========================================= */}

                <section className="service-benefits section">

                    <div className="container">

                        <div className="service-section-heading">

                            <div>

                                <div className="service-section-label">
                                    Our Approach
                                </div>

                                <h2>
                                    Built around
                                    <span>
                                        what matters.
                                    </span>
                                </h2>

                            </div>

                            <p>
                                Every solution is built with performance,
                                usability and long-term value in mind.
                            </p>

                        </div>


                        <div className="service-benefit-grid">

                            {service.benefits.map((benefit, index) => (

                                <div
                                    className="service-benefit-card"
                                    key={benefit.title}
                                >

                                    <div className="service-benefit-top">

                                        <span>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className="service-benefit-icon">
                                            <i
                                                className={`bi ${benefit.icon}`}
                                            ></i>
                                        </div>

                                    </div>

                                    <div>

                                        <h3>
                                            {benefit.title}
                                        </h3>

                                        <p>
                                            {benefit.description}
                                        </p>

                                    </div>

                                    <i className="bi bi-arrow-up-right service-benefit-arrow"></i>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =========================================
                    TECHNOLOGY
                ========================================= */}

                <section className="service-stack section">

                    <div className="container">

                        <div className="service-stack-inner">

                            <div>

                                <div className="service-section-label">
                                    Technology Stack
                                </div>

                                <h2>
                                    The right tools
                                    <span>
                                        for the job.
                                    </span>
                                </h2>

                                <p>
                                    We choose technology based on the
                                    requirements of your project rather
                                    than forcing every solution into the
                                    same technology stack.
                                </p>

                            </div>


                            <div className="service-stack-list">

                                {service.technologies.map((technology, index) => (

                                    <div
                                        className="service-stack-item"
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

                    </div>

                </section>


                {/* =========================================
                    PROCESS
                ========================================= */}

                <section className="service-detail-process section">

                    <div className="container">

                        <div className="service-section-heading">

                            <div>

                                <div className="service-section-label">
                                    Our Process
                                </div>

                                <h2>
                                    From idea
                                    <span>
                                        to execution.
                                    </span>
                                </h2>

                            </div>

                            <p>
                                A clear process keeps your project focused,
                                transparent and moving forward.
                            </p>

                        </div>


                        <div className="service-process-grid">

                            <div className="service-process-card">
                                <span>01</span>

                                <i className="bi bi-search"></i>

                                <h3>
                                    Discover
                                </h3>

                                <p>
                                    Understand your business, requirements,
                                    users and objectives.
                                </p>
                            </div>

                            <div className="service-process-card featured">
                                <span>02</span>

                                <i className="bi bi-bezier2"></i>

                                <h3>
                                    Design
                                </h3>

                                <p>
                                    Create the experience, architecture and
                                    technical direction.
                                </p>
                            </div>

                            <div className="service-process-card">
                                <span>03</span>

                                <i className="bi bi-code-slash"></i>

                                <h3>
                                    Develop
                                </h3>

                                <p>
                                    Build, integrate and test the solution
                                    with quality in mind.
                                </p>
                            </div>

                            <div className="service-process-card">
                                <span>04</span>

                                <i className="bi bi-rocket-takeoff"></i>

                                <h3>
                                    Launch
                                </h3>

                                <p>
                                    Deploy your solution and continue
                                    improving it as you grow.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    CTA
                ========================================= */}

                <section className="service-detail-cta">

                    <div className="container">

                        <div className="service-detail-cta-inner">

                            <div>

                                <div className="service-section-label">
                                    Start Your Project
                                </div>

                                <h2>
                                    Ready to build
                                    <span>
                                        something better?
                                    </span>
                                </h2>

                                <p>
                                    Tell us about your project and let's
                                    discuss how NYSoftech can help.
                                </p>

                            </div>

                            <a
                                href="/contact"
                                className="service-primary-button"
                            >
                                <span>
                                    Let's Talk
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