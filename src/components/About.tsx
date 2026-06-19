import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';

const interests = [
  'Data Analytics', 'Business Intelligence', 'Data Engineering',
  'Artificial Intelligence', 'Decision Intelligence', 'Machine Learning',
  'Generative AI', 'Data Visualization', 'KPI Development',
];

const quickFacts = [
  { icon: GraduationCap, label: 'University', value: 'SRM Institute of Science and Technology' },
  { icon: MapPin, label: 'Degree', value: 'Electronics & Computer Engineering' },
  { icon: Sparkles, label: 'CGPA', value: '9.81 / 10' },
];

export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground text-lg">The person behind the data</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am <strong className="text-foreground font-semibold">Chintha Shreya Reddy</strong>, Final-Year Electronics and Computer Engineering Student at SRM Institute of Science and Technology with a strong academic record and a passion for analytics, business intelligence, and technology-driven problem solving.
            </p>
            <p>
              I enjoy building solutions that convert raw data into meaningful insights through analytics, visualization, automation, and intelligent systems — from SQL Server data warehouses and Power BI dashboards to AI-powered analytical applications.
            </p>
            <p>
              Beyond academics, I serve as a Trainee in PwC's Launchpad Program, Class Representative, Student Member of the Board of Studies at SRM University, and Technical Content Writer on Medium.
            </p>

            <blockquote className="text-xl text-foreground font-medium border-l-4 border-primary pl-5 italic py-1">
              "My goal is to leverage data, analytics, and AI to build impactful solutions that help organizations make smarter, data-driven decisions."
            </blockquote>

            {/* Interest tags */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Areas of Interest</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-accent border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick facts column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Profile card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-5">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white mx-auto">
                CSR
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground text-lg">Chintha Shreya Reddy</p>
                <p className="text-muted-foreground text-sm mt-0.5">Data Analytics · BI · AI</p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-accent mt-0.5 flex-shrink-0">
                      <fact.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{fact.label}</p>
                      <p className="text-sm font-medium text-foreground">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open to work badge */}
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
              <div>
                <p className="text-sm font-semibold text-green-400">Open to Opportunities</p>
                <p className="text-xs text-muted-foreground">Internships · Full-time · Analytics roles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
