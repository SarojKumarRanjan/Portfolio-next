"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineItems = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    description: "Leading development of enterprise web applications",
    achievements: ["Team Leadership", "Architecture Design", "Performance Optimization"]
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    description: "Building scalable web solutions",
    achievements: ["Backend Integration", "API Development", "Database Design"]
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description: "Started journey in web development",
    achievements: ["UI Development", "React", "Responsive Design"]
  }
];

export default function Timeline() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional Timeline
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            My journey in software development
          </p>
        </div>
        
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:translate-y-24'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 ring-4 ring-background" />
              
              <Card className={`${
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
              } hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-lg font-semibold">
                    {item.year}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary">
                        {achievement}
                      </Badge>
                    ))}
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