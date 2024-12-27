'use client'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Globe, ArrowLeft } from "lucide-react"
import { Project } from "@/lib/projects"



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  


export function ProjectPage({project,slug}:{project:Project,slug:string}) {

    const router = useRouter()

  return (
    <main className="min-h-screen py-4 lg:py-8 bg-gradient-to-b from-background to-background/80 relative pb-16 sm:pb-0">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className="group mb-6 hover:bg-accent transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back
            </Button>
          </motion.div>

          <Card className="overflow-hidden backdrop-blur-6xl bg-card/30 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-all duration-300">
            <motion.div 
              variants={itemVariants}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px]"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 p-6 bg-card/50 backdrop-blur-lg border-t border-white/10"
            >
              <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Globe className="w-4 h-4" />
                Live Demo
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 gap-2 border-primary/20 hover:bg-primary/10 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                View Code
              </Button>
            </motion.div>

            <div className="p-6 sm:p-8 lg:p-10">
              <motion.h1 
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              >
                {project.title}
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-muted-foreground mb-6 text-sm sm:text-base lg:text-lg"
              >
                {project.description}
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-2 mb-8"
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary border border-primary/20 shadow-sm hover:shadow-primary/5 transition-shadow duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              >
                <AnimatePresence>
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        className="rounded-lg transform transition-transform duration-500 hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}

export default ProjectPage