import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormStatus(null);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setFormStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error('FAILED...', error);
            setFormStatus('error');
        } finally {
            setIsLoading(false);
        }
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
                            <h2 className="text-3xl font-bold text-white mb-6">{t('contact.title')}</h2>
                            <p className="text-gray-400 mb-8">
                                {t('contact.description')}
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
                                    <span>+54 (381) 348-7804</span>
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
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-[#111927] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
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
                                    className="w-full bg-[#111927] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                    placeholder="¿Cómo puedo ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>Enviando... <Loader2 size={18} className="animate-spin" /></>
                                ) : (
                                    <>Enviar Mensaje <Send size={18} /></>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-green-400 text-sm text-center mt-2"
                                >
                                    ¡Mensaje enviado con éxito!
                                </motion.p>
                            )}
                            {formStatus === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-red-400 text-sm text-center mt-2"
                                >
                                    Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                                </motion.p>
                            )}
                        </form>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
