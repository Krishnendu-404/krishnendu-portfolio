import { GraduationCap } from "lucide-react";

const education = [
    {
        year: "2022 — 2026",
        level: "BACHELOR'S DEGREE",
        title: "COMPUTER SCIENCE",
        institution: "BEHALA COLLEGE",
        description:
            "Add a short description about your degree, specialization, academic focus, or relevant coursework.",
        field: "HONOURS",
        location: "KOLKATA",
        status: "COMPLETED",
    },
    {
        year: "2021 — 2022",
        level: "HIGHER SECONDARY",
        title: "HIGHER SECONDARY EDUCATION",
        institution: "NEW ALIPORE MULTIPUPOSE SCHOOL",
        description:
            "Add your Class XII stream, academic focus, board and relevant details.",
        field: "COMPUTER SCIENCE",
        location: "KOLKATA",
        status: "COMPLETED",
    },
    {
        year: "2019 — 2020",
        level: "SECONDARY",
        title: "SECONDARY EDUCATION",
        institution: "NEW ALIPORE MULTIPUPOSE SCHOOL",
        description:
            "Add your Class X board and other relevant academic details.",
        field: "GENERAL",
        location: "KOLKATA",
        status: "COMPLETED",
    },
];

export default function Education() {
    return (
        <section className="education section" id="education">

            <div className="container">

                <div className="section-heading">

                    <span className="section-code">
                        EDU / 001
                    </span>

                    <h2>EDUCATION</h2>

                    <p>
                        THE FOUNDATION BEHIND THE WORK.
                    </p>

                </div>

                <div className="education-timeline">

                    {education.map((item, index) => (
                        <article
                            className="education-card"
                            key={item.level}
                        >

                            <div className="education-card-top">

                                <span className="education-status">
                                    <span className="status-dot"></span>
                                    ACADEMIC RECORD
                                </span>

                                <span className="education-year">
                                    {item.year}
                                </span>

                            </div>

                            <div className="education-main">

                                <div className="education-icon">
                                    <GraduationCap size={28} />
                                </div>

                                <div className="education-info">

                                    <span className="education-level">
                                        {item.level}
                                    </span>

                                    <h3>{item.title}</h3>

                                    <h4>{item.institution}</h4>

                                    <p>{item.description}</p>

                                </div>

                            </div>

                            <div className="education-details">

                                <div className="education-detail">
                                    <span>FIELD</span>
                                    <strong>{item.field}</strong>
                                </div>

                                <div className="education-detail">
                                    <span>LOCATION</span>
                                    <strong>{item.location}</strong>
                                </div>

                                <div className="education-detail">
                                    <span>STATUS</span>
                                    <strong>{item.status}</strong>
                                </div>

                            </div>

                        </article>
                    ))}

                </div>

                <div className="education-highlight">

                    <span className="highlight-code">
                        ACADEMIC / PROFILE
                    </span>

                    <div className="highlight-number">
                        01
                    </div>

                    <h3>
                        BUILDING KNOWLEDGE.
                        <span> APPLYING IT.</span>
                    </h3>

                    <p>
                        My academic journey has helped me build
                        the technical foundation, problem-solving
                        skills, and practical knowledge I bring
                        into my projects.
                    </p>

                </div>

            </div>

        </section>
    );
}