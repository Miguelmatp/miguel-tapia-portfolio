
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import { technologyList } from "../../data/technologies";
import "../../styles/skillsModal.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function SkillsModal({ isOpen, onClose }: Props) {
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

            const modal = closeRef.current?.closest(".ctnSkillsModal");
            const elements = Array.from(modal?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled)') || []);
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
    }, [isOpen, onClose]);

    const filtered = technologyList.filter(tech => `${tech.name} ${tech.category}`.toLowerCase().includes(search.toLowerCase().trim()));

    if (!isOpen) return null;

    return createPortal(
        <div className="ctnSkillsOverlay" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="ctnSkillsModal" role="dialog" aria-modal="true" aria-labelledby="skills-modal-title">
                <div className="ctnSkillsModalHeader">
                    <div className="skillsModalTitle">
                        <span>MI STACK TECNOLÓGICO</span>
                        <h2 id="skills-modal-title">Todas las tecnologías</h2>
                        <p>Lenguajes, frameworks y herramientas que utilizo.</p>
                    </div>
                    <button ref={closeRef} type="button" className="skillsModalClose" onClick={onClose} aria-label="Cerrar modal"><X size={22} /></button>
                </div>

                <div className="ctnSkillsModalSearch">
                    <Search size={18} />
                    <input type="search" placeholder="Buscar tecnología..." aria-label="Buscar tecnología" value={search} onChange={e => setSearch(e.target.value)} />
                </div>

                <div className="ctnSkillsModalBody">
                    <div className="ctnSkillsModalGrid">
                        {filtered.map(tech => (
                            <article className="skillsModalCard" key={tech.id}>
                                <div className="skillsModalIcon"><img src={tech.icon} alt="" loading="lazy" /></div>
                                <div className="skillsModalInfo">
                                    <h3>{tech.name}</h3>
                                    <span>{tech.category}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                    {filtered.length === 0 && <p className="skillsModalEmpty">No encontramos tecnologías con ese nombre.</p>}
                </div>
            </div>
        </div>,
        document.body
    );
}
