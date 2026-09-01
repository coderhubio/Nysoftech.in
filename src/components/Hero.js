export default function Hero() {
    return (
        <section className="hero-section">

            <div className="hero-bg-shape hero-bg-shape-one"></div>
            <div className="hero-bg-shape hero-bg-shape-two"></div>

            <div className="container">

                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-6">

                        <div className="hero-content">

                            <div className="hero-badge">
                                <span className="hero-badge-dot"></span>

                                Digital Solutions for Modern Business
                            </div>


                            <h1 className="hero-title">

                                We Build Digital
                                <span> Experiences </span>

                                That Drive Growth.

                            </h1>


                            <p className="hero-description">

                                We design and develop high-performance
                                websites, SaaS platforms and digital
                                products that help businesses grow
                                faster.

                            </p>


                            <div className="hero-buttons">

                                <a
                                    href="/contact"
                                    className="btn-primary-custom"
                                >
                                    Start a Project

                                    <i className="bi bi-arrow-up-right"></i>
                                </a>


                                <a
                                    href="/services"
                                    className="btn-outline-custom"
                                >
                                    Explore Services

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </div>


                            {/* Trust */}
                            <div className="hero-trust">

                                <div className="hero-trust-item">

                                    <i className="bi bi-check-circle-fill"></i>

                                    <span>
                                        Strategy
                                    </span>

                                </div>


                                <div className="hero-trust-item">

                                    <i className="bi bi-check-circle-fill"></i>

                                    <span>
                                        Design
                                    </span>

                                </div>


                                <div className="hero-trust-item">

                                    <i className="bi bi-check-circle-fill"></i>

                                    <span>
                                        Development
                                    </span>

                                </div>


                                <div className="hero-trust-item">

                                    <i className="bi bi-check-circle-fill"></i>

                                    <span>
                                        Growth
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Right Visual */}
                    <div className="col-lg-6">

                        <div className="hero-visual">

                            {/* Main Dashboard */}
                            <div className="hero-dashboard">

                                {/* Dashboard Header */}
                                <div className="dashboard-header">

                                    <div className="dashboard-dots">

                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </div>

                                    <div className="dashboard-url">
                                        dashboard.app
                                    </div>

                                </div>


                                {/* Dashboard Body */}
                                <div className="dashboard-body">

                                    <div className="dashboard-top">

                                        <div>
                                            <span className="dashboard-label">
                                                Total Revenue
                                            </span>

                                            <strong>
                                                $84,240
                                            </strong>
                                        </div>


                                        <div className="dashboard-growth">
                                            +24.8%
                                        </div>

                                    </div>


                                    {/* Chart */}
                                    <div className="dashboard-chart">

                                        <div className="chart-line chart-line-one"></div>

                                        <div className="chart-line chart-line-two"></div>

                                        <div className="chart-line chart-line-three"></div>

                                        <svg
                                            viewBox="0 0 500 180"
                                            preserveAspectRatio="none"
                                        >

                                            <defs>

                                                <linearGradient
                                                    id="chartGradient"
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >

                                                    <stop
                                                        offset="0%"
                                                        stopColor="var(--primary-color)"
                                                        stopOpacity="0.25"
                                                    />

                                                    <stop
                                                        offset="100%"
                                                        stopColor="var(--primary-color)"
                                                        stopOpacity="0"
                                                    />

                                                </linearGradient>

                                            </defs>


                                            <path
                                                className="chart-area"
                                                d="M0,145
                                                C45,130 65,140 95,110
                                                C125,80 145,105 175,90
                                                C210,72 220,95 250,65
                                                C285,35 300,70 325,50
                                                C355,28 380,55 400,35
                                                C430,10 450,28 500,5
                                                L500,180
                                                L0,180 Z"
                                            />


                                            <path
                                                className="chart-path"
                                                d="M0,145
                                                C45,130 65,140 95,110
                                                C125,80 145,105 175,90
                                                C210,72 220,95 250,65
                                                C285,35 300,70 325,50
                                                C355,28 380,55 400,35
                                                C430,10 450,28 500,5"
                                            />

                                        </svg>

                                    </div>


                                    {/* Bottom Cards */}
                                    <div className="dashboard-cards">

                                        <div className="dashboard-mini-card">

                                            <div className="mini-card-icon">
                                                <i className="bi bi-people"></i>
                                            </div>

                                            <div>

                                                <span>
                                                    Customers
                                                </span>

                                                <strong>
                                                    12,840
                                                </strong>

                                            </div>

                                        </div>


                                        <div className="dashboard-mini-card">

                                            <div className="mini-card-icon">
                                                <i className="bi bi-graph-up-arrow"></i>
                                            </div>

                                            <div>

                                                <span>
                                                    Growth
                                                </span>

                                                <strong>
                                                    +32.5%
                                                </strong>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Floating Card 1 */}
                            <div className="hero-floating-card hero-floating-one">

                                <div className="floating-icon">
                                    <i className="bi bi-check-lg"></i>
                                </div>

                                <div>

                                    <span>
                                        Project Completed
                                    </span>

                                    <strong>
                                        500+
                                    </strong>

                                </div>

                            </div>


                            {/* Floating Card 2 */}
                            <div className="hero-floating-card hero-floating-two">

                                <div className="floating-icon">
                                    <i className="bi bi-star-fill"></i>
                                </div>

                                <div>

                                    <strong>
                                        4.9 / 5
                                    </strong>

                                    <span>
                                        Client Rating
                                    </span>

                                </div>

                            </div>


                            {/* Decorative Circle */}
                            <div className="hero-circle"></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}