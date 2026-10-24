
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { links, navigationLinks } from "../../data/links";
import "../../styles/footer.css";

export default function Footer() {
    return (
        <footer className="ctnFooter">
            <div className="ctnContenido">
                <div className="ctnFooterMain">
                    <div className="ctnFooterBrand">
                        <a href={links.home} className="footerLogo">
                            <span>MT<span>.</span></span>
                            <strong>Miguel Tapia</strong>
                        </a>

                        <p>Desarrollador Web Full Stack. Creando experiencias digitales modernas, funcionales y escalables.</p>
                    </div>

                    <div className="ctnFooterLinks">
                        <h3>Enlaces rápidos</h3>
                        <nav aria-label="Navegación del pie de página">
                            {navigationLinks.map(item => (
                                <a href={item.href} key={item.href}>{item.label}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="ctnFooterContact">
                        <h3>Contacto</h3>
                        <div className="ctnFooterContactList">
                            <a href={links.phone}><Phone size={17} /> <span>+51 937 311 762</span></a>
                            <a href={links.email}><Mail size={17} /> <span>migueltapia1722@gmail.com</span></a>
                            <div className="footerLocation"><MapPin size={17} /> <span>Villa El Salvador, Lima, Perú</span></div>
                        </div>
                    </div>

                    <div className="ctnFooterSocial">
                        <h3>Redes sociales</h3>
                        <p>Conectemos y creemos algo increíble.</p>
                        <div className="footerSocialLinks">
                            {links.github && (
                                <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                                    <img src="/images/icons/github.svg" alt="" />
                                </a>
                            )}
                            {links.linkedin && (
                                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                                    <img src="/images/icons/linkedin.svg" alt="" />
                                </a>
                            )}
                        </div>

                        <a href={links.email} className="footerContactLink">Escríbeme <ArrowUpRight size={16} /></a>
                    </div>
                </div>

                <div className="ctnFooterBottom">
                    <p>© {new Date().getFullYear()} Miguel Tapia. Todos los derechos reservados.</p>
                    <p>Diseñado y desarrollado con React + TypeScript</p>
                </div>
            </div>
        </footer>
    );
}
