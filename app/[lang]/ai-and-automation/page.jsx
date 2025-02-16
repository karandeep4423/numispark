import AiDevelopment from '@/components/ai-and-automation/page';

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['ai-and-automation'].title,
    description: translations.metaData['ai-and-automation'].description,
    keywords: translations.metaData['ai-and-automation'].keywords,
  };
}

const AiDevel = () => {
  return (
    <div>
      <AiDevelopment />
    </div>
  );
};

export default AiDevel;
