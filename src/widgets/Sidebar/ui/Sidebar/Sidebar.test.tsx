import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });

  test('', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });
});
