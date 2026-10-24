
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Award, BookOpen, CalendarDays, Clock3, GraduationCap, MapPin, X } from "lucide-react";
import { educationList } from "../../data/education";
import "../../styles/educationModal.css";

interface EducationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type FilterType = "all" | "education" | "course";

export default function EducationModal({ isOpen, onClose }: EducationModalProps) {
    const [filter, setFilter] = useState<FilterType>("all");
    const totalEducation = educationList.filter(item => item.type === "education").length;
    const totalCourses = educationList.filter(item => item.type === "course").length;

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const filteredEducation = educationList.filter(item => filter === "all" || item.type === filter);

    return createPortal(
        <div className="ctnEducationOverlay" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="ctnEducationModal" role="dialog" aria-modal="true" aria-labelledby="education-modal-title">
                <div className="ctnEducationModalHeader">
                    <div className="educationModalTitle">
                        <span className="sectionTag">MI FORMACIÓN</span>
                        <h2 id="education-modal-title">Estudios y certificaciones</h2>
                        <p>Explora mi trayectoria académica y formación complementaria.</p>
                    </div>
                    <button type="button" className="educationModalClose" onClick={onClose} aria-label="Cerrar modal"><X size={22} /></button>
                </div>

                
                <div className="ctnEducationModalFilters">
                    <button type="button" className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
                        Todos ({educationList.length})
                    </button>
                    <button type="button" className={filter === "education" ? "active" : ""} onClick={() => setFilter("education")}>
                        <GraduationCap size={16} /> Estudios ({totalEducation})
                    </button>
                    <button type="button" className={filter === "course" ? "active" : ""} onClick={() => setFilter("course")}>
                        <BookOpen size={16} /> Cursos ({totalCourses})
                    </button>
                </div>


                <div className="ctnEducationModalBody">
                    <div className="ctnEducationModalGrid">
                        {filteredEducation.map(item => {
                            const Icon = item.type === "education" ? GraduationCap : Award;

                            return (
                                <article className="educationModalCard" key={item.id}>
                                    <div className="educationModalIcon"><Icon size={22} strokeWidth={1.8} /></div>
                                    <div className="educationModalInfo">
                                        <div className="educationModalMeta">
                                            <span>{item.type === "education" ? "EDUCACIÓN SUPERIOR" : "CURSO / CERTIFICACIÓN"}</span>
                                            {item.hours && <span className="educationModalHours"><Clock3 size={13} /> {item.hours} horas</span>}
                                        </div>

                                        <h3>{item.title}</h3>
                                        <p>{item.institution}</p>
                                        {item.level && <span className="educationModalLevel">{item.level}</span>}

                                        <div className="educationModalDetails">
                                            <span><CalendarDays size={14} /> {item.date || item.period}</span>
                                            {item.location && item.locationUrl && (
                                                <a href={item.locationUrl} target="_blank" rel="noopener noreferrer"><MapPin size={14} /> {item.location}</a>
                                            )}
                                        </div>

                                        <a className="educationModalDocument" href={item.document} target="_blank" rel="noopener noreferrer">
                                            Ver {item.type === "education" ? "constancia" : "certificado"} <ArrowUpRight size={15} />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
