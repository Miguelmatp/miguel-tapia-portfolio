
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { technologyList } from "../../data/technologies";
import "../../styles/skills.css";

export default function Skills() {
    const [showAll, setShowAll] = useState(false);
    const featuredTechnologies = technologyList.filter(tech => tech.featured);
    const displayedTechnologies = showAll ? technologyList : featuredTechnologies;

    return (
        <section className="ctnSkills" id="skills">
            <div className="ctnContenido">
                <div className="ctnSkillsHeader">
                    <div className="ctnSkillsTitle">
                        {/* <span className="sectionTag">MI STACK TECNOLÓGICO</span> */}
                        <h2>Tecnologías que <span>utilizo.</span></h2>
                        <p>Herramientas y tecnologías con las que desarrollo soluciones digitales.</p>
                    </div>
                </div>

                <div className="ctnSkillsGrid">
                    {displayedTechnologies.map(tech => (
                        <article className="skillCard" key={tech.id}>
                            <div className="skillIcon">
                                <img src={tech.icon} alt="" loading="lazy" />
                            </div>
                            <div className="skillInfo">
                                <h3>{tech.name}</h3>
                                <span>{tech.category}</span>
                            </div>
                        </article>
                    ))}
                </div>

                <button type="button" className="skillsViewAll" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
                    {showAll ? "Mostrar menos" : "Ver todas las tecnologías"}
                    <ArrowUpRight size={17} />
                </button>
            </div>
        </section>
    );
}
