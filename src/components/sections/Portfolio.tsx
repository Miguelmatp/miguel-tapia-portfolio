
import { useState } from "react";
import { technologyList } from "../../data/technologies";
import { ArrowRight, ArrowUpRight, AppWindow, Check, ExternalLink, LayoutGrid, Link2, Monitor, X } from "lucide-react";
import { projectsList, type ProjectCategory, type ProjectItem } from "../../data/projects";
import PortfolioModal from "../modals/PortfolioModal";
import "../../styles/portfolio.css";

type ProjectFilter = "Todos" | ProjectCategory;

const filters = [
    { label: "Todos", icon: null },
    { label: "Sistema web", icon: Monitor },
    { label: "Landing page", icon: AppWindow },
    { label: "Aplicación", icon: LayoutGrid },
    { label: "Integración", icon: Link2 }
] as const;

const categoryIcons = {
    "Sistema web": Monitor,
    "Landing page": AppWindow,
    "Aplicación": LayoutGrid,
    "Integración": Link2
};

export default function Portfolio() {
    const [filter, setFilter] = useState<ProjectFilter>("Todos");
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [showAll, setShowAll] = useState(false);

    // const featuredProjects = projectsList.filter(item => item.featured);
    // const availableProjects = showAll ? projectsList : featuredProjects;
    // const displayedProjects = availableProjects.filter(item => filter === "Todos" || item.category === filter);
    
    const filteredProjects = projectsList.filter(item => filter === "Todos" || item.category === filter);
    const displayedProjects = filter === "Todos" && !showAll ? filteredProjects.slice(0, 3) : filteredProjects;


    return (
        <section className="ctnPortfolio" id="portfolio">
            <div className="ctnContenido">
                <div className="ctnPortfolioTitle">
                    {/* <span className="portfolioTag"><Layers3 size={15} /> PORTAFOLIO</span> */}
                    <h2>Proyectos <span>destacados.</span></h2>
                    <p>Una selección de aplicaciones, sistemas y landings que he desarrollado.</p>
                </div>

                <div className="ctnPortfolioFilters" role="group" aria-label="Filtrar proyectos">
                    {filters.map(({ label, icon: Icon }) => (
                        <button type="button" key={label} className={filter === label ? "active" : ""} aria-pressed={filter === label} onClick={() => setFilter(label)}>
                            {Icon && <Icon size={17} strokeWidth={1.8} />}
                            {label === "Sistema web" ? "Sistemas web" : label === "Landing page" ? "Landing pages" : label === "Aplicación" ? "Aplicaciones" : label === "Integración" ? "Integraciones" : label}
                        </button>
                    ))}
                </div>

                <div className="ctnPortfolioGrid">
                    {displayedProjects.map(item => {
                        const Icon = categoryIcons[item.category];

                        return (
                            <article className="portfolioCard" key={item.id}>
                                <div className="portfolioImage">
                                    {item.image ? (
                                        <img src={item.image} alt={`Vista de ${item.title}`} loading="lazy" />
                                    ) : (
                                        <div className="portfolioImageFallback">
                                            <AppWindow size={42} strokeWidth={1.5} />
                                            <span>{item.title}</span>
                                        </div>
                                    )}
                                    <span className="portfolioCategory"><Icon size={14} /> {item.category}</span>
                                </div>

                                <div className="ctnPortfolioInfo">
                                    <div className="ctnPortfolioDescription">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className="ctnPortfolioTech">
                                        {item.technologies.slice(0, 3).map(tech => {
                                            const technology = technologyList.find(t => t.name === tech);

                                            return (
                                                <span key={tech}>
                                                    {technology && <img src={technology.icon} alt="" />}
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <ul className="ctnPortfolioFeatures">
                                        {item.features.slice(0, 3).map(feature => (
                                            <li key={feature}><Check size={15} /><span>{feature}</span></li>
                                        ))}
                                    </ul>

                                    <div className="ctnPortfolioActions">
                                        <button type="button" className="portfolioDetails" onClick={() => setSelectedProject(item)}>
                                            Ver detalles <ArrowRight size={16} />
                                        </button>

                                        {item.url && (
                                            <a className="portfolioVisit" href={item.url} target="_blank" rel="noopener noreferrer">
                                                Ver proyecto <ExternalLink size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {displayedProjects.length === 0 && (
                    <div className="portfolioEmpty">
                        <p>No hay proyectos en esta categoría por el momento.</p>
                        <button type="button" onClick={() => setFilter("Todos")}><X size={15} /> Limpiar filtro</button>
                    </div>
                )}

                {/* {projectsList.some(item => !item.featured) && (
                    <button type="button" className="portfolioViewAll" onClick={() => setShowAll(value => !value)}>
                        {showAll ? "Ver proyectos destacados" : "Ver todos los proyectos"}
                        <ArrowUpRight size={18} />
                    </button>
                )} */}
                
                {filter === "Todos" && projectsList.length > 3 && (
                    <button type="button" className="portfolioViewAll" onClick={() => setShowAll(value => !value)}>
                        {showAll ? "Mostrar menos proyectos" : "Ver todos los proyectos"}
                        <ArrowUpRight size={18} />
                    </button>
                )}

            </div>

            <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}
