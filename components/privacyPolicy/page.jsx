'use client'

import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacyPolicy');

  // Helper function for consistent section styling
  const Section = ({ title, content, className = '' }) => (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{title}</h2>
      <div className="prose max-w-none text-gray-700 space-y-4">
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <div key={index} className="mb-6">
              {item.title && (
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
              )}
              <div className="whitespace-pre-wrap">{item.content}</div>
            </div>
          ))
        ) : (
          <div className="whitespace-pre-wrap">{content}</div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-600 text-left max-w-2xl mx-auto whitespace-pre-wrap">
            {t('summary')}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {t('sections', { returnObjects: true }).map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-medium">{t('updateTitle')}: {t('lastUpdate')}</p>
            <div>
              <p>{t('contact.email')}</p>
              <p>{t('contact.address')}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;