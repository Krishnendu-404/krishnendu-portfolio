import {
    Code2,
    BriefcaseBusiness,
    Layers3,
    ArrowUpRight,
} from "lucide-react";

const stats = [
    {
        value: "3+",
        label: "PROJECTS",
        description: "Built and documented",
        icon: Layers3,
    },
    {
        value: "1+",
        label: "YEARS",
        description: "Learning & building",
        icon: BriefcaseBusiness,
    },
    {
        value: "6+",
        label: "TECHNOLOGIES",
        description: "Across projects",
        icon: Code2,
    },
];

export default function RecruiterSnapshot() {
    return (
        <section className="recruiter-snapshot">

            <div className="container">

                <div className="snapshot-header">

                    <div>
                        <span className="section-code">
                            PROFILE / 001
                        </span>

                        <h2>
                            BUILT TO BE
                            <span> UNDERSTOOD.</span>
                        </h2>
                    </div>

                    <p>
                        A quick overview for recruiters,
                        collaborators and hiring teams.
                    </p>

                </div>

                <div className="snapshot-grid">

                    {stats.map((stat) => {

                        const Icon = stat.icon;

                        return (
                            <div
                                className="snapshot-card"
                                key={stat.label}
                            >

                                <div className="snapshot-icon">
                                    <Icon size={19} />
                                </div>

                                <div className="snapshot-number">
                                    {stat.value}
                                </div>

                                <div className="snapshot-label">
                                    {stat.label}
                                </div>

                                <p>
                                    {stat.description}
                                </p>

                            </div>
                        );
                    })}

                    <a
                        href="#contact"
                        className="snapshot-action"
                    >

                        <div>
                            <span>
                                OPEN TO
                            </span>

                            <strong>
                                NEW OPPORTUNITIES
                            </strong>
                        </div>

                        <ArrowUpRight size={22} />

                    </a>

                </div>

            </div>

        </section>
    );
}