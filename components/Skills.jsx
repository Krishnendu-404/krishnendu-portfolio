import { Code2, Settings, Cpu } from "lucide-react";

const skills = [
    {
        icon: Code2,
        title: "Development",
        description:
            "Building responsive, reliable and efficient software systems.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        icon: Settings,
        title: "Design",
        description:
            "Creating clean interfaces with a focus on usability and visual hierarchy.",
        tags: ["UI/UX", "Figma", "Wireframing"],
    },
    {
        icon: Cpu,
        title: "Strategy",
        description:
            "Turning ideas and problems into practical solutions that create value.",
        tags: ["Research", "Analytics", "Strategy"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section section-alt">

            <div className="container">

                <div className="section-heading">

                    <p className="section-label">
                        02 — CAPABILITIES
                    </p>

                    <h2>
                        TECHNICAL{" "}
                        <span>ARSENAL.</span>
                    </h2>

                </div>

                <div className="skills-grid">

                    {skills.map((skill) => {

                        const Icon = skill.icon;

                        return (
                            <div
                                className="skill-card"
                                key={skill.title}
                            >

                                <div className="skill-icon">
                                    <Icon size={24} />
                                </div>

                                <h3>{skill.title}</h3>

                                <p>{skill.description}</p>

                                <div className="tags">
                                    {skill.tags.map((tag) => (
                                        <span key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}