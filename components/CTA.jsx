import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="cta">

            <div className="container">

                <div className="cta-box">

                    <p className="section-label">
                        CONNECTION REQUEST
                    </p>

                    <h2>
                        HAVE A{" "}
                        <span>PROJECT?</span>
                    </h2>

                    <p>
                        Let's discuss the problem, design the
                        solution and build something useful.
                    </p>

                    <a
                        href="#contact"
                        className="btn btn-primary"
                    >
                        INITIATE CONTACT
                        <ArrowRight size={18} />
                    </a>

                </div>

            </div>

        </section>
    );
}