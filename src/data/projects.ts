
export type ProjectCategory = "Sistema web" | "Landing page" | "Aplicación";

export interface ProjectItem {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    image: string;
    technologies: string[];
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
        image: "/images/projects/own-media.webp",
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        featured: true
    },
    {
        id: "ingresantes",
        title: "Sistema de Ingresantes",
        category: "Sistema web",
        description: "Sistema de seguimiento de postulantes, gestión de leads y asesores.",
        image: "/images/projects/ingresantes.webp",
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        featured: true
    },
    {
        id: "backoffice",
        title: "Backoffice",
        category: "Sistema web",
        description: "Plataforma para la gestión de registros, documentación y reportes.",
        image: "/images/projects/backoffice.webp",
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        featured: true
    }
];
