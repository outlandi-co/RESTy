// src/__tests__/App.test.jsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('renders App and makes an API call', async () => {
  render(<App />);

  const urlInput = screen.getByLabelText(/url/i);
  fireEvent.change(urlInput, { target: { value: 'https://api.example.com' } });

  const goButton = screen.getByText(/go!/i);
  fireEvent.click(goButton);

  await waitFor(() => {
    expect(screen.getByText(/request method/i)).toHaveTextContent('GET');
    expect(screen.getByText(/url/i)).toHaveTextContent('https://api.example.com');
  });
});
