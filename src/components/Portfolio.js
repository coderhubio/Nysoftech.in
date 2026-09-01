import projects from "../data/projects";

export default function Portfolio() {

    const featuredProject = projects[0];

    const otherProjects = projects.slice(1);

    return (
        <section className="portfolio-section section">

            <div className="container">

                {/* =====================================
                    HEADER
                ====================================== */}
                <div className="portfolio-header">

                    <div>

                        <div className="section-subtitle">
                            Selected Work
                        </div>

                        <h2 className="section-title text-start">
                            Projects That
                            <br />
                            <span>Make an Impact.</span>
                        </h2>

                    </div>


                    <a
                        href="/portfolio"
                        className="btn-outline-custom"
                    >
                        View All Projects

                        <i className="bi bi-arrow-up-right"></i>
                    </a>

                </div>


                {/* =====================================
                    FEATURED PROJECT
                ====================================== */}
                <a
                    href={featuredProject.link}
                    className="featured-project"
                >

                    <div className="row g-0 align-items-stretch">

                        {/* Visual */}
                        <div className="col-lg-7">

                            <div className="project-visual">

                                <div className="project-browser">

                                    <div className="browser-header">

                                        <div className="browser-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>

                                        <div className="browser-address">
                                            yourbusiness.com
                                        </div>

                                    </div>


                                    <div className="browser-content">

                                        <div className="mock-sidebar">

                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>

                                        </div>


                                        <div className="mock-dashboard">

                                            <div className="mock-dashboard-top">

                                                <div className="mock-heading">
                                                    Dashboard
                                                </div>

                                                <div className="mock-user"></div>

                                            </div>


                                            <div className="mock-stat-row">

                                                <div className="mock-stat">
                                                    <span></span>
                                                    <strong></strong>
                                                </div>

                                                <div className="mock-stat">
                                                    <span></span>
                                                    <strong></strong>
                                                </div>

                                                <div className="mock-stat">
                                                    <span></span>
                                                    <strong></strong>
                                                </div>

                                            </div>


                                            <div className="mock-chart">

                                                <div className="chart-line"></div>

                                                <div className="chart-bars">

                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div className="project-floating-badge">

                                    <i className="bi bi-stars"></i>

                                    <span>
                                        Digital Product
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Content */}
                        <div className="col-lg-5">

                            <div className="featured-project-content">

                                <div className="project-category">
                                    {featuredProject.category}
                                </div>


                                <h3>
                                    {featuredProject.title}
                                </h3>


                                <p>
                                    {featuredProject.description}
                                </p>


                                <div className="project-result">

                                    <strong>
                                        {featuredProject.result}
                                    </strong>

                                    <span>
                                        {featuredProject.resultLabel}
                                    </span>

                                </div>


                                <span className="project-view">

                                    View Case Study

                                    <span>
                                        <i className="bi bi-arrow-up-right"></i>
                                    </span>

                                </span>

                            </div>

                        </div>

                    </div>

                </a>


                {/* =====================================
                    OTHER PROJECTS
                ====================================== */}
                <div className="row g-4 portfolio-grid">

                    {otherProjects.map((project) => (

                        <div
                            className="col-md-4"
                            key={project.id}
                        >

                            <a
                                href={project.link}
                                className="project-card"
                            >

                                <div className="project-card-visual">

                                    <div className="project-placeholder">

                                        <div className="placeholder-window">

                                            <div className="placeholder-top">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>

                                            <div className="placeholder-body">

                                                <div></div>
                                                <div></div>
                                                <div></div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="project-card-arrow">

                                        <i className="bi bi-arrow-up-right"></i>

                                    </div>

                                </div>


                                <div className="project-card-content">

                                    <div className="project-category">
                                        {project.category}
                                    </div>

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>


                                    <div className="project-card-result">

                                        <strong>
                                            {project.result}
                                        </strong>

                                        <span>
                                            {project.resultLabel}
                                        </span>

                                    </div>

                                </div>

                            </a>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}