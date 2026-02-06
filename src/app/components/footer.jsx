import { Instagram, Facebook, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const year = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-[#0f172a] py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="flex items-center justify-center text-gray-500 mb-2">
                    {t('footer.title')}
                    {/* <Heart size={16} className="mx-2 text-red-500 fill-red-500" /> */}
                </p>
                <p className="text-gray-600 text-sm">
                    &copy; {year} Portfolio. {t('footer.description')}
                </p>
                {/* Redes Sociales, Instagram, facebook, github, Linkedin */}
                <div className="flex items-center justify-center mt-6 gap-6">
                    <a href="https://www.instagram.com/martiin_garcia_/" className="text-gray-500 hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                    {/* <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Facebook size={20} />
                    </a> */}
                    <a href="https://github.com/martingarcia1" className="text-gray-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/sergio-martingarcia/" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
