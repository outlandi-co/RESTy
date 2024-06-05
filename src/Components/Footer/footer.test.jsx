// src/Components/Footer/Footer.test.jsx
import { render } from '@testing-library/react';
import Footer from './index';

test('renders Footer', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/© 2024/i)).toBeInTheDocument();
});
