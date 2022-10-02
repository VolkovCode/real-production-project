import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'widgets/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('язык')}
    </Button>
  );
};