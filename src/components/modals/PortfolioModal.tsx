
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Check, ExternalLink, Expand, FileText, Layers3, Monitor, X, Code } from "lucide-react";
import type { ProjectItem } from "../../data/projects";
import { technologyList } from "../../data/technologies";
import "../../styles/portfolioModal.css";

interface Props {
    project: ProjectItem | null;
    onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: Props) {
    const [activeImage, setActiveImage] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const closeRef = useRef<HTMLButtonElement>(null);
    const projectId = project?.id;
    const images = project?.images?.length ? project.images : project ? [project.image] : [];
    const currentImage = images[activeImage] || images[0];

    useEffect(() => {
        setActiveImage(0);
        setExpanded(false);
    }, [projectId]);

    useEffect(() => {
        if (!project) return;

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (expanded) setExpanded(false);
                else onClose();
                return;
            }

            if (event.key !== "Tab") return;
            const modal = closeRef.current?.closest(".ctnPortfolioModal");
            const elements = Array.from(modal?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled), [tabindex="0"]') || []).filter(el => el.getClientRects().length > 0);
            if (!elements.length) return;

            const first = elements[0];
            const last = elements[elements.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        };

        document.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKey);
            previousFocus?.focus();
        };
    }, [project, expanded, onClose]);

    const changeImage = (direction: number) => {
        if (!images.length) return;
        setActiveImage(value => (value + direction + images.length) % images.length);
    };

    if (!project) return null;

    return createPortal(
        <div className="ctnPortfolioOverlay" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="ctnPortfolioModal" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title">
                <button ref={closeRef} type="button" className="portfolioModalClose" onClick={onClose} aria-label="Cerrar detalles"><X size={22} /></button>

                <div className="ctnPortfolioModalBody">
                    <div className="ctnPortfolioModalLeft">
                        <div className="portfolioModalHeading">
                            <span className="portfolioModalCategory"><Monitor size={16} /> {project.category}</span>
                            <h2 id="portfolio-modal-title">{project.title}</h2>
                        </div>

                        <div className="portfolioGallery">
                            <div className="portfolioGalleryMain">
                                <img src={currentImage} alt={`${project.title}, captura ${activeImage + 1}`} />

                                <button type="button" className="portfolioExpand" onClick={() => setExpanded(true)} aria-label="Ampliar imagen">
                                    <Expand size={20} />
                                </button>

                                {images.length > 1 && (
                                    <>
                                        <button type="button" className="portfolioGalleryArrow prev" onClick={() => changeImage(-1)} aria-label="Imagen anterior"><ArrowLeft size={20} /></button>
                                        <button type="button" className="portfolioGalleryArrow next" onClick={() => changeImage(1)} aria-label="Imagen siguiente"><ArrowRight size={20} /></button>
                                    </>
                                )}
                            </div>

                            {images.length > 1 && (
                                <div className="portfolioGalleryThumbs">
                                    {images.map((image, index) => (
                                        <button type="button" key={`${image}-${index}`} className={activeImage === index ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={`Ver captura ${index + 1}`} aria-pressed={activeImage === index}>
                                            <img src={image} alt="" loading="lazy" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="ctnPortfolioModalRight">
                        <div className="portfolioModalPanel">
                            <div className="portfolioModalCompany">
                                <div>
                                    <Code size={20}/>
                                    <h3>Tecnologías</h3>
                                </div>
                                <div className="portfolioModalTechList">
                                    {project.technologies.map(tech => {
                                        const technology = technologyList.find(item => item.name.toLowerCase() === tech.toLowerCase());

                                        return (
                                            <span key={tech}>
                                                {technology && <img src={technology.icon} alt="" loading="lazy" />}
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            
                            {project.company && (
                                <div className="portfolioModalCompany">
                                    <div>
                                        <BriefcaseBusiness size={20}/>
                                        <h3>Empresa / Área</h3>
                                    </div>
                                    <p>{project.company}</p>
                                </div>
                            )}

                            <div className="portfolioModalCompany ">
                                <div>
                                    <FileText size={21} />
                                    <h3>Descripción del proyecto</h3>
                                </div>
                                <p>{project.detail}</p>
                            </div>

                            <div className="portfolioModalCompany">
                                <div>
                                    <Layers3 size={20} />
                                    <h3> Funcionalidades principales</h3>
                                </div>
                                <ul>
                                    {project.features.map(feature => (
                                        <li key={feature}><Check size={17} /><span>{feature}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {(project.url || project.repository) && (
                            <div className="portfolioModalActions">
                                {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolioVisit"><ExternalLink size={17} /> Ver proyecto</a>}
                                {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="portfolioCode"><img src="/images/icons/github.svg" alt="" /> Ver código</a>}
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>

            {expanded && (
                <div className="portfolioLightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada" onMouseDown={event => { if (event.target === event.currentTarget) setExpanded(false); }}>
                    <button type="button" className="portfolioLightboxClose" onClick={() => setExpanded(false)} aria-label="Cerrar imagen ampliada"><X size={23} /></button>
                    {images.length > 1 && <button type="button" className="portfolioLightboxPrev" onClick={() => changeImage(-1)} aria-label="Anterior"><ArrowLeft size={24} /></button>}
                    <img src={currentImage} alt={`${project.title}, imagen ampliada`} />
                    {images.length > 1 && <button type="button" className="portfolioLightboxNext" onClick={() => changeImage(1)} aria-label="Siguiente"><ArrowRight size={24} /></button>}
                </div>
            )}
        </div>,
        document.body
    );
}
