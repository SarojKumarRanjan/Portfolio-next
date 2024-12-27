"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = Array.from({ length: 7 }, (_, i) => i);
const weeks = Array.from({ length: 52 }, (_, i) => i);

// Mock contribution data - in a real app, this would come from GitHub's API
const getRandomContributions = () => Math.floor(Math.random() * 4);

export  function GitHubContributions() {
  return (
    <Card className="p-6 backdrop-blur-xl  border-white/10 shadow-glow overflow-x-auto">
      <div className="flex gap-2">
        <div className="grid grid-rows-7 gap-1">
          {days.map(day => (
            <div key={day} className="h-3 text-xs text-muted-foreground">
              {day === 1 ? 'Mon' : ''}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {weeks.map(week => (
            <div key={week} className="grid grid-rows-7 gap-1">
              {days.map(day => {
                const contributions = getRandomContributions();
                return (
                  <motion.div
                    key={`${week}-${day}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (week * 7 + day) * 0.001 }}
                    className={`w-3 h-3 rounded-sm ${
                      contributions === 0 ? 'bg-white/5' :
                      contributions === 1 ? 'bg-blue-900/50' :
                      contributions === 2 ? 'bg-blue-700/50' :
                      'bg-blue-500/50'
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <div className="text-xs text-muted-foreground">Less</div>
        {[0, 1, 2, 3].map(level => (
          <div
            key={level}
            className={`w-3 h-3 rounded-sm ${
              level === 0 ? 'bg-white/5' :
              level === 1 ? 'bg-blue-900/50' :
              level === 2 ? 'bg-blue-700/50' :
              'bg-blue-500/50'
            }`}
          />
        ))}
        <div className="text-xs text-muted-foreground">More</div>
      </div>
    </Card>
  );
}