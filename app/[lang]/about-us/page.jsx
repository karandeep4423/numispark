import About from "@/components/about-us/page";

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['about-us'].title,
    description: translations.metaData['about-us'].description,
    keywords: translations.metaData['about-us'].keywords,
  };
}

const AboutUs = () => {
  return (
    <div>
        <About />
    </div>
  );
};

export default AboutUs;
