
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowUpRight, Award, BookOpen, CalendarDays, Clock3, GraduationCap, MapPin } from "lucide-react";
import { educationList } from "../../data/education";
// import EducationModal from "../modals/EducationModal";
import "../../styles/education.css";

type EducationFilter = "Todos" | "Educación" | "Certificaciones" | "Cursos";

const filters = [
    { label: "Todos", icon: null },
    { label: "Educación", icon: GraduationCap },
    // { label: "Certificaciones", icon: Award },
    { label: "Cursos", icon: BookOpen }
] as const;

export default function Education() {
    const [filter, setFilter] = useState<EducationFilter>("Todos");
    // const [modalOpen, setModalOpen] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const filterCounts = {
        Todos: educationList.length,
        Educación: educationList.filter(item => item.type === "education").length,
        Certificaciones: educationList.filter(item => item.type === "course" && item.kind === "certification").length,
        Cursos: educationList.filter(item => item.type === "course" && item.kind !== "certification").length
    };
    
    const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

    const handleDragStart = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        if ((e.target as HTMLElement).closest("a, button")) return;

        const slider = sliderRef.current;
        if (!slider) return;

        dragRef.current = { active: true, startX: e.clientX, scrollLeft: slider.scrollLeft, moved: false };
        slider.setPointerCapture(e.pointerId);
        slider.classList.add("dragging");
    };

    const handleDragMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        if (!slider || !dragRef.current.active) return;

        const distance = e.clientX - dragRef.current.startX;
        if (Math.abs(distance) > 5) dragRef.current.moved = true;

        slider.scrollLeft = dragRef.current.scrollLeft - distance;
    };

    const handleDragEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        if (!slider || !dragRef.current.active) return;

        dragRef.current.active = false;
        slider.classList.remove("dragging");
        if (slider.hasPointerCapture(e.pointerId)) slider.releasePointerCapture(e.pointerId);
    };

    const handleDragCancel = () => {
        dragRef.current.active = false;
        sliderRef.current?.classList.remove("dragging");
    };

    const handleDragClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragRef.current.moved) return;
        e.preventDefault();
        e.stopPropagation();
        dragRef.current.moved = false;
    };


    const displayedEducation = educationList.filter(item => {
        if (filter === "Todos") return true;
        if (filter === "Educación") return item.type === "education";
        if (filter === "Certificaciones") return item.type === "course" && item.kind === "certification";
        return item.type === "course" && item.kind !== "certification";
    });

    useEffect(() => {
        if (sliderRef.current) sliderRef.current.scrollLeft = 0;
    }, [filter]);


    return (
        <section className="ctnEducation" id="education">
            <div className="ctnContenido">
                <div className="ctnEducationTitle">
                    <div className="ctnEducationHeading">
                        <h2>Educación y <span>certificaciones.</span></h2>
                    </div>
                    <p>Mi formación académica y aprendizaje continuo en desarrollo web y tecnología.</p>
                </div>

                <div className="ctnEducationFilters" role="group" aria-label="Filtrar formación académica">
                    {filters.map(({ label, icon: Icon }) => (
                        <button type="button" key={label} className={filter === label ? "active" : ""} aria-pressed={filter === label} onClick={() => setFilter(label)}>
                            {Icon && <Icon size={18} strokeWidth={1.8} />}
                            {label} <span className="educationFilterCount">({filterCounts[label]})</span>
                        </button>
                    ))}
                </div>

                <div className="ctnEducationGrid"
                    ref={sliderRef}
                    role="region"
                    aria-roledescription="carrusel"
                    aria-label={`Formación académica: ${filter}`}
                    tabIndex={0}
                    onPointerDown={handleDragStart}
                    onPointerMove={handleDragMove}
                    onPointerUp={handleDragEnd}
                    onPointerCancel={handleDragCancel}
                    onLostPointerCapture={handleDragCancel}
                    onClickCapture={handleDragClick}
                >

                    {displayedEducation.map(item => {
                        const isEducation = item.type === "education";
                        const isCertification = !isEducation && item.kind === "certification";
                        const Icon = isEducation ? GraduationCap : isCertification ? Award : BookOpen;

                        return (
                            <article className="educationCard" key={item.id}>
                                <div className="educationImage">
                                    {item.image ? <img src={item.image} alt={item.institution} loading="lazy" /> : <Icon size={52} strokeWidth={1.4} />}
                                </div>

                                <div className="educationInfo">
                                    <div className="ctnEducationMeta">
                                        <span className="educationCategory">
                                            <Icon size={15} />
                                            {isEducation ? "Educación superior" : isCertification ? "Certificación" : "Curso / Capacitación"}
                                        </span>
                                        {item.level && <span className="educationCategory"><GraduationCap size={15} /> {item.level}</span>}
                                        {item.hours && <span className="educationPeriod"><Clock3 size={14} /> {item.hours} horas</span>}
                                    </div>

                                    <h3>{item.title}</h3>
                                    <p>{item.institution}</p>

                                    <div className="ctnEducationDetails">
                                        <div className="subItem">
                                            <span><CalendarDays size={15} /> {item.date || item.period}</span>
                                            {item.location && (
                                                item.locationUrl
                                                    ? <a href={item.locationUrl} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> {item.location}</a>
                                                    : <span><MapPin size={15} /> {item.location}</span>
                                            )}
                                        </div>
                                    </div>

                                    {item.document && (
                                        <a href={item.document} target="_blank" rel="noopener noreferrer" className="educationDocument">
                                            Ver {isEducation ? "constancia" : "certificado"} <ArrowUpRight size={17} />
                                        </a>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>

                {displayedEducation.length === 0 && (
                    <p className="educationEmpty">Todavía no hay registros en esta categoría.</p>
                )}

                {/* <button type="button" className="educationViewAll" onClick={() => setModalOpen(true)}>
                    <BookOpen size={18} /> Ver toda mi formación <ArrowUpRight size={18} />
                </button> */}
            </div>
            <p className="experienciaHint">Desliza horizontalmente para explorar mi trayectoria</p>
            {/* <EducationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}
        </section>
    );
}
