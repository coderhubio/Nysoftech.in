"use client";

import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`site-header ${
                scrolled ? "header-scrolled" : ""
            }`}
        >
            <div className="container">
                <nav className="navbar navbar-expand-lg p-0">

                    {/* Logo */}
                    <a
                        href="/"
                        className="site-logo"
                    >
                        <img src="/ny-softech.svg" className="logo-text" />
                    </a>


                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list"></i>
                    </button>


                    {/* Navigation */}
                    <div
                        className="collapse navbar-collapse"
                        id="mainNavbar"
                    >
                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/about"
                                >
                                    About
                                </a>
                            </li>


                            {/* Services */}
                            <li className="nav-item dropdown">

                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </a>

                                <ul className="dropdown-menu">

                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/web-development"
                                        >
                                            Web Development
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/web-design"
                                        >
                                            Web Design
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/seo"
                                        >
                                            SEO
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/saas"
                                        >
                                            SaaS Development
                                        </a>
                                    </li>

                                </ul>

                            </li>


                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/portfolio"
                                >
                                    Portfolio
                                </a>
                            </li>


                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/industries"
                                >
                                    Industries
                                </a>
                            </li>


                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/blog"
                                >
                                    Blog
                                </a>
                            </li>

                        </ul>


                        {/* CTA */}
                        <div className="header-action">

                            <a
                                href="/contact"
                                className="btn-primary-custom"
                            >
                                Let's Talk

                                <i className="bi bi-arrow-up-right"></i>
                            </a>

                        </div>

                    </div>

                </nav>
            </div>
        </header>
    );
}