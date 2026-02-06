import { Heart } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="flex items-center justify-center text-gray-500 mb-2">
                    Hecho con <Heart size={16} className="mx-2 text-red-500 fill-red-500" /> por Martín
                </p>
                <p className="text-gray-600 text-sm">
                    &copy; {year} Portfolio. Construido con React, Tailwind & Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
