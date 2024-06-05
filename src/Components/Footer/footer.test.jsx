import { render, screen } from '@testing-library/react';
import Counter from './index';
import { test } from 'vitest';

test('should render a counter', () => {
  render(<Counter />);
  expect(screen.getByText(/Counter.../i)).toBeInTheDocument();
});
