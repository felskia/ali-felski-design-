import { motion } from "motion/react";
import { Code2, Database, Layout, Server, Smartphone, Terminal } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-brand-accent" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Motion", "Next.js"]
    },
    {
      title: "Backend",
      icon: <Server className="text-brand-accent" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      title: "Tools",
      icon: <Terminal className="text-brand-accent" />,
      skills: ["Git", "Docker", "AWS", "Vite", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical Skills</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-brand-accent/30 transition-colors"
            >
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass rounded-xl text-sm font-medium hover:bg-brand-accent hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
