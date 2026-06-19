import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  SiPython, SiJavascript, SiCplusplus, SiMysql,
  SiGit, SiGithub, SiJupyter, SiGooglecolab, SiStreamlit,
  SiPandas, SiNumpy, SiPlotly, SiScikitlearn,
  SiGooglecloud, SiPostgresql, SiR, SiAnaconda,
  SiKaggle, SiHuggingface, SiOpenai,
} from 'react-icons/si';
import {
  Code2, Database, BarChart3, BrainCircuit, Wrench,
  FileSpreadsheet, Server, Bot, Cloud, LineChart,
  GitBranch, Layers, Filter, Workflow, PieChart,
  Cpu, FlaskConical, Sigma, ChartBar, TableProperties,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'from-violet-500/20 to-purple-500/10',
    borderColor: 'hover:border-violet-500/40',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: Database },
      { name: 'Java', icon: Code2 },
      { name: 'C++', icon: SiCplusplus },
      { name: 'R', icon: SiR },
      { name: 'DAX', icon: Sigma },
    ],
  },
  {
    title: 'Analytics & BI',
    icon: BarChart3,
    color: 'from-fuchsia-500/20 to-pink-500/10',
    borderColor: 'hover:border-fuchsia-500/40',
    skills: [
      { name: 'Power BI', icon: ChartBar },
      { name: 'Power Query', icon: Filter },
      { name: 'Excel', icon: FileSpreadsheet },
      { name: 'DAX Formulas', icon: Sigma },
      { name: 'KPI Development', icon: LineChart },
      { name: 'Data Visualization', icon: PieChart },
      { name: 'Statistical Analysis', icon: BarChart3 },
      { name: 'Dashboard Design', icon: TableProperties },
      { name: 'Business Intelligence', icon: Layers },
    ],
  },
  {
    title: 'Data Libraries',
    icon: FlaskConical,
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'hover:border-purple-500/40',
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Plotly', icon: SiPlotly },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Matplotlib', icon: LineChart },
      { name: 'Seaborn', icon: BarChart3 },
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    color: 'from-indigo-500/20 to-blue-500/10',
    borderColor: 'hover:border-indigo-500/40',
    skills: [
      { name: 'SQL Server', icon: Server },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Data Warehousing', icon: Database },
      { name: 'Star Schema', icon: Layers },
      { name: 'ETL Pipelines', icon: Workflow },
      { name: 'Data Modeling', icon: GitBranch },
      { name: 'Data Cleaning', icon: Filter },
      { name: 'Feature Engineering', icon: Cpu },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    color: 'from-violet-500/20 to-fuchsia-500/10',
    borderColor: 'hover:border-violet-500/40',
    skills: [
      { name: 'Machine Learning', icon: BrainCircuit },
      { name: 'Generative AI', icon: SiOpenai },
      { name: 'NLP', icon: BrainCircuit },
      { name: 'Semantic Search', icon: BrainCircuit },
      { name: 'Recommendation Systems', icon: BrainCircuit },
      { name: 'LLMs', icon: Bot },
      { name: 'Prompt Engineering', icon: Code2 },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'RAG', icon: Layers },
    ],
  },
  {
    title: 'Cloud & Platforms',
    icon: Cloud,
    color: 'from-sky-500/20 to-indigo-500/10',
    borderColor: 'hover:border-sky-500/40',
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Oracle Cloud', icon: Cloud },
      { name: 'Kaggle', icon: SiKaggle },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'from-purple-500/20 to-violet-500/10',
    borderColor: 'hover:border-purple-500/40',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitHub Pages', icon: SiGithub },
      { name: 'Jupyter Notebook', icon: SiJupyter },
      { name: 'Google Colab', icon: SiGooglecolab },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Anaconda', icon: SiAnaconda },
      { name: 'VS Code', icon: Code2 },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState<string>('All');
  const tabs = ['All', ...skillCategories.map((c) => c.title)];
  const filtered = active === 'All' ? skillCategories : skillCategories.filter((c) => c.title === active);

  return (
    <section className="py-24 relative bg-card/30" id="skills">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">50+ tools and technologies across data, AI, and engineering</p>
        </motion.div>

        {/* Tab filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              data-testid={`tab-skill-${tab.toLowerCase()}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === tab
                  ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                  : 'border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Card
                  className={`glass-card p-6 h-full border-white/5 transition-all duration-300 bg-gradient-to-br ${category.color} ${category.borderColor}`}
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-accent">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="px-2.5 py-1 bg-white/5 hover:bg-primary/20 text-foreground/80 hover:text-foreground text-xs font-medium border border-white/8 hover:border-primary/30 transition-all duration-200 cursor-default"
                        data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <skill.icon className="w-3.5 h-3.5 mr-1.5 text-accent inline-block flex-shrink-0" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
