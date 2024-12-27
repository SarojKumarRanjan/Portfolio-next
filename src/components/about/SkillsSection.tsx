"use client";

import { motion } from "framer-motion";
import { ReactIcon, NextJsIcon, TailwindIcon } from "@/components/icons/TechIcons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "React", icon: ReactIcon, level: 90 },
  { name: "Next.js", icon: NextJsIcon, level: 85 },
  { name: "Tailwind CSS", icon: TailwindIcon, level: 95 }
];

export default function SkillsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 dark:hover:shadow-primary/20">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{skill.name}</CardTitle>
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold text-primary">
                        Proficiency
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 bg-gray-200 rounded dark:bg-gray-700">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}