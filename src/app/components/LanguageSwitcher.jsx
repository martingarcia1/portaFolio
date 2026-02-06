import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language.startsWith('es') ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
                ES
            </button>
            <span className="text-gray-600">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language.startsWith('en') ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
