import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div>
      ывфавыаыв
      {t('О сайте')}
    </div>
  );
}

export default AboutPage;
