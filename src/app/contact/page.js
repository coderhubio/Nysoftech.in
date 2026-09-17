import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./contact.css";

export const metadata = {
    title: "Contact NYSoftech | Web & Software Development Company",
    description:
        "Contact NYSoftech to discuss your website, e-commerce, SaaS, WordPress, Shopify, or custom software project. Let's build your digital solution together.",
};

export default function Contact() {
    return (
        <>
            <Header />

            <main className="contact-page">

                {/* =========================================
                    CONTACT PAGE BANNER
                ========================================= */}

                <section className="inner-page-banner">

                    <div className="container">

                        <div className="inner-page-banner-content">

                            <div className="section-subtitle">
                                Get In Touch
                            </div>

                            <h1>
                                Let's <span>Talk.</span>
                            </h1>

                            <p>
                                Have a project in mind? Let's discuss your
                                ideas and create something meaningful together.
                            </p>

                            {/* Breadcrumb */}

                            <div className="inner-page-breadcrumb">

                                <a href="/">
                                    Home
                                </a>

                                <i className="bi bi-chevron-right"></i>

                                <span>
                                    Contact
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    CONTACT SECTION
                ========================================= */}

                <section className="contact-section section">

                    <div className="container">

                        <div className="row g-5">


                            {/* =================================
                                LEFT SIDE
                            ================================= */}

                            <div className="col-lg-5">

                                <div className="contact-left">

                                    <div className="contact-section-label">
                                        Start a Conversation
                                    </div>

                                    <h2>
                                        Let's turn your
                                        <br />
                                        <span>idea into reality.</span>
                                    </h2>

                                    <p className="contact-left-description">
                                        Submit the form below or email us to connect, and our team will get back to you promptly to provide practical assistance.
                                    </p>


                                    {/* =================================
                                        Location
                                    ================================= */}

                                    <div className="contact-detail">

                                        <div className="contact-detail-icon">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>

                                        <div className="contact-detail-content">
                                             <span>
                                                Location
                                            </span>
                                            <p>Netsmartz House, Rajiv Gandhi IT Park, Chandigarh, 160101</p>

                                        </div>

                                    </div>




                                    {/* =================================
                                        PHONE
                                    ================================= */}

                                    <div className="contact-detail">

                                        <div className="contact-detail-icon">
                                            <i className="bi bi-telephone"></i>
                                        </div>

                                        <div className="contact-detail-content">

                                            <span>
                                                Phone
                                            </span>

                                            <a href="tel:+919999999999">
                                                +91 99999 99999
                                            </a>

                                        </div>

                                    </div>


                                    {/* =================================
                                        LOCATION
                                    ================================= */}

                                    <div className="contact-detail">

                                        <div className="contact-detail-icon">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>

                                        <div className="contact-detail-content">

                                            <span>
                                                Location
                                            </span>

                                            <p>
                                                India
                                            </p>

                                        </div>

                                    </div>


                                    {/* =================================
                                        SOCIAL
                                    ================================= */}

                                    <div className="contact-social">

                                        <span>
                                            Follow us
                                        </span>

                                        <div className="contact-social-links">

                                            <a
                                                href="#"
                                                aria-label="LinkedIn"
                                            >
                                                <i className="bi bi-linkedin"></i>
                                            </a>

                                            <a
                                                href="#"
                                                aria-label="Instagram"
                                            >
                                                <i className="bi bi-instagram"></i>
                                            </a>

                                            <a
                                                href="#"
                                                aria-label="Facebook"
                                            >
                                                <i className="bi bi-facebook"></i>
                                            </a>

                                            <a
                                                href="#"
                                                aria-label="Twitter"
                                            >
                                                <i className="bi bi-twitter-x"></i>
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* =================================
                                RIGHT SIDE FORM
                            ================================= */}

                            <div className="col-lg-7">

                                <div className="contact-form-card">

                                    <div className="contact-form-heading">

                                        <div>

                                            <div className="contact-section-label">
                                                Tell Us About Your Project
                                            </div>

                                            <h3>
                                                How can we help?
                                            </h3>

                                        </div>

                                        <div className="contact-form-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </div>

                                    </div>


                                    <form className="contact-form">

                                        {/* =================================
                                            NAME + EMAIL
                                        ================================= */}

                                        <div className="row">

                                            <div className="col-md-6">

                                                <div className="contact-field">

                                                    <label htmlFor="name">
                                                        Your Name
                                                    </label>

                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        required
                                                    />

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="contact-field">

                                                    <label htmlFor="email">
                                                        Email Address
                                                    </label>

                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="john@example.com"
                                                        required
                                                    />

                                                </div>

                                            </div>

                                        </div>


                                        {/* =================================
                                            PHONE + COMPANY
                                        ================================= */}

                                        <div className="row">

                                            <div className="col-md-6">

                                                <div className="contact-field">

                                                    <label htmlFor="phone">
                                                        Phone Number
                                                    </label>

                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="+91 99999 99999"
                                                    />

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="contact-field">

                                                    <label htmlFor="company">
                                                        Company
                                                    </label>

                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        placeholder="Company Name"
                                                    />

                                                </div>

                                            </div>

                                        </div>


                                        {/* =================================
                                            SERVICE
                                        ================================= */}

                                        <div className="contact-field">

                                            <label htmlFor="service">
                                                What can we help with?
                                            </label>

                                            <select
                                                id="service"
                                                name="service"
                                                defaultValue=""
                                            >

                                                <option
                                                    value=""
                                                    disabled
                                                >
                                                    Select a service
                                                </option>

                                                <option value="web-development">
                                                    Web Development
                                                </option>

                                                <option value="ecommerce">
                                                    E-Commerce Development
                                                </option>

                                                <option value="wordpress">
                                                    WordPress Development
                                                </option>

                                                <option value="shopify">
                                                    Shopify Development
                                                </option>

                                                <option value="saas">
                                                    SaaS Development
                                                </option>

                                                <option value="custom-software">
                                                    Custom Software
                                                </option>

                                                <option value="ui-ux">
                                                    UI / UX Design
                                                </option>

                                                <option value="other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* =================================
                                            BUDGET
                                        ================================= */}

                                        <div className="contact-field">

                                            <label htmlFor="budget">
                                                Project Budget
                                            </label>

                                            <select
                                                id="budget"
                                                name="budget"
                                                defaultValue=""
                                            >

                                                <option
                                                    value=""
                                                    disabled
                                                >
                                                    Select your budget
                                                </option>

                                                <option value="under-1000">
                                                    Under $1,000
                                                </option>

                                                <option value="1000-5000">
                                                    $1,000 - $5,000
                                                </option>

                                                <option value="5000-10000">
                                                    $5,000 - $10,000
                                                </option>

                                                <option value="10000-25000">
                                                    $10,000 - $25,000
                                                </option>

                                                <option value="25000-plus">
                                                    $25,000+
                                                </option>

                                            </select>

                                        </div>


                                        {/* =================================
                                            MESSAGE
                                        ================================= */}

                                        <div className="contact-field">

                                            <label htmlFor="message">
                                                Project Details
                                            </label>

                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Tell us about your project, goals and requirements..."
                                                required
                                            ></textarea>

                                        </div>


                                        {/* =================================
                                            SUBMIT
                                        ================================= */}

                                        <button
                                            type="submit"
                                            className="contact-submit"
                                        >

                                            <span>
                                                Send Message
                                            </span>

                                            <i className="bi bi-arrow-up-right"></i>

                                        </button>


                                        <div className="contact-form-note">

                                            <i className="bi bi-shield-check"></i>

                                            <span>
                                                Your information is safe with us.
                                                We never share your details.
                                            </span>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================================
                    BOTTOM CTA
                ========================================= */}

                <section className="contact-cta">

                    <div className="container">

                        <div className="contact-cta-content">

                            <div>

                                <div className="section-subtitle">
                                    Have Questions?
                                </div>

                                <h2>
                                    Not ready to start a project?
                                </h2>

                                <p>
                                    That's okay. Let's have a conversation
                                    and see how we can help.
                                </p>

                            </div>

                            <a
                                href="mailto:hello@nysoftech.com"
                                className="contact-cta-button"
                            >

                                <span>
                                    Email Us
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