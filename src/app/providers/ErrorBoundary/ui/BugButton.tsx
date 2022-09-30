import { Button } from 'widgets/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      throw error
    </Button>
  );
};
