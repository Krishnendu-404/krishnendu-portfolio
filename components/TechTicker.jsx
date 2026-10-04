export default function TechTicker() {
    const technologies = [
        "JAVASCRIPT",
        "REACT",
        "NEXT.JS",
        "PYTHON",
        "OPENCV",
        "MONGODB",
        "SQLITE",
        "HTML",
        "CSS",
        "MACHINE LEARNING",
    ];

    return (
        <div className="tech-ticker">

            <div className="ticker-track">

                {[...technologies, ...technologies].map(
                    (technology, index) => (
                        <div
                            className="ticker-item"
                            key={`${technology}-${index}`}
                        >
                            <span>◆</span>
                            {technology}
                        </div>
                    )
                )}

            </div>

        </div>
    );
}