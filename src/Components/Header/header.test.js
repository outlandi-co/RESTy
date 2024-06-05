import { render, screen } from '@testing-library/react';
import Header from './index';
import { test } from 'vitest';

test('renders Header', () => {
  render(<Header />);
  expect(screen.getByText(/Header/i)).toBeInTheDocument();
});
