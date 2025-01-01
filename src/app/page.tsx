"use client";
//ssl coupon code 
//h29jgvwavc
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GitHubContributions } from "@/components/github/GitHubContributions";
import img1 from "@/assests/3.jpeg";


import ProjectGrid from "@/components/projects/ProjectGrid";
import Timeline from "@/components/about/Timeline";
import SkillsSection from "@/components/about/SkillsSection";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  

  return (
    <main className="min-h-screen relative pb-16 sm:pb-0">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-start lg:items-center  lg:pt-0">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 py-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1 w-full"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto">
                <Image
                  src={img1}
                  alt="Developer"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Full Stack Developer
                <br />
                <span className="text-blue-500">
                  Building Digital Experiences
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                I specialize in creating modern web applications with
                cutting-edge technologies. Focused on delivering clean,
                efficient, and scalable solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 
                    shadow-lg hover:shadow-xl
                    dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
                    dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]
                    transition-all duration-300"
                  >
                    View Projects <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/SarojKumarRanjan" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto gap-2 border-primary/20 hover:bg-primary/10 
                    shadow-lg hover:shadow-xl
                    dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
                    dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]
                    transition-all duration-300"
                    size="lg"
                    variant="outline"
                  >
<Github className="w-5 h-5" />
Github
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="gap-2 border-primary/20 hover:bg-primary/10 
                    shadow-lg hover:shadow-xl
                    dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
                    dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]
                    transition-all duration-300"
                    variant="outline"
                    size="icon"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </Link>
                <Link
                  href="https://x.com/SarojRanjan02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="gap-2 border-primary/20 hover:bg-primary/10 
                    shadow-lg hover:shadow-xl
                    dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
                    dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]
                    transition-all duration-300"
                    variant="outline"
                    size="icon"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* GitHub Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              GitHub Activity
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Overview of my contributions and activity on Github
            </p>
          </div>
          <GitHubContributions />
        </motion.div>
      </div>

      {/* Project section */}
      <div className="flex justify-center">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Projects Portfolio
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Explore a curated selection of my latest projects, creative experiments, and collaborations
              </p>
            </div>

            <ProjectGrid />
          </motion.div>
        </div>
      </div>

      {/* Skills section */}
      <div className="container mx-auto px-4 py-8">
        <SkillsSection />
        <Timeline />
      </div>

      {/* Contact section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            I'm excited to hear from you and discuss potential opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      {/* Mobile Theme Toggle */}
      
    </main>
  );
}