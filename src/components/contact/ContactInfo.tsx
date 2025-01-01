"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "sarojranjan555@gmail.com",
    href: "mailto:sarojranjan555@gmail.com"
  },
  { 
    icon: MapPin, 
    label: "Location", 
    value: "Delhi NCR, India" 
  }
];

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub",
    href: "https://github.com/SarojKumarRanjan",
    username: "@SarojKumarRanjan"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saroj-kumar-ranjan-3b82b2249/",
    username: "in/Saroj Kumar Ranjan"
  },
  { 
    icon: Twitter, 
    label: "Twitter",
    href: "https://x.com/SarojRanjan02",
    username: "@SarojRanjan02"
  }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="backdrop-blur-xl  border-grey/10 h-full">
        <CardHeader>
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-muted-foreground">Let's connect and explore opportunities</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                  {href ? (
                    <a 
                      href={href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="font-medium">{value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, label, href, username }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12"
                    onClick={() => window.open(href, "_blank")}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{label}</div>
                      <div className="text-sm text-muted-foreground">{username}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}