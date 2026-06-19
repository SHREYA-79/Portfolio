import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, LineChart, Users, BookOpen } from 'lucide-react';
import { Card } from './ui/card';

const stats = [
  { label: 'CGPA', value: '9.81', icon: GraduationCap, highlight: true },
  { label: 'Analytics Projects', value: '4+', icon: LineChart },
  { label: 'Industry Certifications', value: '4', icon: Award },
  { label: 'AWS Certified', value: 'AI Practitioner', icon: Award },
  { label: 'Oracle Certified', value: 'Cloud Foundations', icon: Award },
  { label: 'PwC Trainee', value: 'Launchpad Program', icon: Briefcase },
  { label: 'Board of Studies', value: 'Student Member', icon: BookOpen },
  { label: 'Class Representative', value: 'Student Leader', icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Stats() {
  return (
    <section className="py-16 border-y border-white/5 bg-background/50 relative z-10" id="stats">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">At a Glance</h2>
          <p className="text-muted-foreground text-lg">Credentials, certifications &amp; achievements by the numbers</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={i} variants={itemVariants} className="flex-1 min-w-[180px] max-w-[260px]">
                <Card
                  className={`glass-card p-5 h-full flex flex-col items-start gap-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 ${
                    stat.highlight
                      ? 'border-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                      : 'border-white/5'
                  }`}
                  data-testid={`card-stat-${i}`}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
