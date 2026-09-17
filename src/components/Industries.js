import Link from "next/link";
import industries from "../data/industries";

export default function Industries() {
    return (
        <section className="industries-section">

            <div className="container">

                {/* =====================================
                    HEADER
                ====================================== */}

                <div className="industries-header">

                    <div className="industries-heading">

                        <span className="section-subtitle">
                            Industries We Serve
                        </span>

                        <h2 className="industries-title">
                            Digital solutions built
                            <br />
                            for <span>your industry.</span>
                        </h2>

                    </div>


                    <div className="industries-header-right">

                        <p>
                            We combine industry knowledge with
                            modern technology to create digital
                            experiences that move businesses forward.
                        </p>

                        <Link
                            href="/industries"
                            className="industries-view-link"
                        >
                            Explore all industries

                            <span>
                                <i className="bi bi-arrow-up-right"></i>
                            </span>

                        </Link>

                    </div>

                </div>


                {/* =====================================
                    INDUSTRIES GRID
                ====================================== */}

                <div className="industries-grid">

                    {industries.map((industry, index) => (

                        <Link
                            href={`/industries/${industry.slug}`}
                            className="industry-card"
                            key={industry.number}
                        >

                            {/* Number */}

                            <span className="industry-card-number">
                                {industry.number}
                            </span>


                            {/* Icon */}

                            <div className="industry-card-icon">

                                {industry.image ? (

                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                    />

                                ) : (

                                    <i
                                        className={`bi ${industry.icon}`}
                                    ></i>

                                )}

                            </div>


                            {/* Content */}

                            <div className="industry-card-content">

                                <h3>
                                    {industry.title}
                                </h3>

                            </div>


                            {/* Arrow */}

                            <div className="industry-card-arrow">

                                <i className="bi bi-arrow-up-right"></i>

                            </div>

                        </Link>

                    ))}

                </div>


                {/* =====================================
                    BOTTOM STATEMENT
                ====================================== */}

                <div className="industries-bottom">

                    <div className="industries-bottom-line"></div>

                    <span>
                        10+ industries · One technology partner
                    </span>

                    <div className="industries-bottom-line"></div>

                </div>

            </div>

        </section>
    );
}