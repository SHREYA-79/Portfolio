import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Database, BrainCircuit, BarChart3, Clock } from 'lucide-react';

type Category = 'All' | 'Data Engineering' | 'AI/ML' | 'BI/Analytics';

const projects = [
  {
    title: 'Retail Sales Data Warehouse & Business Intelligence Platform',
    description: 'Designed a SQL Server star-schema data warehouse supporting large-scale retail analytics. Built executive Power BI dashboards with customer segmentation, revenue analytics, and KPI monitoring.',
    stack: ['SQL Server', 'Power BI', 'DAX', 'Data Warehousing', 'Star Schema', 'ETL'],
    categories: ['Data Engineering', 'BI/Analytics'] as Category[],
    github: 'https://github.com/SHREYA-79/retail-sales-data-warehouse-bi-platform',
    demo: null,
    icon: Database,
    featured: true,
  },
  {
    title: 'DataLens AI',
    description: 'AI-powered analytics platform that automatically analyzes uploaded datasets and generates business insights. Features automated data profiling, anomaly detection, correlation analysis, and dynamic visualizations via Streamlit.',
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Machine Learning'],
    categories: ['AI/ML'] as Category[],
    github: 'https://github.com/SHREYA-79/DataLens-AI',
    demo: 'https://datalens-ai-de7yqdzsxq4ggm545sdwso.streamlit.app/',
    icon: BrainCircuit,
    featured: true,
  },
  {
    title: 'E-Commerce Customer Behavior & Sales Dashboard',
    description: 'Interactive Power BI dashboard analyzing customer behavior, revenue trends, payment preferences, product performance, and retention metrics. Features advanced DAX measures and interactive filtering for business users.',
    stack: ['Power BI', 'DAX', 'Data Visualization', 'Business Analytics'],
    categories: ['BI/Analytics'] as Category[],
    github: 'https://github.com/SHREYA-79/E-Commerce-PowerBI-Analysis',
    demo: null,
    icon: BarChart3,
    featured: false,
  },
  {
    title: 'IPL 2025 Player Analytics Dataset',
    description: 'Built a structured, analytics-ready dataset of 230+ IPL players from scratch using public sources, extensive data cleaning, feature engineering, and documentation. Published open-source for the sports analytics community.',
    stack: ['Python', 'Excel', 'Data Cleaning', 'Feature Engineering', 'Analytics'],
    categories: ['Data Engineering'] as Category[],
    github: 'https://github.com/SHREYA-79/ipl-2025-player-dataset',
    demo: null,
    icon: Database,
    featured: false,
  },
];

export function Projects() {
  const [filter, setFilter] = useState<Category>('All');
  const categories: Category[] = ['All', 'Data Engineering', 'AI/ML', 'BI/Analytics'];

  const filteredProjects = projects.filter((p) =>
    filter === 'All' ? true : p.categories.includes(filter)
  );

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">Hands-on work in data warehousing, AI analytics, and business intelligence.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`button-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                    : 'border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="glass-card flex flex-col h-full border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                  data-testid={`card-project-${i}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-accent group-hover:scale-110 transition-transform">
                          <project.icon className="w-5 h-5" />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {project.categories.map((cat) => (
                            <span key={cat} className="text-xs font-semibold text-accent tracking-wider uppercase">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.featured && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed mb-5">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 text-foreground/80 hover:bg-white/10 border-white/10 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-white/5 gap-3">
                    {project.github ? (
                      <Button variant="ghost" size="sm" asChild className="hover:bg-white/10" data-testid={`button-github-${i}`}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground px-2" data-testid={`label-github-soon-${i}`}>
                        <Clock className="w-3.5 h-3.5" />
                        GitHub link coming soon
                      </span>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild className="hover:bg-white/10" data-testid={`button-demo-${i}`}>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
