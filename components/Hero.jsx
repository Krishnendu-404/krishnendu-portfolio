"use client";

import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    FileText,
    Cpu,
    Terminal,
    Activity,
} from "lucide-react";

export default function Hero() {
    const [typedText, setTypedText] = useState("");

    const text = "BUILDING DIGITAL SYSTEMS";

    useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            setTypedText(text.slice(0, index));
            index++;

            if (index > text.length) {
                clearInterval(timer);
            }
        }, 55);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero creative-hero">

            {/* BACKGROUND GRID */}
            <div className="hero-grid-background"></div>

            {/* DECORATIVE TECH LABELS */}
            <div className="hero-coordinate coordinate-one">
                X: 001 / Y: 042
            </div>

            <div className="hero-coordinate coordinate-two">
                SYS.V4.0.1
            </div>

            <div className="container hero-grid">

                {/* =========================================
                    LEFT CONTENT
                ========================================== */}

                <div className="hero-content">

                    <div className="system-badge">
                        <span className="status-pulse"></span>

                        SYSTEM ONLINE

                        <span className="badge-divider">
                            //
                        </span>

                        PORTFOLIO 001
                    </div>

                    <div className="hero-terminal">

                        <Terminal size={15} />

                        <span>
                            krishnendu@portfolio:~$
                        </span>

                        <strong>
                            {typedText}
                        </strong>

                        <span className="terminal-cursor">
                            _
                        </span>

                    </div>

                    <h1>
                        KRISHNENDU
                        <span>KHASKAL</span>
                    </h1>

                    <h2>
                        I BUILD{" "}
                        <span>THINGS</span>
                        <br />
                        THAT SOLVE
                        <br />
                        REAL PROBLEMS.
                    </h2>

                    <p className="hero-description">
                        I'm a passionate{" "}
                        <strong>Developer</strong>{" "}
                        focused on building practical,
                        efficient and high-quality digital
                        solutions.
                    </p>

                    {/* BUTTONS */}

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="btn btn-primary"
                        >
                            EXPLORE SYSTEM
                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VIEW RESUME
                            <FileText size={18} />
                        </a>

                    </div>

                    {/* SOCIAL */}

                    <div className="social-links">

                        {/* GITHUB */}
                        <a
                            href="https://github.com/Krishnendu-404"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                                />
                            </svg>
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://www.linkedin.com/in/krishnendukhaskal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z"
                                />
                            </svg>
                        </a>

                        {/* EMAIL */}
                        <a
                            href="mailto:krishnendukhaskal.1@gmail.com"
                            aria-label="Email"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M20 4H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm0 2-8 5-8-5h16ZM4 18a1 1 0 0 1-1-1V8.15l8.47 5.29a1 1 0 0 0 1.06 0L21 8.15V17a1 1 0 0 1-1 1H4Z"
                                />
                            </svg>
                        </a>

                    </div>

                </div>

                {/* =========================================
                    RIGHT SYSTEM PANEL
                ========================================== */}

                <div className="hero-system">

                    <div className="system-panel">

                        <div className="system-panel-header">

                            <div>
                                <span className="panel-indicator"></span>
                                SYSTEM STATUS
                            </div>

                            <span>
                                001
                            </span>

                        </div>

                        <div className="system-avatar">

                            <div className="avatar-ring"></div>

                            <div className="hero-image">

                                <img
                                    src="/profile.jpg"
                                    alt="Portrait of KRISHNENDU KHASKAL"
                                />

                            </div>

                            <div className="scan-line"></div>

                        </div>

                        <div className="system-readout">

                            <div className="readout-title">
                                <Cpu size={16} />
                                CORE PROFILE
                            </div>

                            <div className="readout-row">
                                <span>STATUS</span>
                                <strong>OPERATIONAL</strong>
                            </div>

                            <div className="readout-row">
                                <span>MODE</span>
                                <strong>DEVELOPER</strong>
                            </div>

                            <div className="readout-row">
                                <span>FOCUS</span>
                                <strong>PROBLEM SOLVING</strong>
                            </div>

                        </div>

                        <div className="system-meters">

                            <div className="meter">

                                <div>
                                    <span>CODE</span>
                                    <strong>92%</strong>
                                </div>

                                <div className="meter-track">
                                    <span style={{ width: "92%" }}></span>
                                </div>

                            </div>

                            <div className="meter">

                                <div>
                                    <span>DESIGN</span>
                                    <strong>84%</strong>
                                </div>

                                <div className="meter-track">
                                    <span style={{ width: "84%" }}></span>
                                </div>

                            </div>

                            <div className="meter">

                                <div>
                                    <span>LOGIC</span>
                                    <strong>96%</strong>
                                </div>

                                <div className="meter-track">
                                    <span style={{ width: "96%" }}></span>
                                </div>

                            </div>

                        </div>

                        <div className="system-footer">

                            <span>
                                <Activity size={13} />
                                LIVE
                            </span>

                            <span>
                                127.0.0.1
                            </span>

                        </div>

                    </div>

                    <div className="system-decoration decoration-one">
                        +
                    </div>

                    <div className="system-decoration decoration-two">
                        +
                    </div>

                </div>

            </div>

        </section>
    );
}