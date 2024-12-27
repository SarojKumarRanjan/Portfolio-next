export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  technologies: string[];
  screenshots: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Tailwind CSS. Features include product management, cart functionality, and secure checkout.",
    coverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1557821556-1498673f5c52?w=800&q=80"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example"
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills. Built with modern web technologies and animations.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example"
  }
];