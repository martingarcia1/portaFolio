import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { name: t('header.hero'), id: 'hero' },
        { name: t('header.about'), id: 'about' },
        { name: t('header.projects'), id: 'projects' },
        { name: t('header.skills'), id: 'skills' },
        { name: t('header.certificates'), id: 'certificates' },
        { name: t('header.contact'), id: 'contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111927]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
                    onClick={() => scrollToSection('hero')}
                >
                    Portfolio.
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                        >
                            {item.name}
                        </button>
                    ))}
                    <div className="border-l border-gray-700 pl-6 ml-2">
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        className="text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-16 left-0 right-0 bg-[#111927] border-b border-gray-800 p-4 md:hidden flex flex-col space-y-4 shadow-xl"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left text-gray-300 hover:text-white py-2 px-4 rounded hover:bg-white/5"
                            >
                                {item.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
