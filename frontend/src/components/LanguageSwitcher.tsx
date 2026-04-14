'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Lang, languageLabels } from '@/data/i18n';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  const currentLang: Lang = (searchParams.get('lang') as Lang) || 'en';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('lang', lang);
    router.push(`?${newParams.toString()}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="language-switcher">
      <select 
        value={currentLang} 
        onChange={handleLanguageChange}
        className="language-select"
        aria-label="Select language"
      >
        {(Object.keys(languageLabels) as Lang[]).map((lang) => (
          <option key={lang} value={lang}>
            {languageLabels[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}
