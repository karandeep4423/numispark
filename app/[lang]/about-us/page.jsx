'use client'
import useTranslation from '@/lib/i18n'
// import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function AboutUs(params) {
  const { t } =  useTranslation();
console.log("param",params)
  return (
    <div className="container mx-auto px-4">
      <header className="py-4">
        <nav className="flex justify-between items-center">
          <div className="flex gap-4">
            <a href="/">{t('header.home')}</a>
            <a href="/about">{t('header.about')}</a>
            <a href="/contact">{t('header.contact')}</a>
          </div>
          {/* <LanguageSwitcher /> */}
        </nav>
      </header>

      <main className="py-8">
        <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg mb-4">{t('hero.description')}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {t('hero.button')}
        </button>
      </main>

      <footer className="py-4">
        <p>{t('footer.rights')}</p>
      </footer>
    </div>
  )
}