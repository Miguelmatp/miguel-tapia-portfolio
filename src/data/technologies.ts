
export const technologies = [
    "Figma", "HTML5", "CSS3", "JavaScript", "Bootstrap",
    "GitHub", "WordPress", "React", "Tailwind", "MySQL",
    "Git", "Angular", "TypeScript", "PHP", "Laravel"
];


export interface Technology {
    id: string;
    name: string;
    category: "Frontend" | "Backend" | "Base de datos" | "Herramientas";
    icon: string;
    featured: boolean;
}

export const technologyList: Technology[] = [
    { id: "react", name: "React", category: "Frontend", icon: "/images/icons/technologies/react.svg", featured: true },
    { id: "typescript", name: "TypeScript", category: "Frontend", icon: "/images/icons/technologies/typescript.svg", featured: true },
    { id: "javascript", name: "JavaScript", category: "Frontend", icon: "/images/icons/technologies/javascript.svg", featured: true },
    { id: "laravel", name: "Laravel", category: "Backend", icon: "/images/icons/technologies/laravel.svg", featured: true },
    { id: "php", name: "PHP", category: "Backend", icon: "/images/icons/technologies/php.svg", featured: true },
    { id: "mysql", name: "MySQL", category: "Base de datos", icon: "/images/icons/technologies/mysql.svg", featured: true },

    { id: "html", name: "HTML5", category: "Frontend", icon: "/images/icons/technologies/html.svg", featured: false },
    { id: "css", name: "CSS3", category: "Frontend", icon: "/images/icons/technologies/css.svg", featured: false },
    { id: "bootstrap", name: "Bootstrap", category: "Frontend", icon: "/images/icons/technologies/bootstrap.svg", featured: false },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend", icon: "/images/icons/technologies/tailwind.svg", featured: false },
    { id: "angular", name: "Angular", category: "Frontend", icon: "/images/icons/technologies/angular.svg", featured: false },
    { id: "wordpress", name: "WordPress", category: "Herramientas", icon: "/images/icons/technologies/wordpress.svg", featured: false },
    { id: "figma", name: "Figma", category: "Herramientas", icon: "/images/icons/technologies/figma.svg", featured: false },
    { id: "git", name: "Git", category: "Herramientas", icon: "/images/icons/technologies/git.svg", featured: false },
    { id: "github", name: "GitHub", category: "Herramientas", icon: "/images/icons/technologies/github.svg", featured: false }
];
