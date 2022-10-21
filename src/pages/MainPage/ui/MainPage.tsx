import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
      <Input
        placeholder="Привет"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default MainPage;
