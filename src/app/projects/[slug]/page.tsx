
import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import {ProjectPage} from "@/components/projects/ProjectPage"





 export const runtime = 'edge'; 

export default async function ProjectMainPage({params}: {params: Promise<{ slug: string }>}) {
  
  
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <ProjectPage project={project} slug={slug}/>
  )
}