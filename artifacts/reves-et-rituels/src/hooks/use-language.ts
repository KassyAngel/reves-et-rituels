import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, Language } from '../i18n/translations';

interface LanguageState {
  lang: Language;
  toggleLang: () => void;
  t: typeof translations.fr;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: 'fr',
      toggleLang: () => set((state) => ({ lang: state.lang === 'fr' ? 'en' : 'fr' })),
      get t() {
        return translations[get().lang];
      }
    }),
    {
      name: 'language-storage',
    }
  )
);
