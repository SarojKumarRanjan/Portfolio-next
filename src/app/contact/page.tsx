"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import PageHeader from "@/components/common/PageHeader";


export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95 relative pb-16 sm:pb-0">
      <PageHeader 
        title="Let's Connect"
        description="I'm excited to hear from you and discuss potential opportunities"
      />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto"
        >
          <ContactForm />
          <ContactInfo />
        </motion.div>
      </div>
    </main>
  );
}