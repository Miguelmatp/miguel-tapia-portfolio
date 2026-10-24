
export interface EducationItem {
    id: string;
    title: string;
    institution: string;
    period: string;
    type: "education" | "course";
    level?: string;
    location?: string;
    locationUrl?: string;
    hours?: number;
    date?: string;
    document: string;
    featured: boolean;
}

export const educationList: EducationItem[] = [
    // ESTUDIOS PRINCIPALES
    {
        id: "upn-bachiller",
        title: "Ingeniería de Sistemas Computacionales",
        institution: "Universidad Privada del Norte",
        period: "2022 - 2023",
        type: "education",
        level: "Bachiller",
        location: "S.J.L. - Lima",
        locationUrl: "https://maps.app.goo.gl/3BfQbpjB1og4QabC9",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/estudios/bachiller-upn.pdf",
        featured: true
    },
    {
        id: "certus-react",
        title: "Desarrollo Web Front-End (React)",
        institution: "Certus",
        period: "2023 - 2024",
        type: "course",
        level: "Curso de especialización",
        hours: 72,
        location: "Surco - Lima",
        locationUrl: "https://maps.app.goo.gl/ZmKVaHEGKSX4CZfz7",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/certus-desarrollo-web-front-end.pdf",
        featured: true
    },
    {
        id: "upn-egresado",
        title: "Ingeniería de Sistemas Computacionales",
        institution: "Universidad Privada del Norte",
        period: "2017 - 2022",
        type: "education",
        level: "Educación superior universitaria - Egresado",
        location: "S.J.L. - Lima",
        locationUrl: "https://maps.app.goo.gl/3BfQbpjB1og4QabC9",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/estudios/egresado-upn.pdf",
        featured: false
    },

    // PLATZI
    {
        id: "platzi-css-animations",
        title: "Transformaciones y transiciones en CSS",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 18,
        date: "20 de mayo de 2024",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/platzi/platzi-diploma-transformaciones-transiciones-css.pdf",
        featured: false
    },
    {
        id: "platzi-sass",
        title: "Fundamentos de SASS",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 26,
        date: "20 de mayo de 2024",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/platzi/platzi-diploma-sass.pdf",
        featured: false
    },
    {
        id: "platzi-mobile-first",
        title: "Responsive Design: Maquetación Mobile First",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 25,
        date: "20 de mayo de 2024",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/platzi/platzi-diploma-mobile-first.pdf",
        featured: false
    },
    {
        id: "platzi-html-css",
        title: "Definitivo de HTML y CSS",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 23,
        date: "20 de mayo de 2024",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/platzi/platzi-diploma-html-css.pdf",
        featured: false
    },
    {
        id: "platzi-html-practico",
        title: "HTML y CSS",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 16,
        date: "20 de mayo de 2024",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/platzi/platzi-diploma-html-practico.pdf",
        featured: false
    },
    {
        id: "platzi-frontend",
        title: "Front End Developer",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 15,
        date: "12 de abril de 2024",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/platzi/platzi-diploma-frontend-developer.pdf",
        featured: false
    },

    // FUNDACIÓN TELEFÓNICA MOVISTAR
    {
        id: "movistar-javascript",
        title: "Programación con JavaScript",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 40,
        date: "30 de abril de 2022",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/movistar/movistar-programacion-js.pdf",
        featured: false
    },
    {
        id: "movistar-html-css",
        title: "Diseño Web con HTML5 + CSS",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 30,
        date: "30 de abril de 2022",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/movistar/movistar-dise%C3%B1o-web-html5-css.pdf",
        featured: false
    },
    {
        id: "movistar-wordpress",
        title: "WordPress",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 30,
        date: "17 de abril de 2022",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/movistar/movistar-wordpress.pdf",
        featured: false
    },
    {
        id: "movistar-cv",
        title: "Diseño de CV de alto impacto",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 30,
        date: "16 de abril de 2022",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/movistar/movistar-cv-alto-impacto.pdf",
        featured: false
    },
    {
        id: "movistar-office-intermedio",
        title: "Office Intermedio",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 25,
        date: "7 de abril de 2022",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/movistar/movistar-office-intermedio.pdf",
        featured: false
    },
    {
        id: "movistar-office-basico",
        title: "Office Básico",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 20,
        date: "31 de marzo de 2022",
        document: "https://matp1709.github.io/cv-MiguelTapia/doc/cursos/movistar/movistar-office-basico.pdf",
        featured: false
    }
];
