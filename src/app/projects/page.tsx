"use client";

import { motion } from "framer-motion";
import ProjectGrid from "@/components/projects/ProjectGrid";
import PageHeader from "@/components/common/PageHeader";


export default function Projects() {
  

  return (
    <main
      className={`min-h-screen bg-gradient-to-b relative pb-16 sm:pb-0 `}
    >
      <PageHeader
        title="Projects Portfolio"
        description="Explore a curated selection of my latest projects, creative experiments, and collaborations."
        extraContent={
          <p className="text-sm text-muted-foreground">
            Whether it&apos; full-stack development, UI design, or experimental coding, you'll find projects showcasing my skills and passion for building. Click on a project to learn more.
          </p>
        }
      />

      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectGrid />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
