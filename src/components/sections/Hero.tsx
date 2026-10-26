
import { ArrowUpRight, Download } from "lucide-react";
import { links } from "../../data/links";
import "../../styles/hero.css";
import { useEffect, useState } from "react";
import { technologies } from "../../data/technologies";

export default function Hero() {
    
const getRandomPosition = () => Math.floor(Math.random() * 61) + 20;

const [activeTech, setActiveTech] = useState([
    { index: 0, top: 25 },
    { index: 1, top: 70 }
]);

useEffect(() => {
    if (technologies.length < 3) return;

    const interval = window.setInterval(() => {
        setActiveTech(prev => {
            const available = technologies.map((_, index) => index).filter(index => !prev.some(item => item.index === index));

            const first = available[Math.floor(Math.random() * available.length)];
            const remaining = available.filter(index => index !== first);
            const second = remaining[Math.floor(Math.random() * remaining.length)];

            return [
                { index: first, top: getRandomPosition() },
                { index: second, top: getRandomPosition() }
            ];
        });
    }, 3000);

    return () => window.clearInterval(interval);
}, []);


    return (
        <section className="ctnHero" id="hero">
            <div className="ctnContenido">
                
                <div className="ctnHeroInfo">
                    <div className="ctnHeroText">
                        <span className="heroBadge"><span className="heroStatus"></span> Disponible para nuevos proyectos</span>

                        <div className="ctnHeroTitle">
                            <p className="heroGreeting">Hola, soy</p>
                            <h1>Miguel <span>Tapia.</span></h1>
                            <h2>Desarrollador Web <span>Full Stack</span></h2>
                        </div>

                        <p className="heroDescription">Desarrollo experiencias digitales modernas, interfaces intuitivas y sistemas web funcionales utilizando React, TypeScript, Laravel y otras tecnologías.</p>
                    </div>

                    <div className="ctnHeroButtons">
                        <a href={links.portfolio} className="heroBtnPrimary">Ver proyectos <ArrowUpRight size={18} /></a>
                        <a href={links.cv} className="heroBtnSecondary" target="_blank" rel="noopener noreferrer">Descargar CV <Download size={18} /></a>
                    </div>

                    <div className="ctnHeroSocial">
                        <span>Encuéntrame en</span>
                        <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/images/icons/github.svg" alt="" /></a>
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/images/icons/linkedin.svg" alt="" /></a>
                    </div>
                </div>


                
                <div className="ctnHeroVisual">
                    <div className="heroGlow"></div>
                    <div className="heroImage">
                        <img src="/images/profile/hero.webp" alt="Imagen de presentación de Miguel Tapia" />
                    </div>

                    
                    <div className="heroFloating heroFloatingLeft" key={`left-${activeTech[0].index}-${activeTech[0].top}`} style={{ top: `${activeTech[0].top}%` }}>
                        {technologies[activeTech[0].index]}
                    </div>

                    <div className="heroFloating heroFloatingRight" key={`right-${activeTech[1].index}-${activeTech[1].top}`} style={{ top: `${activeTech[1].top}%` }}>
                        {technologies[activeTech[1].index]}
                    </div>
                </div>
            </div>
        </section>
    );
}
