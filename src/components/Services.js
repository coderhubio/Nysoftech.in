import services from "../data/services";

export default function Services() {
    return (
        <section className="services-section section">

            <div className="container">

                {/* Section Header */}
                <div className="section-header">

                    <div className="section-subtitle">
                        What We Do
                    </div>

                    <h2 className="section-title">
                        Digital Solutions Built
                        <br />
                        Around Your Business
                    </h2>

                    <p className="section-description">
                        From strategy and design to development and
                        growth, we create digital solutions that
                        solve real business problems.
                    </p>

                </div>


                {/* Services */}
                <div className="row g-4">

                    {services.map((service) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={service.number}
                        >

                            <div className="service-card">

                                {/* Top */}
                                <div className="service-card-top">

                                    <span className="service-number">
                                        {service.number}
                                    </span>

                                    <div className="service-icon">
                                        <i
                                            className={`bi ${service.icon}`}
                                        ></i>
                                    </div>

                                </div>


                                {/* Content */}
                                <div className="service-card-content">

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                </div>


                                {/* Link */}
                                <a
                                    href={service.link}
                                    className="service-link"
                                >

                                    <span>
                                        Explore Service
                                    </span>

                                    <span className="service-link-icon">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </span>

                                </a>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Bottom CTA */}
                <div className="services-bottom">

                    <p>
                        Don't see what you're looking for?
                    </p>

                    <a
                        href="/contact"
                        className="services-bottom-link"
                    >
                        Talk to our team

                        <i className="bi bi-arrow-up-right"></i>
                    </a>

                </div>

            </div>

        </section>
    );
}