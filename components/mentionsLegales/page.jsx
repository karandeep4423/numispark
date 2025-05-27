'use client'

import { useTranslation } from 'react-i18next';

const LegalNoticePage = () => {
  const { t } = useTranslation('legalNotice');

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto   rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {t('legalNotice.title')}
        </h1>

        {/* Company Information Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.company_info.title')}
          </h2>
          <div className="space-y-3">
            <p><span className="font-medium"> {t('legalNotice.company_info.labelName')}:</span> {t('legalNotice.company_info.name')}</p>
            <p><span className="font-medium">{t('legalNotice.company_info.labelLegalForm')}:</span> {t('legalNotice.company_info.legal_form')}</p>
            <p><span className="font-medium">{t('legalNotice.company_info.labelCapital')}:</span> {t('legalNotice.company_info.capital')}</p>
            <p><span className="font-medium">{t('legalNotice.company_info.labelAddress')}:</span> {t('legalNotice.company_info.address')}</p>
            <p><span className="font-medium">{t('legalNotice.company_info.labelSiren')}:</span> {t('legalNotice.company_info.siren')}</p>
            <p><span className="font-medium">{t('legalNotice.company_info.labelSiret')}:</span> {t('legalNotice.company_info.siret')}</p>
            <p><span className="font-medium">{t('legalNotice.company_info.labelApe')}:</span> {t('legalNotice.company_info.ape')}</p>
          </div>
        </section>

        {/* Management Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.management.title')}
          </h2>
          <div className="space-y-3">
            <p><span className="font-medium">{t('legalNotice.management.labelManager')}:</span> {t('legalNotice.management.manager')}</p>
            <p><span className="font-medium">{t('legalNotice.management.labelPublisher')}:</span> {t('legalNotice.management.publisher')}</p>
          </div>
        </section>

        {/* Hosting Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.hosting.title')}
          </h2>
          <div className="space-y-3">
            <p><span className="font-medium">{t('legalNotice.hosting.labelHosting')}:</span> {t('legalNotice.hosting.company')}</p>
            <p><span className="font-medium">{t('legalNotice.hosting.labelAddress')}:</span> {t('legalNotice.hosting.address')}</p>
            <p><span className="font-medium">{t('legalNotice.hosting.labelWebsite')}:</span> 
              <a href={t('legalNotice.hosting.website')} 
                 className="text-blue-600 hover:text-blue-800 ml-2"
                 target="_blank" 
                 rel="noopener noreferrer">
                {t('legalNotice.hosting.website')}
              </a>
            </p>
          </div>
        </section>

        {/* Intellectual Property Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.intellectual_property.title')}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>{t('legalNotice.intellectual_property.content')}</p>
            <p>{t('legalNotice.intellectual_property.unauthorized_use')}</p>
          </div>
        </section>

        {/* Data Collection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.data_collection.title')}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>{t('legalNotice.data_collection.protection_laws')}</p>
            <p>{t('legalNotice.data_collection.collected_info')}</p>
            <p>{t('legalNotice.data_collection.user_consent')}</p>
          </div>
        </section>

        {/* Cookies Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.cookies.title')}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>{t('legalNotice.cookies.usage')}</p>
            <p>{t('legalNotice.cookies.google_analytics.description')}</p>
            <p>{t('legalNotice.cookies.google_analytics.data_usage')}</p>
            <p>{t('legalNotice.cookies.disable_notice')}</p>
          </div>
        </section>

        {/* Rights Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.rights.title')}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>{t('legalNotice.rights.description')}</p>
            <p>{t('legalNotice.rights.exercise_rights')}</p>
          </div>
        </section>

        {/* Jurisdiction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('legalNotice.jurisdiction.title')}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>{t('legalNotice.jurisdiction.text')}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalNoticePage;