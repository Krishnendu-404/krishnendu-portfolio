const experiences = [
    {
        date: "ACADEMIC PROJECT EXPERIENCE",
        role: "DEVELOPER / PROJECT BUILDER",
        company: "COLLEGE / ACADEMIC PROJECTS",
        description:
            "Developed and deployed practical software projects as part of my academic learning, with guidance and mentorship from my professor.",
        points: [
            "Designed and developed projects to solve practical problems.",
            "Implemented features using programming, web development and computer vision technologies.",
            "Tested, improved and deployed projects to make them usable beyond the development environment.",
            "Learned software development practices through hands-on project work and academic mentorship.",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="section section-alt"
        >
            <div className="container">

                <div className="section-heading">

                    <p className="section-label">
                        04 — EXPERIENCE
                    </p>

                    <h2>
                        PROJECT{" "}
                        <span>EXPERIENCE.</span>
                    </h2>

                    <p className="section-intro">
                        HANDS-ON DEVELOPMENT THROUGH
                        ACADEMIC PROJECTS.
                    </p>

                </div>

                <div className="timeline">

                    {experiences.map((experience) => (
                        <div
                            className="timeline-item"
                            key={experience.date}
                        >

                            <div className="timeline-dot"></div>

                            <div className="timeline-date">
                                {experience.date}
                            </div>

                            <div className="timeline-content">

                                <h3>
                                    {experience.role}
                                </h3>

                                <h4>
                                    {experience.company}
                                </h4>

                                <p>
                                    {experience.description}
                                </p>

                                <ul>
                                    {experience.points.map(
                                        (point) => (
                                            <li key={point}>
                                                {point}
                                            </li>
                                        )
                                    )}
                                </ul>

                            </div>

                        </div>
                    ))}

                </div>

                {/* EXPERIENCE NOTE */}

                <div className="experience-note">

                    <span className="experience-note-code">
                        EXPERIENCE / STATUS
                    </span>

                    <div className="experience-note-content">

                        <strong>
                            0 YEARS FORMAL EXPERIENCE
                        </strong>

                        <p>
                            Currently building my professional
                            experience through hands-on projects,
                            academic work and continuous learning.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}