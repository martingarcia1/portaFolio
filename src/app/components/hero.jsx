import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '../../assets/WhatsApp Image 2026-02-05 at 22.30.47.jpeg';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl text-blue-400 font-semibold mb-2">Hola, soy</h2>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                            Desarrollador <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                Full Stack
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Construyendo experiencias digitales modernas, escalables y visualmente impactantes.
                            Especializado en React y ecosistemas cloud.
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start items-center mb-10">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all border border-white/5">
                                <Github size={24} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all border border-white/5">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:contact@example.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all border border-white/5">
                                <Mail size={24} />
                            </a>
                        </div>

                        <button
                            onClick={scrollToProjects}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
                        >
                            Ver Proyectos
                        </button>
                    </motion.div>
                </div>

                {/* Visual Content (Avatar/Abstract) */}
                <div className="flex-1 flex justify-center z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="relative w-72 h-72 lg:w-96 lg:h-96"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

                        {/* Circular Avatar Placeholder */}
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-[#111927]/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            <img
                                className="w-full h-full object-cover"
                                src={profileImage}
                                alt="Profile"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-gray-500 hover:text-white"
                onClick={scrollToProjects}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
