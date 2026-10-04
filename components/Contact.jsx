"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = formData.name.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();

        if (!name || !email || !message) {
            return;
        }

        const subject = encodeURIComponent(
            `Portfolio Contact from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href =
            `mailto:krishnendukhaskal.1@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section">

            <div className="container">

                <div className="section-heading">

                    <p className="section-label">
                        05 — CONTACT
                    </p>

                    <h2>
                        ESTABLISH{" "}
                        <span>CONNECTION.</span>
                    </h2>

                </div>

                <div className="contact-grid">

                    {/* CONTACT INFORMATION */}
                    <div>

                        <p className="contact-intro">
                            Have an interesting project,
                            opportunity or idea?
                            <br />
                            <br />
                            Send me a message and I'll get
                            back to you.
                        </p>

                        <a
                            href="mailto:krishnendukhaskal.1@gmail.com"
                            className="contact-email"
                        >
                            krishnendukhaskal.1@gmail.com
                        </a>

                    </div>

                    {/* CONTACT FORM */}
                    <form onSubmit={handleSubmit}>

                        <div className="input-group">

                            <label htmlFor="name">
                                IDENTIFICATION / NAME
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="input-group">

                            <label htmlFor="email">
                                COMMUNICATION / EMAIL
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="input-group">

                            <label htmlFor="message">
                                MESSAGE / REQUEST
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Describe your project or message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            TRANSMIT MESSAGE
                            <Send size={18} />
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}