import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import meras from "../../assets/image.png";

const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: "E-Commerce de indumentaria meras",
            tech: ["React", "Tailwind", "MySQL Workbench", "NestJS"],
            desc: "Plataforma completa de e-commerce de indumentaria con personalizador de prendas 2D.",
            links: { github: "https://github.com/martingarcia1/meras", demo: "https://meras-front.vercel.app/" },
            image: meras
        },
        {
            title: "Task Management App",
            tech: ["React Native", "Firebase", "TypeScript"],
            desc: "Aplicación móvil para gestión de tareas colaborativas en tiempo real.",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Social Media Dashboard",
            tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
            desc: "Dashboard analítico para visualización de métricas de redes sociales.",
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t('projects.title')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#1e293b]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent opacity-60 z-10" />
                                <div className="w-full h-full flex items-center justify-center text-gray-600">
                                    <img src={project.image} alt="" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-blue-200 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                        <ExternalLink size={18} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
