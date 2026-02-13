import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
    SiJavascript, SiPython, SiMysql, SiHtml5, SiCss3,
    SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiMongodb,
    SiGit, SiGithub, SiPandas, SiNumpy, SiStreamlit, SiDotnet
} from 'react-icons/si';
import { Database, Server, Code, Layers, FileText, CheckCircle, Users, MessageSquare, ClipboardList } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    const techSkills = [
        {
            category: "Lenguajes",
            items: [
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "C#", icon: <SiDotnet className="text-purple-600" /> },
                { name: "Python", icon: <SiPython className="text-blue-500" /> },
                { name: "SQL", icon: <Database className="text-gray-400" /> }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
                { name: "React", icon: <SiReact className="text-cyan-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
                { name: "APIs REST", icon: <Server className="text-gray-400" /> }
            ]
        },
        {
            category: "Bases de Datos",
            items: [
                { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
            ]
        },
        {
            category: "Librerías",
            items: [
                { name: "Pandas", icon: <SiPandas className="text-purple-800" /> },
                { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
                { name: "Matplotlib", icon: <FileText className="text-orange-400" /> }, // Generic for Matplotlib
                { name: "Streamlit", icon: <SiStreamlit className="text-red-500" /> }
            ]
        },
        {
            category: "Herramientas & Otros",
            items: [
                { name: "Git", icon: <SiGit className="text-orange-600" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
                { name: "SOLID", icon: <Layers className="text-blue-300" /> },
                { name: "Clean Code", icon: <Code className="text-green-400" /> },
                { name: "Clean Arch", icon: <CheckCircle className="text-yellow-400" /> }
            ]
        }
    ];

    const softSkills = [
        { name: "Resolución de problemas", icon: <CheckCircle /> },
        { name: "Comunicación clara", icon: <MessageSquare /> },
        { name: "Organización", icon: <ClipboardList /> },
        { name: "Trabajo en equipo", icon: <Users /> }
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-[#111927]/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t('skills.title')}</h2>
                    <p className="text-gray-400">{t('skills.description')}</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left border-b border-white/10 pb-4">
                            {t('skills.title2')}
                        </h3>
                        <div className="grid gap-8">
                            {techSkills.map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <h4 className="text-lg font-semibold text-blue-400 mb-4">{t(cat.category)}</h4>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                        {cat.items.map((skill, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="bg-[#1e293b] p-3 rounded-xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all flex flex-col items-center justify-center gap-2 group"
                                            >
                                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-xs text-gray-300 font-medium text-center">{t(skill.name)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left border-b border-white/10 pb-4">
                            {t('skills.title3')}
                        </h3>
                        <div className="grid gap-4">
                            {softSkills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center p-4 bg-[#1e293b] rounded-xl border border-white/5 hover:border-green-500/30 transition-colors"
                                >
                                    <div className="p-3 bg-green-500/10 text-green-400 rounded-lg mr-4">
                                        {skill.icon}
                                    </div>
                                    <span className="text-gray-200 font-medium">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
