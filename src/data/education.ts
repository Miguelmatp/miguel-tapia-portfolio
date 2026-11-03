
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
    image?: string;
    kind?: "course" | "certification";
}

export const educationList: EducationItem[] = [
    // ESTUDIOS PRINCIPALES
    {
        id: "certus-react",
        title: "Desarrollo Web Front-End (React)",
        institution: "Certus",
        period: "2023 - 2024",
        type: "course",
        kind: "course",
        hours: 72,
        location: "Surco - Lima",
        locationUrl: "https://maps.app.goo.gl/ZmKVaHEGKSX4CZfz7",
        document: "/documents/certificates/education/certus-desarrollo-web-front-end.pdf",
        image: "/images/education/certus.webp",
        featured: true
    },
    {
        id: "upn-bachiller",
        title: "Ingeniería de Sistemas Computacionales",
        institution: "Universidad Privada del Norte",
        period: "2022 - 2023",
        type: "education",
        level: "Bachiller",
        location: "S.J.L. - Lima",
        locationUrl: "https://maps.app.goo.gl/3BfQbpjB1og4QabC9",
        document: "/documents/certificates/education/UPN-Bachiller.pdf",
        image: "/images/education/upn.webp",
        featured: true
    },
    {
        id: "upn-egresado",
        title: "Ingeniería de Sistemas Computacionales",
        institution: "Universidad Privada del Norte",
        period: "2017 - 2022",
        type: "education",
        level: "Egresado",
        location: "S.J.L. - Lima",
        locationUrl: "https://maps.app.goo.gl/3BfQbpjB1og4QabC9",
        document: "/documents/certificates/education/UPN-Egresado.pdf",
        image: "/images/education/upn.webp",
        featured: false
    },

    // PLATZI
    // {
    //     id: "platzi-css-animations",
    //     title: "Transformaciones y transiciones en CSS",
    //     institution: "Platzi",
    //     period: "2024",
    //     type: "course",
    //     hours: 18,
    //     date: "20 de mayo de 2024",
    //     document: "/documents/certificates/education/platzi/platzi-diploma-transformaciones-transiciones-css.pdf",
    //     image: "/images/education/platzi.webp",
    //     featured: false
    // },
    // {
    //     id: "platzi-sass",
    //     title: "Fundamentos de SASS",
    //     institution: "Platzi",
    //     period: "2024",
    //     type: "course",
    //     hours: 26,
    //     date: "20 de mayo de 2024",
    //     document: "/documents/certificates/education/platzi/platzi-diploma-sass.pdf",
    //     image: "/images/education/platzi.webp",
    //     featured: false
    // },
    // {
    //     id: "platzi-mobile-first",
    //     title: "Responsive Design: Maquetación Mobile First",
    //     institution: "Platzi",
    //     period: "2024",
    //     type: "course",
    //     hours: 25,
    //     date: "20 de mayo de 2024",
    //     document: "/documents/certificates/education/platzi/platzi-diploma-mobile-first.pdf",
    //     image: "/images/education/platzi.webp",
    //     featured: false
    // },
    // {
    //     id: "platzi-html-css",
    //     title: "Definitivo de HTML y CSS",
    //     institution: "Platzi",
    //     period: "2024",
    //     type: "course",
    //     hours: 23,
    //     date: "20 de mayo de 2024",
    //     document: "/documents/certificates/education/platzi/platzi-diploma-html-css.pdf",
    //     image: "/images/education/platzi.webp",
    //     featured: false
    // },
    // {
    //     id: "platzi-html-practico",
    //     title: "HTML y CSS",
    //     institution: "Platzi",
    //     period: "2024",
    //     type: "course",
    //     hours: 16,
    //     date: "20 de mayo de 2024",
    //     document: "/documents/certificates/education/platzi/platzi-diploma-html-practico.pdf",
    //     image: "/images/education/platzi.webp",
    //     featured: false
    // },
    {
        id: "platzi-frontend",
        title: "Front End Developer",
        institution: "Platzi",
        period: "2024",
        type: "course",
        hours: 15,
        date: "12 de abril de 2024",
        document: "/documents/certificates/education/platzi/platzi-diploma-frontend-developer.pdf",
        image: "/images/education/platzi.webp",
        featured: false
    },

    // FUNDACIÓN TELEFÓNICA MOVISTAR
    // {
    //     id: "movistar-javascript",
    //     title: "Programación con JavaScript",
    //     institution: "Fundación Telefónica Movistar",
    //     period: "2022",
    //     type: "course",
    //     hours: 40,
    //     date: "30 de abril de 2022",
    //     document: "/documents/certificates/education/movistar/movistar-programacion-js.pdf",
    //     image: "/images/education/movistar.webp",
    //     featured: false
    // },
    // {
    //     id: "movistar-html-css",
    //     title: "Diseño Web con HTML5 + CSS",
    //     institution: "Fundación Telefónica Movistar",
    //     period: "2022",
    //     type: "course",
    //     hours: 30,
    //     date: "30 de abril de 2022",
    //     document: "/documents/certificates/education/movistar/movistar-dise%C3%B1o-web-html5-css.pdf",
    //     image: "/images/education/movistar.webp",
    //     featured: false
    // },
    {
        id: "movistar-wordpress",
        title: "WordPress",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 30,
        date: "17 de abril de 2022",
        document: "/documents/certificates/education/movistar/movistar-wordpress.pdf",
        image: "/images/education/movistar.webp",
        featured: false
    },
    // {
    //     id: "movistar-cv",
    //     title: "Diseño de CV de alto impacto",
    //     institution: "Fundación Telefónica Movistar",
    //     period: "2022",
    //     type: "course",
    //     hours: 30,
    //     date: "16 de abril de 2022",
    //     document: "/documents/certificates/education/movistar/movistar-cv-alto-impacto.pdf",
    //     featured: false
    // },
    {
        id: "movistar-office-intermedio",
        title: "Office Intermedio",
        institution: "Fundación Telefónica Movistar",
        period: "2022",
        type: "course",
        hours: 25,
        date: "7 de abril de 2022",
        document: "/documents/certificates/education/movistar/movistar-office-intermedio.pdf",
        image: "/images/education/movistar.webp",
        featured: false
    }
];
