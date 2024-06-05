import { render, screen } from '@testing-library/react';
import Counter from './index';
import { test } from 'vitest';

test('should render a counter', () => {
  // Render the Counter component
  render(<Counter />);

  // Check if the text 'Counter...' (case insensitive) is in the document
  expect(screen.getByText(/Counter.../i)).toBeInTheDocument();
});
