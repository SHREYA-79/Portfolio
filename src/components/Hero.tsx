import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { SiMedium } from 'react-icons/si';

const socials = [
  { icon: Github, href: 'https://github.com/SHREYA-79', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shreya-reddy-chintha6/', label: 'LinkedIn' },
  { icon: SiMedium, href: 'https://medium.com/@shreya.61219', label: 'Medium' },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-accent mb-4">Hello, I am</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="block text-2xl md:text-3xl font-semibold text-muted-foreground tracking-widest uppercase mb-1">Chintha</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-primary">
              Shreya Reddy
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-mono text-muted-foreground mb-8"
          >
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary w-fit animate-[typing_3s_steps(40,end),blink_.75s_step-end_infinite]">
              Data Analytics • Data Engineering • AI Applications
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed"
          >
            Building intelligent analytics solutions that transform complex data into actionable business decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Final-Year Electronics and Computer Engineering Student at SRM IST with a strong academic record, hands-on analytics experience, and a passion for leveraging data, BI, and AI to solve real-world problems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 px-8 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_28px_rgba(139,92,246,0.5)] transition-all" asChild data-testid="button-view-projects">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-8" asChild data-testid="button-contact">
              <a href="#contact">
                Contact Me <Mail className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex items-center gap-3"
          >
            <span className="text-sm text-muted-foreground mr-1">Find me on</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-testid={`link-hero-${s.label.toLowerCase()}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
