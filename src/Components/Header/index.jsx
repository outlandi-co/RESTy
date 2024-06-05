import { render, screen } from '@testing-library/react';
import Header from './index';
import { test } from 'vitest';

test('renders Header', () => {
  // Render the Header component
  render(<Header />);

  // Check if the text 'Header' (case insensitive) is in the document
  expect(screen.getByText(/Header/i)).toBeInTheDocument();
});
