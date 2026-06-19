import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Users, GraduationCap, PenLine, Briefcase } from 'lucide-react';

const leaderships = [
  {
    title: 'Class Representative',
    description: 'Representing 50+ students and coordinating communication between faculty and students.',
    icon: Users
  },
  {
    title: 'Student Member – Board of Studies',
    description: 'Contributing student perspectives to curriculum reviews and academic planning.',
    icon: GraduationCap
  },
  {
    title: 'Technical Content Writer',
    description: 'Publishing educational technical content on Medium.',
    icon: PenLine
  },
  {
    title: 'PwC Launchpad Trainee',
    description: 'Participating in professional development and industry-oriented training.',
    icon: Briefcase
  }
];

export function Leadership() {
  return (
    <section className="py-24 relative" id="leadership">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Active involvement in academic planning, student representation, and technical community building.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaderships.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card p-6 h-full text-center flex flex-col items-center border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 group" data-testid={`card-leadership-${i}`}>
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}