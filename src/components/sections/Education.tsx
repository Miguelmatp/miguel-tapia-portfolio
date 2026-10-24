
import { useState } from "react";
import { ArrowUpRight, Award, CalendarDays, Clock3, GraduationCap, MapPin } from "lucide-react";
import { educationList } from "../../data/education";
import EducationModal from "../modals/EducationModal";
import "../../styles/education.css";

export default function Education() {
    const [modalOpen, setModalOpen] = useState(false);
    const featuredEducation = educationList.filter(item => item.featured);

    return (
        <section className="ctnEducation" id="education">
            <div className="ctnContenido">
                <div className="ctnEducationTitle">
                    <span className="sectionTag">MI FORMACIÓN</span>
                    <h2>Educación y <span>certificaciones.</span></h2>
                    <p>Mi formación académica y aprendizaje continuo en desarrollo web y tecnología.</p>
                </div>

                <div className="ctnEducationGrid">
                    {featuredEducation.map(item => {
                        const Icon = item.type === "education" ? GraduationCap : Award;

                        return (
                            <article className="educationCard" key={item.id}>
                                <div className="educationIcon"><Icon size={25} strokeWidth={1.8} /></div>

                                <div className="educationInfo">
                                    <div className="ctnEducationMeta">
                                        <span className="educationCategory">{item.type === "education" ? "EDUCACIÓN SUPERIOR" : "CURSO / CERTIFICACIÓN"}</span>
                                        {item.hours && <span className="educationPeriod"><Clock3 size={13} /> {item.hours} horas</span>}
                                    </div>

                                    <h3>{item.title}</h3>
                                    <p>{item.institution}</p>
                                    {item.level && <span className="educationLevel">{item.level}</span>}

                                    <div className="ctnEducationDetails">
                                        <span><CalendarDays size={14} /> {item.date || item.period}</span>
                                        {item.location && item.locationUrl && <a href={item.locationUrl} target="_blank" rel="noopener noreferrer"><MapPin size={14} /> {item.location}</a>}
                                    </div>

                                    <a href={item.document} target="_blank" rel="noopener noreferrer" className="educationDocument">
                                        Ver {item.type === "education" ? "constancia" : "certificado"} <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <button type="button" className="educationViewAll" onClick={() => setModalOpen(true)}>
                    Ver toda mi formación <ArrowUpRight size={17} />
                </button>
            </div>

            <EducationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
