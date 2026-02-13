import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import jsCert from "../../assets/74cb8bee-7731-43a5-bdec-d5f42c97c210.png";
import reactCert from "../../assets/b51affe4-9a1c-4dbe-8941-90f5944d7d38.png";
import utnCert from "../../assets/UTN.png";
import { useTranslation } from 'react-i18next';

const Certificates = () => {
    const { t } = useTranslation();
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        {
            title: "Tecnicatura Universitaria en Programación",
            issuer: "Universidad Tecnológica Nacional - Facultad Regional Tucumán",
            date: "2023 - 2025",
            link: "",
            img: utnCert
        },
        {
            title: "JavaScript",
            issuer: "CoderHouse - Carrera de Desarrollo Frontend React ",
            date: "Abr - Jun 2025",
            link: "https://pub.coderhouse.com/certificates/74cb8bee-7731-43a5-bdec-d5f42c97c210?v=1",
            img: jsCert
        },
        {
            title: "React Js",
            issuer: "CoderHouse - Carrera de Desarrollo Frontend React",
            date: "Jun - Jul 2025",
            link: "https://pub.coderhouse.com/certificates/b51affe4-9a1c-4dbe-8941-90f5944d7d38?v=1",
            img: reactCert
        }
    ];

    const stats = [
        { value: "4+", label: "Certificaciones" },
        { value: "1980+", label: "Horas de Estudio" },
        { value: "3+", label: "Cursos" },
        { value: "2023", label: "En Aprendizaje" }
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
                            <h2 className="text-3xl font-bold text-white mb-6">{t('certificates.title')}</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {t('certificates.description')}
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
                    <div className="lg:w-2/3 w-full grid md:grid-cols-2 gap-4">
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#1e293b] p-4 rounded-xl border border-white/5 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
                            >
                                <div>
                                    {cert.img && (
                                        <div
                                            className="cursor-pointer overflow-hidden rounded-lg mb-4 group"
                                            onClick={() => setSelectedCert(cert)}
                                        >
                                            <img
                                                src={cert.img}
                                                alt={cert.title}
                                                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
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

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                            className="relative max-w-4xl max-h-[90vh] bg-[#1e293b] rounded-2xl p-2 border border-white/10 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedCert.img}
                                alt={selectedCert.title}
                                className="w-full h-full object-contain max-h-[85vh] rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
