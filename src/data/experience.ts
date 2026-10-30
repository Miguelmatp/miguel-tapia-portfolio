
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
    image?: string;
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
        technologies: ["React", "TypeScript", "Laravel", "PHP", "MySQL", "JavaScript", "WordPress", "Git", "Github", "Zapier", "Microsoft", "Notion"],
        certificate: "/documents/certificates/work/UPCH.pdf",
        image: "/images/logos/cayetano.webp",
        featured: true
    },
    
    {
        id: "emhidas",
        company: "Emhidas",
        position: "Desarrollador Web",
        period: "06/03/2025 - 01/05/2025",
        location: "Miraflores, Lima, Perú",
        employmentType: "Servicio por proyecto",
        description: "Desarrollo, optimización y mantenimiento de plataformas web, implementando mejoras de rendimiento, rediseño de interfaces y automatizaciones para la gestión de precios y campañas comerciales.",
        responsibilities: [
            "Refactorización, limpieza y optimización de código para mejorar la organización, mantenibilidad y reutilización de componentes.",
            "Rediseño y actualización de interfaces web responsive, mejorando la presentación visual y la experiencia de usuario.",
            "Implementación y mantenimiento de herramientas de tracking para el seguimiento de interacciones y comportamiento de usuarios.",
            "Desarrollo de lógica reutilizable para automatizar precios y aplicar descuentos porcentuales en campañas comerciales.",
            "Actualización y mantenimiento de precios, productos y contenidos en la plataforma web.",
            "Automatización de tablas de tallas para facilitar su actualización y visualización en las páginas de productos."
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Notion", "WordPress", "Figma", "Php", "Git", "Github"],
        image: "/images/logos/emhidas.webp",
        featured: false
    },

    {
        id: "evol",
        company: "Evol / Banco Pichincha",
        position: "Desarrollador Front-End - Servicio",
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
        technologies: ["HTML", "CSS", "JavaScript", "Notion"],
        image: "/images/logos/bancoPichincha.webp",
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
        certificate: "/documents/certificates/work/BN.pdf",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Figma"],
        image: "/images/logos/bancoNacion.webp",
        featured: true
    }
];
