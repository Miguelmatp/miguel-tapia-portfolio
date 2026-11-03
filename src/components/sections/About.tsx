
import { useEffect, useRef, useState } from "react";
import { UserRound, FolderKanban, Code2 } from "lucide-react";
import { technologyList } from "../../data/technologies";
import "../../styles/about.css";

const EXPERIENCE_START = new Date(2023, 9, 17);
const ANIMATION_DURATION = 1500;

const getExperienceYears = () => {
    const today = new Date();
    let years = today.getFullYear() - EXPERIENCE_START.getFullYear();

    if (today.getMonth() < EXPERIENCE_START.getMonth() || (today.getMonth() === EXPERIENCE_START.getMonth() && today.getDate() < EXPERIENCE_START.getDate())) years--;

    return Math.max(0, years);
};

export default function About() {
    const statsRef = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);
    const [counts, setCounts] = useState([1, 1, 1]);
    const BIRTH_DATE = new Date(1999, 8, 17);
    const getAge = (birthDate: Date) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        if (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) age--;

        return age;
    };
    const skills = [
        { icon: UserRound, title: getExperienceYears(), description: "Años de experiencia" },
        { icon: FolderKanban, title: 50, description: "Proyectos desarrollados" },
        { icon: Code2, title: technologyList.length, description: "Tecnologías utilizadas" }
    ];

    useEffect(() => {
        const element = statsRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setStarted(true);
                observer.disconnect();
            }
        }, { threshold: 0.35 });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCounts(skills.map(item => item.title));
            return;
        }

        let frame = 0;
        let startTime: number | null = null;
        let previousCounts = [1, 1, 1];

        const animate = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / ANIMATION_DURATION, 1);

            const nextCounts = skills.map(item => {
                const target = Math.max(1, item.title);
                return Math.min(target, 1 + Math.floor((target - 1) * progress));
            });

            if (nextCounts.some((value, index) => value !== previousCounts[index])) {
                previousCounts = nextCounts;
                setCounts(nextCounts);
            }

            if (progress < 1) frame = requestAnimationFrame(animate);
            else setCounts(skills.map(item => item.title));
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [started]);

    return (
        <section className="ctnAbout" id="about">
            <div className="ctnContenido">
                <div className="ctnAboutInfo">
                    <div className="ctnAboutTitle">
                        <h2>Un poco <span>sobre mí.</span></h2>
                    </div>
                    <div className="ctnInfo">
                        <div className="ctnAboutDescription">
                            <p>¡Hola! Soy <strong>Miguel Ángel Tapia, tengo {getAge(BIRTH_DATE)} años y soy bachiller en Ingeniería de Sistemas Computacionales</strong> por la Universidad Privada del Norte.</p>
                            <p>
                                Inicié mi trayectoria profesional en el desarrollo Front-End, realizando mis prácticas en el Banco de la Nación.
                                Con el tiempo fui adquiriendo experiencia y ampliando mis conocimientos. En mi actual trabajo, en la <strong>Universidad Peruana Cayetano Heredia</strong>,
                                ingresé como Desarrollador Front-End y, gracias a mi crecimiento profesional y los nuevos retos que fui asumiendo,
                                evolucioné hacia el rol de <strong>Desarrollador Full Stack</strong>, participando en el desarrollo de aplicaciones web,
                                sistemas de gestión, integraciones y automatización de procesos.
                            </p>
                        </div>

                        <div className="ctnSubSkills" ref={statsRef}>
                            {skills.map(({ icon: Icon, description }, index) => (
                                <div className="ctnSkill" key={description}>
                                    <div className="ctnImg"><Icon size={27} strokeWidth={1.8} /></div>
                                    <div className="ctnTxt">
                                        <h3>{counts[index]}+</h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
