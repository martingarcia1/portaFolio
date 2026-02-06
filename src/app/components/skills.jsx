import { motion } from 'motion/react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "Tailwind CSS", level: 95 },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "PostgreSQL", level: 75 },
                { name: "MongoDB", level: 80 },
            ]
        },
        {
            title: "Herramientas",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "Figma", level: 75 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-[#111927]/30">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Habilidades Técnicas</h2>
                    <p className="text-gray-400">Mi stack tecnológico y nivel de competencia actual.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-[#1e293b]/50 rounded-2xl border border-white/5"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between mb-2 text-sm">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-blue-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
