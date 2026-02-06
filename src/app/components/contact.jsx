import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('¡Gracias por tu mensaje! (Funcionalidad demo)');
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-[#0f172a]">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1e293b]/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Contáctame</h2>
                            <p className="text-gray-400 mb-8">
                                ¿Tienes un proyecto en mente o simplemente quieres saludar?
                                Estoy disponible para nuevas oportunidades.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center text-gray-300">
                                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mr-4">
                                        <Mail size={20} />
                                    </div>
                                    <span>martingarcia.code@gmail.com</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mr-4">
                                        <Phone size={20} />
                                    </div>
                                    <span>+54 (381) 3487804</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mr-4">
                                        <MapPin size={20} />
                                    </div>
                                    <span>Remote / San Miguel de Tucumán, Argentina</span>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#111927] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#111927] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#111927] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                    placeholder="¿Cómo puedo ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Enviar Mensaje <Send size={18} />
                            </button>
                        </form>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
