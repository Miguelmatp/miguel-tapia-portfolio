
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
        image: "/images/projects/ingresantes.webp",
        images: [
            "/images/projects/ingresantes.webp",
            "/images/projects/ingresantes-2.webp",
            "/images/projects/ingresantes-3.webp"
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
        id: "backoffice",
        title: "Backoffice",
        category: "Sistema web",
        description: "Plataforma para la gestión de registros, documentación y reportes.",
        detail: "Sistema administrativo desarrollado para facilitar la gestión de información y los procesos internos mediante una plataforma centralizada. Incluye módulos para administrar registros, consultar documentación, aplicar filtros y generar reportes, mejorando la organización de la información y las tareas operativas.",
        image: "/images/projects/backoffice.webp",
        images: [
            "/images/projects/backoffice.webp",
            "/images/projects/backoffice-2.webp",
            "/images/projects/backoffice-3.webp"
        ],
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        features: [
            "Gestión de registros",
            "Administración de documentación",
            "Consultas y filtros",
            "Reportes de información"
        ],
        period: "2025 - Actualidad",
        company: "Universidad Peruana Cayetano Heredia",
        role: "Desarrollador Full Stack",
        featured: true
    },
    {
        id: "landing-upch",
        title: "Landing - UPCH",
        category: "Landing page",
        description: "Desarrollo de landings y campañas para admisión, eventos y programas académicos.",
        detail: "Desarrollo, maquetación y mantenimiento de páginas web orientadas a campañas de admisión, promoción académica y eventos de la Universidad Peruana Cayetano Heredia. Implementación de diseños responsive, formularios de registro, integraciones y optimizaciones de rendimiento utilizando HTML5, CSS3, JavaScript y WordPress.",
        image: "/images/projects/landing-upch.webp",
        images: [
            "/images/projects/landing-upch.webp",
            "/images/projects/landing-upch-2.webp"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
        features: [
            "Diseño y maquetación responsive",
            "Formularios e integraciones",
            "Adaptación para campañas",
            "Optimización y mantenimiento"
        ],
        period: "2025 - Actualidad",
        company: "UPCH - Dirección Comercial",
        role: "Desarrollador Web",
        featured: true
    },
    {
        id: "restaurant",
        title: "Sistema Restaurante",
        category: "Aplicación",
        description: "Sistema de gestión de mesas, pedidos, cuentas y pagos con control de cocina.",
        detail: "Aplicación web desarrollada para administrar las operaciones de un restaurante desde una plataforma centralizada. Permite gestionar mesas, registrar pedidos, enviar comandas a cocina, controlar estados de atención, dividir cuentas entre clientes y realizar pagos parciales mediante distintos métodos. También incluye herramientas para consultar el historial de ventas y generar reportes.",
        image: "/images/projects/restaurant.webp",
        images: [
            "/images/projects/restaurant.webp",
            "/images/projects/restaurant-2.webp",
            "/images/projects/restaurant-3.webp"
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
        image: "/images/projects/flavia.webp",
        images: [
            "/images/projects/flavia.webp",
            "/images/projects/flavia-2.webp",
            "/images/projects/flavia-3.webp"
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
    }
];
