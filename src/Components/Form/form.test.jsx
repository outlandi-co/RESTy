// src/Components/Form/Form.test.jsx
import { render, fireEvent } from '@testing-library/react';
import Form from './index';

test('Form calls handleApiCall on submit', () => {
  // Mock function to track API call
  const handleApiCall = jest.fn();

  // Render the Form component with the mock function as a prop
  const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCall} />);

  // Simulate user entering URL in the input field
  fireEvent.change(getByLabelText(/url/i), { target: { value: 'https://api.example.com' } });

  // Simulate user clicking the submit button
  fireEvent.click(getByText(/go!/i));

  // Check if the handleApiCall function was called with the correct parameters
  expect(handleApiCall).toHaveBeenCalledWith({
    method: 'GET',
    url: 'https://api.example.com',
  });
});
