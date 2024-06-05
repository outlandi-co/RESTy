// src/Components/Header/Header.test.jsx
import { render } from '@testing-library/react';
import Header from './index';

test('renders Header', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/RESTy/i)).toBeInTheDocument();
});
