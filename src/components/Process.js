import Link from "next/link";
import process from "../data/process";

export default function Process() {
    return (
        <section className="process-section">

            <div className="container">

                {/* =========================================
                    HEADER
                ========================================== */}

                <div className="process-section-header">

                    <div>

                        <div className="section-subtitle">
                            Our Process
                        </div>

                        <h2 className="process-section-title">
                            Simple process.
                            <span> Powerful results.</span>
                        </h2>

                    </div>


                    <div className="process-section-intro">

                        <p>
                            A clear and collaborative approach that
                            takes your idea from concept to launch.
                        </p>

                        <Link
                            href="/contact"
                            className="process-link"
                        >
                            Start a Project
                            <i className="bi bi-arrow-up-right"></i>
                        </Link>

                    </div>

                </div>


                {/* =========================================
                    PROCESS FLOW
                ========================================== */}

                <div className="process-flow">

                    <div className="process-connector"></div>


                    {process.map((item, index) => (

                        <div
                            className="process-step-item"
                            key={item.number}
                        >

                            {/* Step number */}

                            <div className="process-step-number">

                                <span>
                                    {item.number}
                                </span>

                            </div>


                            {/* Content */}

                            <div className="process-step-card">

                                <div className="process-step-icon">

                                    <i
                                        className={`bi ${item.icon}`}
                                    ></i>

                                </div>


                                <div className="process-step-content">

                                    <span className="process-step-label">
                                        STEP {item.number}
                                    </span>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>


                                <div className="process-step-arrow">

                                    <i className="bi bi-arrow-up-right"></i>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}