import { ArrowUpRight } from "lucide-react";

const projects = [
   {
    number: "PROJECT / 001",
    title: "SHOPNEST",
    subtitle: "SUSTAINABLE E-COMMERCE PLATFORM",

    description:
        "A sustainable e-commerce platform designed to provide a smooth and user-friendly online shopping experience.",

    image: "/project1.jpg",

    

    github:
        "https://github.com/Krishnendu-404/ShopNest",

    tags: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "MONGODB",
    ],

    type: "WEB APPLICATION",

    focus: "E-COMMERCE",
},
    {
    number: "PROJECT / 002",
    title: "FACE RECOGNITION",

    subtitle: "ATTENDANCE SYSTEM",

    description:
        "A face-recognition based attendance system that automates identity detection and attendance tracking using computer vision.",

    image: "/project2.jpg",

    github:
        "https://github.com/Krishnendu-404/Face-Recognition-Attendance-System",

    tags: [
        "PYTHON",
        "OPENCV",
        "SQLITE",
    ],

    type: "COMPUTER VISION",

    focus: "AUTOMATION",
},
    {
        number: "PROJECT / 003",
        title: "COOKIECRAVE-FULL STACK WEBSITE",
        description:
            "A website where you can buy your favourite cookies.",
        image: "/project3.jpg",
        github: null,
        tags: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "NODE.JS",
            "DBMS",
        ],
    },
    {
    number: "PROJECT / 004",
    title: "EMOTION DETECTOR",

    subtitle: "FACIAL EXPRESSION ANALYSIS",

    description:
        "An emotion detection project that analyzes facial expressions and identifies the detected emotional state using computer vision and machine learning.",

    image: "/project4.jpg",

    github:
        "https://github.com/Krishnendu-404/Emotion-Detector",

    tags: [
        "PYTHON",
        "OPENCV",
        "MACHINE LEARNING",
    ],

    type: "MACHINE LEARNING",

    focus: "COMPUTER VISION",
},
];

export default function Projects() {
    return (
        <section id="projects" className="section">

            <div className="container">

                <div className="section-heading">

                    <p className="section-label">
                        03 — PROJECTS
                    </p>

                    <h2>
                        SELECTED{" "}
                        <span>WORK.</span>
                    </h2>

                </div>

                <div className="projects-grid">

                    {projects.map((project) => {

                        const Card = project.github
                            ? "a"
                            : "article";

                        const cardProps = project.github
                            ? {
                                  href: project.github,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "aria-label": `Open ${project.title} GitHub repository`,
                              }
                            : {};

                        return (
                            <Card
                                className="project-card"
                                key={project.number}
                                {...cardProps}
                            >

                                <div className="project-image">

                                    <img
                                        src={project.image}
                                        alt={`Screenshot of ${project.title}`}
                                    />

                                </div>

                                <div className="project-content">

                                    <div className="project-top">

                                        <span className="project-number">
                                            {project.number}
                                        </span>

                                        <span
                                            className="project-arrow"
                                            aria-hidden="true"
                                        >
                                            <ArrowUpRight size={20} />
                                        </span>

                                    </div>

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.description}
                                        
                                    </p>

                                    <div className="tags">

                                        {project.tags.map((tag) => (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                    {project.github && (
                                        <div className="project-github">

    VIEW ON GITHUB

    <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
    >
        <path
            fill="currentColor"
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
    </svg>

</div>
                                    )}

                                </div>

                            </Card>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}