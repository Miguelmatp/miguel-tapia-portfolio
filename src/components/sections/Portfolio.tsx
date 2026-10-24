
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projectsList } from "../../data/projects";
import PortfolioModal from "../modals/PortfolioModal";
import "../../styles/portfolio.css";

export default function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const featuredProjects = projectsList.filter(item => item.featured);

    return (
        <section className="ctnPortfolio" id="portfolio">
            <div className="ctnContenido">
                <div className="ctnPortfolioTitle">
                    <span className="sectionTag">MI PORTAFOLIO</span>
                    <h2>Proyectos <span>destacados.</span></h2>
                    <p>Una selección de aplicaciones, plataformas y experiencias digitales que he desarrollado.</p>
                </div>

                <div className="ctnPortfolioGrid">
                    {featuredProjects.map(item => (
                        <article className="portfolioCard" key={item.id}>
                            <div className="portfolioImage">
                                <img src={item.image} alt={`Vista del proyecto ${item.title}`} loading="lazy" />
                                <span className="portfolioCategory">{item.category}</span>
                            </div>

                            <div className="ctnPortfolioInfo">
                                <div className="ctnPortfolioDescription">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>

                                <div className="ctnPortfolioTech">
                                    {item.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}
                                </div>

                                {(item.url || item.repository) && (
                                    <div className="ctnPortfolioActions">
                                        {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Ver proyecto</a>}
                                        {item.repository && <a href={item.repository} target="_blank" rel="noopener noreferrer"><img src="/images/icons/github.svg" alt="" /> Código</a>}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <button type="button" className="portfolioViewAll" onClick={() => setModalOpen(true)}>
                    Ver todos los proyectos <ArrowUpRight size={17} />
                </button>
            </div>

            <PortfolioModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
