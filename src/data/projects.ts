import { landingPagesList } from "./landingPages";
export type ProjectCategory = "Sistema web" | "Landing page" | "Aplicación" | "Integración";

export interface ProjectItem {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    detail: string;
    image: string;
    images: string[];
    technologies: string[];
    features: string[];
    period?: string;
    company?: string;
    role?: string;
    url?: string;
    repository?: string;
    featured: boolean;
}

export const projectsList: ProjectItem[] = [
    {
        id: "own-media",
        title: "Own Media",
        category: "Sistema web",
        description: "Plataforma de gestión de presupuestos, campañas, envíos y reportes.",
        detail: "Sistema web desarrollado para centralizar la gestión de campañas, presupuestos y comunicaciones del área comercial. Incluye módulos de administración, seguimiento de envíos, filtros, visualización de reportes y métricas, facilitando el control de las operaciones y el análisis de resultados.",
        image: "/images/projects/own-media.webp",
        images: [
            "/images/projects/own-media.webp"
        ],
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        features: [
            "Gestión de campañas y presupuestos",
            "Seguimiento de envíos",
            "Reportes y métricas por campaña",
            "Filtros y consultas de información"
        ],
        period: "2025 - Actualidad",
        company: "Universidad Peruana Cayetano Heredia - Marketing Digital",
        role: "Desarrollador Full Stack",
        featured: true
    },
    {
        id: "ingresantes",
        title: "Sistema de Ingresantes",
        category: "Sistema web",
        description: "Sistema de seguimiento de postulantes, gestión de leads y asesores.",
        detail: "Aplicación web orientada a centralizar la información y el seguimiento de postulantes e ingresantes. Permite gestionar leads, asesores, programas académicos, convocatorias y estados de los procesos. Incluye funcionalidades frontend y backend, consultas de datos, filtros e integraciones para optimizar la gestión y el seguimiento de la información.",
        image: "/images/projects/ingresantes-1.webp",
        images: [
            "/images/projects/ingresantes-1.webp",
            "/images/projects/ingresantes-2.webp"
        ],
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        features: [
            "Registro y seguimiento de postulantes",
            "Gestión de leads y asesores",
            "Consulta de programas y convocatorias",
            "Filtros y seguimiento de estados"
        ],
        period: "2025 - Actualidad",
        company: "Universidad Peruana Cayetano Heredia",
        role: "Desarrollador Full Stack",
        featured: true
    },
    {
        id: "bancoNacion",
        title: "Portal Web - Banco de la Nación",
        category: "Landing page",
        description: "Rediseño y migración de más de 200 páginas del portal institucional, modernizando y optimizando la experiencia de navegación.",
        detail: "Participé en el diseño, desarrollo y migración de más de 200 páginas del portal institucional del Banco de la Nación, transformando interfaces tradicionales en diseños modernos, responsive y adaptables a distintos dispositivos. Implementé mejoras en la estructura visual, organización de contenidos, accesibilidad y buenas prácticas de SEO, contribuyendo a una navegación más intuitiva y a mejorar las condiciones técnicas para el posicionamiento del sitio en buscadores.",
        image: "/images/projects/bancoNacion-1.webp",
        images: [
            "/images/projects/bancoNacion-1.webp",
            "/images/projects/bancoNacion-2.webp"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "jquery", "ASP"],
        features: [
            "Rediseño y migración de más de 200 páginas web",
            "Diseño moderno y adaptable a dispositivos móviles",
            "Optimización de estructura y buenas prácticas SEO",
            "Mejoras de navegación y experiencia de usuario",
            "Maquetación e implementación de interfaces web",
            "Actualización y organización de contenidos institucionales"
        ],
        period: "2023 - 2024",
        company: "Banco de la Nación",
        role: "Practicante Profesional de Ingeniería de Sistemas",
        url: "https://www.bn.com.pe/",
        featured: true
    },

    {
        id: "restaurant",
        title: "Sistema Restaurante",
        category: "Sistema web",
        description: "Sistema de gestión de mesas, pedidos, cuentas y pagos con control de cocina.",
        detail: "Sistema web desarrollado para administrar las operaciones de un restaurante desde una plataforma centralizada. Permite gestionar mesas, registrar pedidos, enviar comandas a cocina, controlar estados de atención, dividir cuentas entre clientes y realizar pagos parciales mediante distintos métodos. También incluye herramientas para consultar el historial de ventas y generar reportes.",
        image: "/images/projects/restaurant-1.webp",
        images: [
            "/images/projects/restaurant-1.webp",
            "/images/projects/restaurant-2.webp",
            "/images/projects/restaurant-3.webp",
            "/images/projects/restaurant-4.webp",
            "/images/projects/restaurant-5.webp",
            "/images/projects/restaurant-6.webp",
            "/images/projects/restaurant-7.webp",
            "/images/projects/restaurant-8.webp"
        ],
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        features: [
            "Gestión de mesas y pedidos",
            "Comandas y control de cocina",
            "Cuentas y pagos parciales",
            "Historial y reportes de ventas"
        ],
        role: "Desarrollador Full Stack",
        featured: true
    },
    {
        id: "flavia",
        title: "Invitación XV - Flavia",
        category: "Landing page",
        description: "Invitación digital interactiva con animaciones, música y diseño personalizado.",
        detail: "Invitación digital personalizada para una celebración de quince años, desarrollada con React, TypeScript y CSS. Incluye una interfaz temática con elementos decorativos, animaciones, música con letras sincronizadas, itinerario e información del evento. El diseño se adaptó a dispositivos móviles y de escritorio para ofrecer una experiencia visual e interactiva.",
        image: "/images/projects/invitacion.png",
        images: [
            "/images/projects/invitacion.png"
        ],
        technologies: ["React", "TypeScript", "CSS3", "Vite"],
        features: [
            "Diseño personalizado",
            "Animaciones y música sincronizada",
            "Itinerario e información del evento",
            "Diseño responsive"
        ],
        role: "Desarrollador Front-End",
        featured: true
    },
    ...landingPagesList
];
