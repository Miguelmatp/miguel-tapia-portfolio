
import { ArrowUpRight, BriefcaseBusiness, Code2, Rocket } from "lucide-react";
import { links } from "../../data/links";
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

export default function About() {
    return (
        <section className="ctnAbout" id="about">
            <div className="ctnContenido">
                <div className="ctnAboutInfo">
                    <div className="ctnAboutTitle">
                        <span className="sectionTag">CONÓCEME</span>
                        <h2>Un poco <span>sobre mí.</span></h2>
                    </div>

                    <div className="ctnAboutDescription">
                        <p>Soy desarrollador web enfocado en crear experiencias digitales modernas, eficientes y fáciles de utilizar.</p>
                        <p>Trabajo con tecnologías frontend y backend, desarrollando desde landing pages hasta plataformas de gestión, integraciones y aplicaciones web completas.</p>
                    </div>

                    <a href={links.portfolio} className="aboutLink">
                        Explorar mis proyectos <ArrowUpRight size={18} />
                    </a>
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
