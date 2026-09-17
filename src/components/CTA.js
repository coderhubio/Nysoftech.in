import Link from "next/link";

export default function CTA() {
    return (
        <section className="cta-section">

            <div className="container">

                <div className="cta-box">

                    {/* Decorative circles */}
                    <div className="cta-circle cta-circle-one"></div>

                    <div className="cta-circle cta-circle-two"></div>


                    <div className="row align-items-center g-4">

                        <div className="col-lg-8">

                            <div className="cta-content">

                                <div className="cta-label">
                                    Let's Build Something Great
                                </div>

                                <h2>
                                    Have a project
                                    <br />
                                    <span>in mind?</span>
                                </h2>

                                <p>
                                    Tell us about your idea and let's
                                    create a digital experience that
                                    makes a real difference.
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-4">

                            <div className="cta-action">

                                <Link
                                    href="/contact"
                                    className="cta-button"
                                >
                                    <span>
                                        Start a Conversation
                                    </span>

                                    <i className="bi bi-arrow-up-right"></i>
                                </Link>


                                <span className="cta-note">
                                    No commitment. Just a conversation.
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}