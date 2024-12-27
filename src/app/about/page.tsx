"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/about/Timeline";
import SkillsSection from "@/components/about/SkillsSection";
import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function About() {
 

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <PageHeader 
        title="About Me"
        description="Aspiring web developer passionate about creating modern web applications"
        extraContent={
         <div>
<motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Resume
            </Button>
          </div>

          
        </motion.div>

          </div>
        }
      />
        
      
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <Card className="bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    As a fresh graduate in Computer Science, I'm passionate about web development and creating user-friendly applications. During my academic journey, I've focused on mastering modern web technologies like React, Next.js, and Tailwind CSS.
                  </p>
                  <p>
                    I've completed several personal projects and coursework that have helped me develop practical skills in frontend development. I'm particularly interested in building responsive, accessible web applications and constantly learning new technologies.
                  </p>
                  <p>
                    Currently seeking opportunities to apply my knowledge and contribute to meaningful projects while growing as a developer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <SkillsSection />

          <Timeline />
        </motion.div>
      </div>
    </main>
  );
}