
import type { ProjectItem } from "./projects";

interface LandingPageData {
    id: string;
    title: string;
    description: string;
    url: string;
    images: string[];
    technologies?: string[];
    features?: string[];
    featured?: boolean;
}

const createLanding = (item: LandingPageData): ProjectItem => ({
    id: item.id,
    title: item.title,
    category: "Landing page",
    description: item.description,
    detail: `${item.description} Proyecto web de la Universidad Peruana Cayetano Heredia, orientado a presentar información académica mediante una experiencia adaptable a distintos dispositivos.`,
    image: item.images[0] || "",
    images: item.images,
    technologies: item.technologies || ["HTML5", "CSS3", "JavaScript", "WordPress"],
    features: item.features || [
        "Diseño y maquetación responsive",
        "Presentación de información académica",
        "Adaptación para dispositivos móviles"
    ],
    company: "Universidad Peruana Cayetano Heredia",
    url: item.url,
    featured: item.featured ?? false
});

export const landingPagesList: ProjectItem[] = [
    createLanding({
        id: "lp-medicina",
        title: "Medicina - Cayetano",
        description: "Landing académica para presentar información de la carrera de Medicina.",
        url: "https://lp.cayetano.edu.pe/medicina/",
        images: [
            "/images/projects/medicina-1.webp",
            "/images/projects/medicina-2.webp"
        ],
        featured: true
    }),
    // createLanding({
    //     id: "lp-re-evolucion",
    //     title: "Re-evolución",
    //     description: "Landing informativa de la campaña Re-evolución de Cayetano.",
    //     url: "https://lp.cayetano.edu.pe/re-evolucion/",
    //     images: []
    // }),
    createLanding({
        id: "lp-beca18",
        title: "Beca 18",
        description: "Página informativa sobre oportunidades académicas relacionadas con Beca 18.",
        url: "https://lp.cayetano.edu.pe/beca-18/",
        images: [
            "/images/projects/beca18-1.webp",
            "/images/projects/beca18-2.webp"
        ],
        featured: true
    }),
    createLanding({
        id: "lp-idiomas",
        title: "Idiomas Cayetano",
        description: "Landing de difusión de la oferta académica de Idiomas Cayetano.",
        url: "https://lp.cayetano.edu.pe/idiomas-cayetano/",
        images: [
            "/images/projects/idiomas-1.webp",
            "/images/projects/idiomas-2.webp"
        ]
    }),
    createLanding({
        id: "lp-examen-idiomas",
        title: "Examen de Clasificación - Idiomas",
        description: "Página informativa sobre el examen de clasificación de Idiomas Cayetano.",
        url: "https://lp.cayetano.edu.pe/examen-de-clasificacion/",
        images: [
            "/images/projects/examenIdiomas-1.webp",
            "/images/projects/examenIdiomas-2.webp",
            "/images/projects/examenIdiomas-3.webp",
            "/images/projects/examenIdiomas-4.webp",
            "/images/projects/examenIdiomas-5.webp",
            "/images/projects/examenIdiomas-6.webp",
            "/images/projects/examenIdiomas-7.webp"
        ]
    }),
    // createLanding({
    //     id: "lp-admision",
    //     title: "Admisión Cayetano",
    //     description: "Landing orientada a la difusión de información sobre el proceso de admisión.",
    //     url: "https://lp.cayetano.edu.pe/admision-cayetano/",
    //     images: []
    // }),
    createLanding({
        id: "lp-backstage",
        title: "Cayetano Backstage",
        description: "Experiencia web informativa para la iniciativa Cayetano Backstage.",
        url: "https://lp.cayetano.edu.pe/cayetano-backstage/",
        images: [
            "/images/projects/backstage-1.webp",
            "/images/projects/backstage-2.webp",
            "/images/projects/backstage-3.webp"
        ]
    }),
    createLanding({
        id: "lp-humanlab",
        title: "Human Lab",
        description: "Landing de presentación y difusión de la iniciativa Human Lab.",
        url: "https://lp.cayetano.edu.pe/human-lab/",
        images: [
            "/images/projects/humanLab-1.webp",
            "/images/projects/humanLab-2.webp",
            "/images/projects/humanLab-3.webp",
            "/images/projects/humanLab-4.webp",
            "/images/projects/humanLab-5.webp"
        ],
        featured: true
    }),
    createLanding({
        id: "lp-pre-cayetano",
        title: "Pre Cayetano",
        description: "Landing informativa sobre la preparación académica de Pre Cayetano.",
        url: "https://lp.cayetano.edu.pe/pre-cayetano/",
        images: [
            "/images/projects/preCayetano-1.webp",
            "/images/projects/preCayetano-2.webp",
            "/images/projects/preCayetano-3.webp"
        ]
    }),
    createLanding({
        id: "lp-saludlab",
        title: "Salud Lab",
        description: "Landing de presentación de la iniciativa Salud Lab.",
        url: "https://lp.cayetano.edu.pe/salud-lab/",
        images: [
            "/images/projects/saludLab-1.webp",
            "/images/projects/saludLab-2.webp",
            "/images/projects/saludLab-3.webp"
        ]
    }),
    // createLanding({
    //     id: "lp-pge-administracion-salud",
    //     title: "Administración en Salud",
    //     description: "Landing informativa del programa de posgrado en Administración en Salud.",
    //     url: "https://lp.cayetano.edu.pe/pge-administracion-en-salud/",
    //     images: []
    // })
    
];
