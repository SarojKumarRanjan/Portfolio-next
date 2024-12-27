'use client'

import * as React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full overflow-hidden backdrop-blur-3xl bg-card/30 border border-white/20 
        shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
        dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] 
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] 
        dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] 
        transition-all duration-500"
      >
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative h-48 overflow-hidden cursor-pointer">
            <motion.div
              variants={imageVariants}
              className="h-full w-full"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </Link>

        <div className="p-6">
          <Link href={`/projects/${project.slug}`} className="block group">
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent
              group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </Link>
          
          <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 
                  shadow-[0_2px_8px_rgba(0,0,0,0.1)] 
                  hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
                  dark:shadow-[0_2px_8px_rgba(255,255,255,0.1)]
                  dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]
                  transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline"
              size="sm"
              className="flex-1 gap-2 border-primary/20 hover:bg-primary/10 
                shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
                hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
                dark:hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]
                transition-all duration-300"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </Button>
            <Button 
              size="sm"
              className="flex-1 gap-2 bg-primary hover:bg-primary/90 
                shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                dark:shadow-[0_4px_12px_rgba(255,255,255,0.15)]
                dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.25)]
                transition-all duration-300"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Demo
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}