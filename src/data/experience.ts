
export interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    period: string;
    location: string;
    employmentType?: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    certificate?: string;
    featured: boolean;
}

export const experienceList: ExperienceItem[] = [
    {
        id: "cayetano",
        company: "Universidad Peruana Cayetano Heredia",
        position: "Desarrollador Full Stack",
        period: "02/05/2025 - Actualidad",
        location: "San Isidro, Lima, Perú",
        description: "Desarrollo de plataformas web, aplicaciones de gestión e integraciones para automatizar procesos institucionales.",
        responsibilities: [
            "Desarrollo y mantenimiento de más de 200 landing pages responsive con HTML5, CSS3, JavaScript y WordPress.",
            "Desarrollo de aplicaciones web con React, TypeScript, PHP y Laravel, incluyendo APIs REST, autenticación y lógica de negocio.",
            "Implementación y mantenimiento de bases de datos MySQL para aplicaciones y plataformas internas.",
            "Desarrollo de plataformas para la gestión de ingresantes, seguimiento de leads, documentación, presupuestos y reportes.",
            "Integración con Microsoft Dynamics 365, Emblue, Zapier y webhooks para automatización y sincronización de información.",
            "Implementación de dashboards, filtros, reportes y sistemas de autenticación con control de acceso.",
            "Despliegue y mantenimiento de aplicaciones web utilizando Git y plataformas de hosting."
        ],
        technologies: ["React", "TypeScript", "Laravel", "PHP", "MySQL", "JavaScript", "WordPress", "Git"],
        certificate: "/documents/certificates/cayetano.pdf",
        featured: true
    },
    {
        id: "evol",
        company: "Evol / Banco Pichincha",
        position: "Desarrollador Front-End",
        period: "06/02/2025 - 05/03/2025",
        location: "Miraflores, Lima, Perú",
        employmentType: "Servicio por proyecto",
        description: "Migración y adaptación de páginas web corporativas mediante el CMS Acquia.",
        responsibilities: [
            "Apoyo en la migración de 120 páginas web utilizando CMS Acquia.",
            "Adaptación y configuración de diseños y contenidos en las páginas migradas.",
            "Validación visual y pruebas de funcionamiento posteriores a la migración.",
            "Documentación y seguimiento de avances mediante Notion.",
            "Coordinación con el equipo y presentación periódica de avances del proyecto."
        ],
        technologies: ["Acquia", "CMS", "HTML5", "CSS3", "JavaScript", "Notion"],
        featured: false
    },
    {
        id: "banco-nacion",
        company: "Banco de la Nación",
        position: "Practicante Profesional de Ingeniería de Sistemas",
        period: "17/10/2023 - 16/10/2024",
        location: "San Borja, Lima, Perú",
        description: "Desarrollo y mantenimiento de páginas web institucionales, interfaces responsive y plataformas internas.",
        responsibilities: [
            "Desarrollo y actualización de páginas web institucionales e internas.",
            "Programación con HTML5, CSS3, JavaScript, jQuery y componentes ASP.",
            "Participación en el diseño y desarrollo responsive del nuevo portal institucional del Banco de la Nación.",
            "Elaboración de prototipos y propuestas de interfaces mediante Figma.",
            "Coordinación con el equipo de diseño gráfico para la implementación de recursos visuales.",
            "Participación en reuniones de seguimiento y presentación de avances de los proyectos."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "ASP", "Figma"],
        featured: true
    }
];
