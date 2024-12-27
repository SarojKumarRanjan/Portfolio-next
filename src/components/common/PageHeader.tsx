'use client'

import * as React from 'react'
import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
  extraContent?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export default function PageHeader({ 
  title, 
  description, 
  extraContent,
  size = 'medium'
}: PageHeaderProps) {
  const sizes = {
    small: "py-12 md:py-16",
    medium: "py-20 md:py-24",
    large: "py-24 md:py-32"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className={`relative ${sizes[size]} overflow-hidden`}>
      

     
      <motion.div 
        className="relative z-10 container mx-auto px-4 -mt-10 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="container mx-auto px-4 py-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {extraContent && (
          <motion.div 
            variants={itemVariants}
            className="mt-8 w-full max-w-[60%]"
          >
            {extraContent}
          </motion.div>
        )}
        
        
      </motion.div>
    </section>
  )
}