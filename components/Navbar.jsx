"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
            <div className="container nav-container">

                {/* LOGO */}
                <a
                    href="#home"
                    className="logo"
                    onClick={closeMenu}
                >
                    &lt;
                    <span>KRISHNENDU</span>
                    /&gt;
                </a>

                {/* NAVIGATION */}
                <nav
                    id="nav-menu"
                    className={menuOpen ? "active" : ""}
                >
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#education" onClick={closeMenu}>
                        Education
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>

                    <a href="#experience" onClick={closeMenu}>
                        Experience
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>

                

                {/* MOBILE MENU */}
                <div className="nav-actions">
                    <button
                        id="menu-toggle"
                        type="button"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>

            </div>
        </header>
    );
}