import { motion } from 'motion/react';
import { Code2, Rocket, Users } from 'lucide-react';
import profileImage from '../../assets/WhatsApp Image 2025-07-02 at 14.46.00.jpeg';

const About = () => {
    const features = [
        {
            icon: <Code2 size={24} />,
            title: "Código Limpio",
            desc: "Arquitectura escalable y mantenible."
        },
        {
            icon: <Rocket size={24} />,
            title: "Innovación",
            desc: "Soluciones modernas y eficientes."
        },
        {
            icon: <Users size={24} />,
            title: "Trabajo en Equipo",
            desc: "Comunicación clara y colaboración."
        }
    ];

    return (
        <section id="about" className="py-20 px-6 bg-[#111927]/50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image/Visual */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                        <div className="relative bg-[#1e293b] rounded-2xl p-2 border border-white/10 overflow-hidden h-80 flex items-center justify-center">
                            <img
                                className="w-full h-full object-cover"
                                src={profileImage}
                                alt="Profile"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white text-center md:text-left">
                            Sobre <span className="text-blue-400">Mí</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Soy un desarrollador apasionado por crear soluciones tecnológicas que impactan.
                            Con una base sólida en ciencias de la computación y años de experiencia práctica,
                            me dedico a transformar ideas complejas en aplicaciones web intuitivas y de alto rendimiento.
                            Siempre estoy buscando nuevas tecnologías para incorporar a mi stack.
                        </p>

                        <div className="grid gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg mr-4">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">{feature.title}</h3>
                                        <p className="text-sm text-gray-400">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
