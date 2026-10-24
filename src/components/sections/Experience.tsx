
import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, MapPin,FileDown } from "lucide-react";
import { experienceList } from "../../data/experience";
import ExperienceModal from "../modals/ExperienceModal";
import "../../styles/experience.css";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);
    const featuredExperience = experienceList.filter(item => item.featured);

    return (
        <section className="ctnExperience" id="experience">
            <div className="ctnContenido">
                <div className="ctnExperienceTitle">
                    <span className="sectionTag">MI TRAYECTORIA</span>
                    <h2>Experiencia <span>profesional.</span></h2>
                    <p>Experiencia desarrollando soluciones digitales y aplicaciones web.</p>
                </div>

                <div className="ctnExperienceGrid">
                    {featuredExperience.map(item => (
                        <article className="experienceCard" key={item.id}>
                            <div className="ctnExperienceCardHeader">
                                <div className="experienceIcon">
                                    <BriefcaseBusiness size={24} strokeWidth={1.8} />
                                </div>

                                <div className="ctnExperienceInfo">
                                    <span className="experienceCompany">{item.company}</span>
                                    <h3>{item.position}</h3>
                                    <div className="ctnExperienceDetails">
                                        <span className="experiencePeriod"><CalendarDays size={14} /> {item.period}</span>
                                        <span className="experienceLocation"><MapPin size={14} /> {item.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="experienceDescription">{item.description}</p>

                            <div className="ctnExperienceTech">
                                {item.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}
                            </div>
                            {item.certificate && (
                                <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="experienceCertificate">
                                    Ver certificado <FileDown size={16} />
                                </a>
                            )}
                        </article>
                    ))}
                </div>

                <button type="button" className="experienceViewAll" onClick={() => setModalOpen(true)}>
                    Ver toda mi experiencia <ArrowUpRight size={17} />
                </button>
            </div>

            <ExperienceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
