import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ShieldCheck, Briefcase } from 'lucide-react';

const certs = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS',
    color: 'from-orange-500/20 to-yellow-500/10',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    icon: ShieldCheck,
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    issuerShort: 'Oracle',
    color: 'from-red-500/20 to-rose-500/10',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    icon: ShieldCheck,
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    issuerShort: 'Google',
    color: 'from-green-500/20 to-emerald-500/10',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    icon: ShieldCheck,
  },
  {
    name: 'PwC Launchpad Program',
    issuer: 'PricewaterhouseCoopers',
    issuerShort: 'PwC',
    color: 'from-violet-500/20 to-purple-500/10',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: Briefcase,
  },
];

export function Certifications() {
  return (
    <section className="py-24 relative" id="certifications">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional credentials from world-class organisations validating expertise in AI, Cloud, and Analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative group p-px rounded-xl bg-gradient-to-br from-white/10 to-transparent hover:from-primary/60 hover:to-secondary/40 transition-all duration-500 h-full">
                <Card
                  className={`border-none rounded-[11px] h-full p-6 flex flex-col items-center text-center relative z-10 bg-background/90 bg-gradient-to-br ${cert.color}`}
                  data-testid={`card-certification-${i}`}
                >
                  <cert.icon className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border mb-3 ${cert.badgeColor}`}>
                    {cert.issuerShort}
                  </span>
                  <h3 className="text-base font-bold text-foreground leading-tight mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  <div className="mt-auto pt-4">
                    <div className="h-0.5 w-10 bg-primary/40 mx-auto rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
