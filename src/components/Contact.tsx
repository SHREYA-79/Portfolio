import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SiMedium, SiLeetcode } from 'react-icons/si';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shreya.61219@gmail.com', href: 'mailto:shreya.61219@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'shreya-reddy-chintha6', href: 'https://www.linkedin.com/in/shreya-reddy-chintha6/' },
  { icon: Github, label: 'GitHub', value: 'SHREYA-79', href: 'https://github.com/SHREYA-79' },
  { icon: SiMedium, label: 'Medium', value: '@shreya.61219', href: 'https://medium.com/@shreya.61219' },
  { icon: SiLeetcode, label: 'LeetCode', value: 'Shreyareddy6', href: 'https://leetcode.com/u/Shreyareddy6/' },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 relative bg-card/30" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Open to internships, full-time opportunities, analytics projects, and professional networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block group"
                data-testid={`link-contact-${info.label.toLowerCase()}`}
              >
                <Card className="glass-card p-4 flex items-center gap-4 border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">{info.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors truncate max-w-[200px] sm:max-w-xs">
                      {info.value}
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="glass-card p-8 border-white/10 bg-background/50">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  data-testid="contact-success-message"
                >
                  <CheckCircle className="w-14 h-14 text-green-400" />
                  <p className="text-xl font-semibold text-foreground">
                    Thank you! Your message has been sent successfully.
                  </p>
                  <p className="text-muted-foreground">I will get back to you as soon as possible.</p>
                  <Button
                    variant="outline"
                    className="mt-2 border-white/10 hover:bg-white/5"
                    onClick={() => setStatus('idle')}
                    data-testid="button-send-another"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-black/20 border-white/10 focus-visible:border-primary"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-black/20 border-white/10 focus-visible:border-primary"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Opportunities, Networking, etc."
                      required
                      className="bg-black/20 border-white/10 focus-visible:border-primary"
                      data-testid="input-contact-subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hello Shreya, I'd like to talk about..."
                      required
                      className="min-h-[150px] bg-black/20 border-white/10 focus-visible:border-primary resize-y"
                      data-testid="input-contact-message"
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="flex items-center gap-2 text-red-400 text-sm"
                      data-testid="contact-error-message"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Something went wrong. Please try again or email me directly at shreya.61219@gmail.com</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full h-12 text-base font-medium"
                    data-testid="button-contact-submit"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
