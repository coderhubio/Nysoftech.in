import Link from "next/link";
import navigation from "../data/navigation";

export default function Footer() {
    return (
        <footer className="site-footer">

            <div className="container">

                {/* =====================================
                    TOP
                ====================================== */}

                <div className="footer-top">

                    <div className="row g-5">

                        {/* Brand */}
                        <div className="col-lg-4 col-md-6">

                            <div className="footer-brand">

                                <Link
                                    href="/"
                                    className="footer-logo"
                                >
                                <img src="./logo-footer.png" className="logo-text" />
                                </Link>


                                <p>
                                    We build modern digital
                                    experiences, websites and
                                    software products that help
                                    businesses grow.
                                </p>


                                <div className="footer-social">

                                    {navigation.social.map(
                                        (social) => (

                                            <a
                                                key={social.label}
                                                href={social.href}
                                                aria-label={
                                                    social.label
                                                }
                                            >
                                                <i
                                                    className={`bi ${social.icon}`}
                                                ></i>
                                            </a>

                                        )
                                    )}

                                </div>

                            </div>

                        </div>


                        {/* Services */}
                        <div className="col-lg-2 col-md-6">

                            <div className="footer-column">

                                <h3>
                                    Services
                                </h3>

                                <ul>

                                    {navigation.services
                                        .slice(0, 5)
                                        .map((item) => (

                                            <li key={item.label}>

                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>

                                            </li>

                                        ))}

                                </ul>

                            </div>

                        </div>


                        {/* Company */}
                        <div className="col-lg-2 col-md-6">

                            <div className="footer-column">

                                <h3>
                                    Company
                                </h3>

                                <ul>

                                    {navigation.company.map(
                                        (item) => (

                                            <li key={item.label}>

                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>

                                            </li>

                                        )
                                    )}

                                </ul>

                            </div>

                        </div>


                        {/* Contact */}
                        <div className="col-lg-4 col-md-6">

                            <div className="footer-column footer-contact">

                                <h3>
                                    Let's Talk
                                </h3>

                                <p>
                                    Have a project or idea?
                                    We'd love to hear about it.
                                </p>


                                <a
                                    href="mailto:hello@junixo.com"
                                    className="footer-email"
                                >
                                    hello@junixo.com
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>


                                <div className="footer-location">

                                    <i className="bi bi-geo-alt"></i>

                                    <span>
                                        India · Working Worldwide
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    BOTTOM
                ====================================== */}

                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} Junixo.
                        All rights reserved.
                    </span>


                    <div className="footer-legal">

                        <Link href="/privacy-policy">
                            Privacy Policy
                        </Link>

                        <Link href="/terms">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}