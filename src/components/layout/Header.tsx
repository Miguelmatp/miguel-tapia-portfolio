
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { links, navigationLinks } from "../../data/links";
import "../../styles/header.css";

const navigation = navigationLinks.filter(item => item.href !== links.education);

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [menuOpen]);

    return (
        <header className={`ctnHeader ${scrolled ? "scrolled" : ""}`}>
            <div className="header">
                <a href={links.home} className="ctnLogo" onClick={() => setMenuOpen(false)} aria-label="Ir al inicio">
                    <span className="logoIcon">MT<span>.</span></span>
                    <span className="logoText">Miguel Tapia</span>
                </a>

                <nav className={`ctnNav ${menuOpen ? "active" : ""}`} id="main-navigation" aria-label="Navegación principal">
                    {navigation.map((item) => (
                        <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                    ))}
                    <a href={links.contact} className="navContactMobile" onClick={() => setMenuOpen(false)}>Contáctame <ArrowUpRight size={17} /></a>
                </nav>

                <div className="ctnActions">
                    <a href={links.contact} className="btnContact">Hablemos <ArrowUpRight size={17} /></a>
                    <button type="button" className="btnMenuMobile" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="main-navigation">
                        {menuOpen ? <X size={23} /> : <Menu size={23} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
