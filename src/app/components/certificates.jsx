import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
    const certs = [
        {
            title: "React - The Complete Guide 2024",
            issuer: "Udemy",
            date: "Ene 2024",
            link: "#"
        },
        {
            title: "Node.js Advanced Concepts",
            issuer: "Platzi",
            date: "Feb 2024",
            link: "#"
        },
        {
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "Mar 2024",
            link: "#"
        },
        {
            title: "TypeScript Masterclass",
            issuer: "Frontend Masters",
            date: "Abr 2024",
            link: "#"
        }
    ];

    const stats = [
        { value: "6+", label: "Certificaciones" },
        { value: "200+", label: "Horas de Estudio" },
        { value: "15+", label: "Cursos" },
        { value: "2024", label: "En Aprendizaje" }
    ];

    return (
        <section id="certificates" className="py-20 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Stats Panel */}
                    <div className="lg:w-1/3 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-24"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Aprendizaje Continuo</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Mi compromiso con la excelencia técnica me impulsa a mantenerme actualizado constantemente.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
                                        <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Certs Grid */}
                    <div className="lg:w-2/3 w-full grid md:grid-cols-2 gap-6">
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#1e293b] p-6 rounded-xl border border-white/5 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                            <Award size={24} />
                                        </div>
                                        <a href={cert.link} className="text-gray-500 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <h3 className="font-bold text-white mb-1">{cert.title}</h3>
                                    <p className="text-blue-400 text-sm mb-4">{cert.issuer}</p>
                                </div>

                                <div className="flex items-center text-gray-500 text-sm pt-4 border-t border-white/5">
                                    <Calendar size={16} className="mr-2" />
                                    {cert.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
