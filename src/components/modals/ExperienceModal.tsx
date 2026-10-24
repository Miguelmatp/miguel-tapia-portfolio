
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BriefcaseBusiness, CalendarDays, Check, X } from "lucide-react";
import { experienceList } from "../../data/experience";
import "../../styles/experienceModal.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function ExperienceModal({ isOpen, onClose }: Props) {
    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="ctnExperienceOverlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="ctnExperienceModal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title">
                <div className="ctnExperienceModalHeader">
                    <div className="experienceModalTitle">
                        <span className="sectionTag">MI TRAYECTORIA</span>
                        <h2 id="experience-modal-title">Experiencia profesional</h2>
                        <p>Responsabilidades, proyectos y tecnologías utilizadas.</p>
                    </div>
                    <button type="button" className="experienceModalClose" onClick={onClose} aria-label="Cerrar modal"><X size={22} /></button>
                </div>

                <div className="ctnExperienceModalBody">
                    {experienceList.map(item => (
                        <article className="experienceModalCard" key={item.id}>
                            <div className="ctnExperienceModalCompany">
                                <div className="experienceModalIcon"><BriefcaseBusiness size={24} /></div>
                                <div className="experienceModalCompanyInfo">
                                    <span>{item.company}</span>
                                    <h3>{item.position}</h3>
                                    {item.period && <p><CalendarDays size={14} /> {item.period}</p>}
                                </div>
                            </div>

                            <p className="experienceModalDescription">{item.description}</p>

                            <div className="ctnExperienceResponsibilities">
                                <h4>Principales responsabilidades</h4>
                                <ul>
                                    {item.responsibilities.map((responsibility, index) => (
                                        <li key={index}><Check size={16} /> <span>{responsibility}</span></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ctnExperienceTech">
                                {item.technologies.map(tech => <span key={tech}>{tech}</span>)}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
}
