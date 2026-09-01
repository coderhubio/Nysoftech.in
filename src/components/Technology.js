import technologies from "../data/technologies";

export default function Technology() {
    return (
        <section className="technology-section section">

            <div className="container">

                <div className="technology-header">

                    <div>
                        <div className="section-subtitle">
                            Technology & Expertise
                        </div>

                        <h2 className="section-title">
                            Built With the <span>Right Technology.</span>
                        </h2>
                    </div>

                    <p className="technology-description">
                        We use proven technologies to build fast,
                        secure and scalable digital solutions.
                    </p>

                </div>


                <div className="technology-icons">

                    {technologies.map((technology) => (
                        <div
                            className="technology-item"
                            key={technology.name}
                        >

                            <div className="technology-icon">
                                <i className={`bi ${technology.icon}`}></i>
                            </div>

                            <span className="technology-name">
                                {technology.name}
                            </span>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}