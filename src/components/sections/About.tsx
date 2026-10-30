
import { BriefcaseBusiness, Code, Code2, FolderKanban, Rocket, User } from "lucide-react";
import "../../styles/about.css";

const highlights = [
    {
        icon: Code2,
        title: "Desarrollo web",
        description: "Interfaces modernas y sistemas funcionales."
    },
    {
        icon: BriefcaseBusiness,
        title: "Soluciones digitales",
        description: "Integraciones y automatizaciones."
    },
    {
        icon: Rocket,
        title: "Aprendizaje continuo",
        description: "Siempre explorando nuevas tecnologías."
    }
];
const skills=[
    {
        icon: User,
        title: "2",
        description: "Años de experiencia"

    },{
        icon: FolderKanban,
        title: "50",
        description: "Proyectos desarrollados"

    },{
        icon: Code,
        title: "2",
        description: "Tecnologias dominadas"

    },
];

export default function About() {
    return (
        <section className="ctnAbout" id="about">
            <div className="ctnContenido">
                <div className="ctnAboutInfo">
                    <div className="ctnAboutTitle">
                        {/* <span className="sectionTag">CONÓCEME</span> */}
                        <h2>Un poco <span>sobre mí.</span></h2>
                    </div>

                    <div className="ctnAboutDescription">
                        <p>Soy desarrollador web enfocado en crear experiencias digitales modernas, eficientes y fáciles de utilizar.</p>
                        <p>Trabajo con tecnologías frontend y backend, desarrollando desde landing pages hasta plataformas de gestión, integraciones y aplicaciones web completas.</p>
                    </div>
                    <div className="ctnSkills">
                        {skills.map(({ icon: Icon, title, description }) => (
                            <div className="ctnSkill" key={title}>
                                <div className="ctnImg">
                                    <Icon size={30} strokeWidth={1.8} />
                                </div>
                                <div className="ctnTxt">
                                    <h3>{title}+</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="ctnAboutHighlights">
                    {highlights.map(({ icon: Icon, title, description }) => (
                        <article className="aboutCard" key={title}>
                            <div className="aboutIcon"><Icon size={22} strokeWidth={1.8} /></div>
                            <div className="aboutCardInfo">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
