
import { ArrowUpRight, MapPin } from "lucide-react";
import { experienceList } from "../../data/experience";
import "../../styles/experience.css";
import { Check } from "lucide-react";
// import { useRef } from "react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

function Tecnologias({ technologies }: { technologies: string[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [overflow, setOverflow] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        const verificar = () => setOverflow(content.scrollWidth > container.clientWidth + 1);
        const observer = new ResizeObserver(verificar);

        observer.observe(container);
        observer.observe(content);
        verificar();

        return () => observer.disconnect();
    }, [technologies]);

    return (
        <div className={`experienciaTecnologias ${overflow ? "scrollActivo" : ""}`} ref={containerRef}>
            <div className="experienciaTecnologiasTrack">
                <div className="experienciaTecnologiasGrupo" ref={contentRef}>
                    {technologies.map((tecnologia) => (
                        <span key={tecnologia} title={tecnologia}>
                            <img src={`/images/icons/technologies/${tecnologia.toLowerCase()}.svg`} alt={tecnologia} loading="lazy" draggable={false} />
                        </span>
                    ))}
                </div>

                {overflow && (
                    <div className="experienciaTecnologiasGrupo" aria-hidden="true">
                        {technologies.map((tecnologia) => (
                            <span key={tecnologia} title={tecnologia}>
                                <img src={`/images/icons/technologies/${tecnologia.toLowerCase()}.svg`} alt="" loading="lazy" draggable={false} />
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (e.button !== 0 || !scrollRef.current) return;
        dragRef.current = { active: true, startX: e.clientX, scrollLeft: scrollRef.current.scrollLeft, moved: false };
        scrollRef.current.style.scrollSnapType = "none";
        scrollRef.current.style.scrollBehavior = "auto";
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!dragRef.current.active || !scrollRef.current) return;
        const distance = e.clientX - dragRef.current.startX;
        if (Math.abs(distance) > 5) dragRef.current.moved = true;
        if (!dragRef.current.moved) return;
        scrollRef.current.scrollLeft = dragRef.current.scrollLeft - distance;
    };

    const handleMouseUp = () => {
        if (!dragRef.current.active) return;
        dragRef.current.active = false;
        if (scrollRef.current) {
            scrollRef.current.style.scrollSnapType = "";
            scrollRef.current.style.scrollBehavior = "";
        }
    };

    const handleClickCapture = (e: MouseEvent<HTMLDivElement>) => {
        if (!dragRef.current.moved) return;
        e.preventDefault();
        e.stopPropagation();
        dragRef.current.moved = false;
    };
    return (
        <section className="experiencia" id="experiencia">
            <div className="experienciaContainer">
                <div className="experienciaHeader">
                    <div className="experienciaHeading">
                        {/* <span className="experienciaLabel">MI TRAYECTORIA</span> */}
                        <h2>Experiencia <span>profesional.</span></h2>
                        <p>Experiencia desarrollando soluciones digitales y aplicaciones web en entornos reales.</p>
                    </div>
                </div>

                {/* <div className="experienciaScroll" aria-label="Trayectoria profesional"> */}
                <div
                    ref={scrollRef}
                    className="experienciaScroll"
                    aria-label="Trayectoria profesional"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onClickCapture={handleClickCapture}
                >
                    {experienceList.map((item) => (
                        <div className="experienciaItem" key={item.id}>
                            <div className={`experienciaTimeline ${item.period.includes("Actualidad") ? "actual" : ""}`}>
                                <span className={`experienciaDot ${item.period.includes("Actualidad") ? "active" : ""}`} />
                                <span className="experienciaFecha">{item.period}</span>
                            </div>

                            <article className="experienciaCard">
                                <div className={`experienciaImagen ${item.certificate ? "certificado" : ""}`}>
                                    {item.image && <img src={item.image} alt={item.company} loading="lazy" />}

                                    {item.certificate && (
                                        <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="experienciaCertificado">
                                            Ver certificado <ArrowUpRight size={24} />
                                        </a>
                                    )}
                                </div>

                                <div className="experienciaInfo">
                                    <div className="experienciaTop">
                                        <span className="experienciaEmpresa">{item.company}</span>
                                        <h3>{item.position}</h3>
                                        <div className="experienciaUbicacion">
                                            <MapPin size={15} />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                    <div className="ctnInfo">
                                        <p className="experienciaDescripcion">{item.description}</p>
                                        <ul className="experienciaResponsabilidades">
                                            {item.responsibilities.map((responsibility, index) => (
                                                <li key={index}>
                                                    <Check size={15} />
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* <div className="experienciaTecnologias">
                                        {item.technologies.map((tecnologia) => (
                                            <span key={tecnologia} title={tecnologia}>
                                                <img src={`/images/icons/technologies/${tecnologia.toLowerCase()}.svg`} alt={tecnologia} loading="lazy" draggable={false} />
                                            </span>
                                        ))}
                                    </div> */}
                                    <Tecnologias technologies={item.technologies} />
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <p className="experienciaHint">Desliza horizontalmente para explorar mi trayectoria</p>
            </div>
        </section>
    );
}
