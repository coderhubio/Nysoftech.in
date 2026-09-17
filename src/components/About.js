export default function About() {
    return (
        <section className="about-section section">

            <div className="container">

                <div className="row align-items-center g-5">

                    {/* =====================================
                        LEFT VISUAL
                    ====================================== */}
                    <div className="col-lg-6">

                        <div className="about-visual">

                            {/* Main Visual */}
                            <div className="about-main-card">

                                <div className="about-card-top">

                                    <span>
                                        OUR APPROACH
                                    </span>

                                    <span className="about-status">
                                        <i className="bi bi-circle-fill"></i>
                                        Building Better
                                    </span>

                                </div>


                                <div className="about-visual-content">

                                    <div className="about-big-number">
                                        360°
                                    </div>

                                    <h3>
                                        Digital thinking.
                                        <br />
                                        Business results.
                                    </h3>

                                    <p>
                                        Strategy, design and technology
                                        working together to create
                                        meaningful digital experiences.
                                    </p>

                                </div>


                                {/* Decorative Grid */}
                                <div className="about-grid">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>


                            {/* Floating Experience Card */}
                            <div className="about-experience-card">

                                <div className="about-experience-icon">
                                    <i className="bi bi-award"></i>
                                </div>

                                <div>

                                    <strong>
                                        10+
                                    </strong>

                                    <span>
                                        Years of Experience
                                    </span>

                                </div>

                            </div>


                            {/* Floating Growth Card */}
                            <div className="about-growth-card">

                                <div className="growth-icon">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>

                                <div>

                                    <span>
                                        Business Growth
                                    </span>

                                    <strong>
                                        +42.8%
                                    </strong>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT CONTENT
                    ====================================== */}
                    <div className="col-lg-6">

                        <div className="about-content">

                            <div className="section-subtitle">
                                About Us
                            </div>


                            <h2 className="section-title text-start">
                                We Don't Just Build
                                <span className="about-highlight">
                                    Websites.
                                </span>
                                <br />
                                We Build Businesses.
                            </h2>


                            <p className="about-lead">
                                We are a digital technology partner
                                helping ambitious businesses turn
                                ideas into powerful digital products.
                            </p>


                            <p className="about-text">
                                From a high-converting website to a
                                complex SaaS platform, we combine
                                strategy, creative thinking and modern
                                technology to build solutions that
                                create measurable business value.
                            </p>


                            {/* Features */}
                            <div className="about-features">

                                <div className="about-feature">

                                    <div className="about-feature-icon">
                                        <i className="bi bi-lightbulb"></i>
                                    </div>

                                    <div>

                                        <h4>
                                            Business First
                                        </h4>

                                        <p>
                                            Every decision starts with
                                            your business goals.
                                        </p>

                                    </div>

                                </div>


                                <div className="about-feature">

                                    <div className="about-feature-icon">
                                        <i className="bi bi-code-square"></i>
                                    </div>

                                    <div>

                                        <h4>
                                            Modern Technology
                                        </h4>

                                        <p>
                                            Scalable solutions built
                                            with the right technology.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <a
                                href="/about"
                                className="btn-primary-custom about-button"
                            >
                                More About Us

                                <i className="bi bi-arrow-up-right"></i>
                            </a>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    STATISTICS
                ====================================== */}
                <div className="about-stats">

                    <div className="row g-0">

                        <div className="col-6 col-lg-3">

                            <div className="about-stat">

                                <strong>
                                    500+
                                </strong>

                                <span>
                                    Projects Delivered
                                </span>

                            </div>

                        </div>


                        <div className="col-6 col-lg-3">

                            <div className="about-stat">

                                <strong>
                                    250+
                                </strong>

                                <span>
                                    Happy Clients
                                </span>

                            </div>

                        </div>


                        <div className="col-6 col-lg-3">

                            <div className="about-stat">

                                <strong>
                                    20+
                                </strong>

                                <span>
                                    Countries Served
                                </span>

                            </div>

                        </div>


                        <div className="col-6 col-lg-3">

                            <div className="about-stat about-stat-last">

                                <strong>
                                    98%
                                </strong>

                                <span>
                                    Client Satisfaction
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}