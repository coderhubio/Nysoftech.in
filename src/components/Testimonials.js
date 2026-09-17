"use client";

import { useState } from "react";
import testimonials from "../data/testimonials";

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const previous = () => {
        setActive((current) =>
            current === 0 ? testimonials.length - 1 : current - 1
        );
    };

    const next = () => {
        setActive((current) =>
            current === testimonials.length - 1 ? 0 : current + 1
        );
    };

    return (
        <section className="testimonials-section section">

            <div className="container">

                {/* Header */}
                <div className="testimonials-header">

                    <div>
                        <div className="section-subtitle">
                            Client Stories
                        </div>

                        <h2 className="section-title text-start">
                            What Our <span>Clients Say.</span>
                        </h2>
                    </div>

                    <div className="testimonials-header-right">

                        <p>
                            Real feedback from businesses we've helped
                            grow, transform and move forward.
                        </p>

                        <div className="testimonials-rating">

                            <div className="rating-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <i
                                        key={star}
                                        className="bi bi-star-fill"
                                    ></i>
                                ))}
                            </div>

                            <span>5.0 / 5.0 Client Rating</span>

                        </div>

                    </div>

                </div>


                {/* Cards */}
                <div className="testimonials-carousel">

                    {testimonials.map((testimonial, index) => {

                        const position =
                            index === active
                                ? "active"
                                : index ===
                                    (active - 1 + testimonials.length) %
                                        testimonials.length
                                ? "prev"
                                : index ===
                                    (active + 1) % testimonials.length
                                ? "next"
                                : "hidden";

                        return (
                            <div
                                className={`testimonial-card ${position}`}
                                key={testimonial.name}
                            >

                                {/* Quote Icon */}
                                <div className="testimonial-card-top">

                                    <div className="testimonial-quote-icon">
                                        <i className="bi bi-quote"></i>
                                    </div>

                                    <div className="testimonial-stars">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i
                                                key={star}
                                                className="bi bi-star-fill"
                                            ></i>
                                        ))}
                                    </div>

                                </div>


                                {/* Quote */}
                                <p className="testimonial-quote">
                                    {testimonial.quote}
                                </p>


                                {/* Author */}
                                <div className="testimonial-author">

                                    <div className="testimonial-avatar">
                                        {testimonial.initials}
                                    </div>

                                    <div className="testimonial-author-info">

                                        <h3>
                                            {testimonial.name}
                                        </h3>

                                        <span>
                                            {testimonial.role}
                                        </span>

                                        <small>
                                            {testimonial.company}
                                        </small>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* Bottom Controls */}
                <div className="testimonials-bottom">

                    <div className="testimonial-counter">

                        <strong>
                            {String(active + 1).padStart(2, "0")}
                        </strong>

                        <div className="testimonial-progress">

                            <span
                                style={{
                                    width: `${
                                        ((active + 1) /
                                            testimonials.length) *
                                        100
                                    }%`,
                                }}
                            ></span>

                        </div>

                        <span>
                            {String(testimonials.length).padStart(2, "0")}
                        </span>

                    </div>


                    <div className="testimonial-buttons">

                        <button
                            type="button"
                            onClick={previous}
                            aria-label="Previous testimonial"
                        >
                            <i className="bi bi-arrow-left"></i>
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next testimonial"
                        >
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}