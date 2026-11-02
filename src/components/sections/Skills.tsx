
import { useState } from "react";
import { technologyList, type TechnologyCategory } from "../../data/technologies";
import "../../styles/skills.css";

type SkillFilter = "Todos" | "Frontend" | "Backend" | "Base de datos" | "Herramientas" | "Diseño";

const filters: SkillFilter[] = ["Todos", "Frontend", "Backend", "Base de datos", "Herramientas", "Diseño"];

const matchesCategory = (category: TechnologyCategory, filter: SkillFilter) => {
    if (filter === "Todos") return true;
    if (filter === "Herramientas") return ["Herramientas", "CMS", "Control de versiones"].includes(category);
    return category === filter;
};

export default function Skills() {
    const [filter, setFilter] = useState<SkillFilter>("Todos");
    const displayedTechnologies = technologyList.filter(tech => matchesCategory(tech.category, filter));

    return (
        <section className="ctnSkills" id="skills">
            <div className="ctnContenido">
                <div className="ctnSkillsHeader">
                    <div className="ctnSkillsTitle">
                        <h2>Tecnologías que <span>utilizo.</span></h2>
                        <p>Herramientas y tecnologías con las que desarrollo soluciones digitales.</p>
                    </div>
                </div>

                <div className="ctnSkillsFilters" role="group" aria-label="Filtrar tecnologías">
                    {filters.map(item => (
                        <button type="button" key={item} className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>
                    ))}
                </div>

                <div className="ctnSkillsGrid">
                    {displayedTechnologies.map(tech => (
                        <article className="skillCard" key={tech.id}>
                            <div className="skillIcon"><img src={tech.icon} alt="" loading="lazy" /></div>
                            <div className="skillInfo">
                                <h3>{tech.name}</h3>
                                <span>{tech.category}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
