import { render, screen } from '@testing-library/react';
import App from './App';
import { test } from 'vitest';

test('renders App component', () => {
  // Render the App component
  render(<App />);

  // Check if a specific text is in the document
  expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();
});
