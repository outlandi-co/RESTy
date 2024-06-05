// src/Components/Form/Form.test.jsx
import { render, fireEvent } from '@testing-library/react';
import Form from './index';

test('Form calls handleApiCall on submit', () => {
  const handleApiCall = jest.fn();
  const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCall} />);

  fireEvent.change(getByLabelText(/url/i), { target: { value: 'https://api.example.com' } });
  fireEvent.click(getByText(/go!/i));

  expect(handleApiCall).toHaveBeenCalledWith({
    method: 'GET',
    url: 'https://api.example.com',
  });
});
