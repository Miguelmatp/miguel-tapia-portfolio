
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ExternalLink, Search, X } from "lucide-react";
import { projectsList, type ProjectCategory } from "../../data/projects";
import "../../styles/portfolioModal.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type CategoryFilter = "Todos" | ProjectCategory;
const categories: CategoryFilter[] = ["Todos", "Sistema web", "Landing page", "Aplicación"];

export default function PortfolioModal({ isOpen, onClose }: Props) {
    const [filter, setFilter] = useState<CategoryFilter>("Todos");
    const [search, setSearch] = useState("");
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key !== "Tab") return;

            const modal = closeRef.current?.closest(".ctnPortfolioModal");
            const elements = Array.from(modal?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled)') || []);
            if (!elements.length) return;

            const first = elements[0];
            const last = elements[elements.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKey);
            previousFocus?.focus();
        };
    }, [isOpen, onClose]);

    const filteredProjects = projectsList.filter(item => {
        const matchesCategory = filter === "Todos" || item.category === filter;
        const matchesSearch = `${item.title} ${item.description} ${item.technologies.join(" ")}`.toLowerCase().includes(search.toLowerCase().trim());
        return matchesCategory && matchesSearch;
    });

    if (!isOpen) return null;

    return createPortal(
        <div className="ctnPortfolioOverlay" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="ctnPortfolioModal" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title">
                <div className="ctnPortfolioModalHeader">
                    <div className="portfolioModalTitle">
                        <span className="sectionTag">MI PORTAFOLIO</span>
                        <h2 id="portfolio-modal-title">Todos mis proyectos</h2>
                        <p>Explora las aplicaciones y experiencias digitales que he desarrollado.</p>
                    </div>
                    <button ref={closeRef} type="button" className="portfolioModalClose" onClick={onClose} aria-label="Cerrar modal"><X size={22} /></button>
                </div>

                <div className="ctnPortfolioModalTools">
                    <label className="portfolioModalSearch">
                        <Search size={18} />
                        <input type="search" placeholder="Buscar proyectos o tecnologías..." aria-label="Buscar proyectos" value={search} onChange={e => setSearch(e.target.value)} />
                    </label>

                    <div className="ctnPortfolioModalFilters">
                        {categories.map(category => {
                            const count = category === "Todos" ? projectsList.length : projectsList.filter(item => item.category === category).length;
                            return (
                                <button key={category} type="button" className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>
                                    {category} ({count})
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="ctnPortfolioModalBody">
                    {filteredProjects.length > 0 ? (
                        <div className="ctnPortfolioModalGrid">
                            {filteredProjects.map(item => (
                                <article className="portfolioModalCard" key={item.id}>
                                    <div className="portfolioModalImage"><img src={item.image} alt={`Vista de ${item.title}`} loading="lazy" /></div>
                                    <div className="portfolioModalInfo">
                                        <span className="portfolioModalCategory">{item.category}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>

                                        <div className="ctnPortfolioTech">
                                            {item.technologies.map(tech => <span key={tech}>{tech}</span>)}
                                        </div>

                                        {(item.url || item.repository) && (
                                            <div className="ctnPortfolioModalActions">
                                                {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">Ver proyecto <ExternalLink size={15} /></a>}
                                                {item.repository && <a href={item.repository} target="_blank" rel="noopener noreferrer">Código <img src="/images/icons/github.svg" alt="" /></a>}
                                            </div>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="portfolioModalEmpty">
                            <Search size={30} />
                            <h3>No encontramos proyectos</h3>
                            <p>Prueba otra búsqueda o cambia los filtros.</p>
                            <button type="button" onClick={() => { setFilter("Todos"); setSearch(""); }}>Limpiar filtros <ArrowUpRight size={15} /></button>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
