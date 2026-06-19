import { Github, Linkedin, Mail } from 'lucide-react';
import { SiMedium, SiLeetcode } from 'react-icons/si';

const socials = [
  { icon: Mail, href: 'mailto:shreya.61219@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shreya-reddy-chintha6/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/SHREYA-79', label: 'GitHub' },
  { icon: SiMedium, href: 'https://medium.com/@shreya.61219', label: 'Medium' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Shreyareddy6/', label: 'LeetCode' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 text-center">
          "Turning Data into Decisions."
        </h2>
        
        <div className="flex gap-4 mb-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              aria-label={social.label}
              data-testid={`link-footer-${social.label.toLowerCase()}`}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Chintha Shreya Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
