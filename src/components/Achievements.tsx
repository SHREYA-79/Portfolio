import { motion } from 'framer-motion';
import { Award, Trophy, Star, Users, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const achievements = [
  { text: 'AI Quantum Challenge — Winner', icon: Trophy },
  { text: 'Merit Scholarship (2023–24)', icon: Award },
  { text: 'Merit Scholarship (2024–25)', icon: Award },
  { text: 'Highest Grade Award – Semesters 1, 4, 5 & 6', icon: Star },
  { text: 'Student Member – Board of Studies', icon: GraduationCap },
  { text: 'Class Representative', icon: Users },
];

export function Achievements() {
  return (
    <section className="py-24 relative bg-card/30 border-y border-white/5" id="achievements">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Awards & Achievements</h2>
          <p className="text-muted-foreground text-lg">Recognition earned through academic excellence and leadership</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Card
                className="glass-card p-4 flex items-center gap-4 border-white/5 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                data-testid={`card-achievement-${i}`}
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">{item.text}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
