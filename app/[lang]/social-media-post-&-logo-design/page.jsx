import SocialMediaLogoDesign from "@/components/social-media-post/page";

export async function generateMetadata({ params: { lang } }) {
  // Load translations directly from JSON files
  const translations = await import(
    `@/public/locales/${lang}/metaData.json`
  );

  return {
    title: translations.metaData['social-media-post-&-logo-design'].title,
    description: translations.metaData['social-media-post-&-logo-design'].description,
    keywords: translations.metaData['social-media-post-&-logo-design'].keywords,
  };
}

const socialMediaLog = () => {
  return (
    <div>
      <SocialMediaLogoDesign/>
    </div>
  );
};

export default socialMediaLog;