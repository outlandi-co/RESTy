import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

// Mock the fetchData function
jest.mock('./path/to/your/file', () => ({
  ...jest.requireActual('./path/to/your/file'),
  fetchData: jest.fn().mockResolvedValue('fakeData'),
}));

describe('Form Component', () => {
  test('renders form fields correctly', () => {
    const { getByLabelText, getByText } = render(<Form handleApiCall={() => {}} />);
    
    expect(getByLabelText('URL:')).toBeInTheDocument();
    expect(getByLabelText('Method:')).toBeInTheDocument();
    expect(getByText('GO!')).toBeInTheDocument();
  });

  test('handles form submission correctly', () => {
    const handleApiCall = jest.fn();
    const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCall} />);

    fireEvent.change(getByLabelText('URL:'), { target: { value: 'https://api.example.com/data' } });
    fireEvent.click(getByText('GET'));

    fireEvent.click(getByText('GO!'));

    expect(handleApiCall).toHaveBeenCalledWith({
      url: 'https://api.example.com/data',
      method: 'GET',
      body: null,
    });
  });
});



// // Form.test.jsx

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Form from './Form';

// describe('Form Component', () => {
//   test('renders form fields correctly', () => {
//     const { getByLabelText, getByText } = render(<Form handleApiCall={() => {}} />);
    
//     expect(getByLabelText('URL:')).toBeInTheDocument();
//     expect(getByLabelText('Method:')).toBeInTheDocument();
//     expect(getByText('GO!')).toBeInTheDocument();
//   });

//   test('handles form submission correctly', () => {
//     const handleApiCall = jest.fn();
//     const { getByText, getByLabelText } = render(<Form handleApiCall={handleApiCall} />);

//     fireEvent.change(getByLabelText('URL:'), { target: { value: 'https://api.example.com/data' } });
//     fireEvent.click(getByText('GET'));

//     fireEvent.click(getByText('GO!'));

//     expect(handleApiCall).toHaveBeenCalledWith({
//       url: 'https://api.example.com/data',
//       method: 'GET',
//       body: null,
//     });
//   });
// });
