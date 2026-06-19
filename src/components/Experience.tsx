import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, PenTool, Users } from 'lucide-react';

const experiences = [
  {
    role: 'Trainee',
    company: 'PwC Launchpad Program',
    period: 'Feb 2026 – Present',
    status: 'Current',
    icon: Briefcase,
    points: [
      'Selected for PwC\'s competitive Launchpad Program',
      'Exposure to consulting methodologies and business problem-solving frameworks',
      'Learning enterprise analytics, digital transformation, and AI applications',
    ],
  },
  {
    role: 'Technical Content Writer',
    company: 'Medium',
    period: '2023 – Present',
    status: 'Current',
    icon: PenTool,
    points: [
      'Publish technical content on analytics, machine learning, and software engineering',
      'Create educational content focused on Python, SQL, AI, and analytics',
    ],
  },
  {
    role: 'Creative Content Contributor',
    company: 'Data Science Community SRM',
    period: '2023 – 2024',
    status: null,
    icon: Users,
    points: [
      'Support technical initiatives and community engagement activities',
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 relative bg-card/30" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground text-lg">Where I have applied my skills professionally</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background text-primary group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <exp.icon className="w-5 h-5" />
              </div>

              <Card
                className="glass-card w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 hover:border-primary/20 transition-all duration-300"
                data-testid={`card-experience-${i}`}
              >
                {/* Role + status badge */}
                <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  {exp.status && (
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-xs font-medium">
                      {exp.status}
                    </Badge>
                  )}
                </div>
                <div className="text-accent font-medium mb-1">{exp.company}</div>
                <div className="text-xs text-muted-foreground mb-4 font-mono">{exp.period}</div>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm md:text-base flex items-start">
                      <span className="text-primary mr-2 mt-1.5 text-xs">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
