import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders header and form', () => {
    const { getByText, getByLabelText } = render(<App />);
    
    expect(getByText('RESTy')).toBeInTheDocument();
    expect(getByLabelText('URL:')).toBeInTheDocument();
    expect(getByLabelText('Method:')).toBeInTheDocument();
    expect(getByText('GO!')).toBeInTheDocument();
  });

  // You can write more tests for other scenarios, such as API call handling and displaying results.
});




// // App.test.jsx

// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// describe('App Component', () => {
//   test('renders header and form', () => {
//     const { getByText, getByLabelText } = render(<App />);
    
//     expect(getByText('RESTy')).toBeInTheDocument();
//     expect(getByLabelText('URL:')).toBeInTheDocument();
//     expect(getByLabelText('Method:')).toBeInTheDocument();
//     expect(getByText('GO!')).toBeInTheDocument();
//   });

//   // You can write more tests for other scenarios, such as API call handling and displaying results.
// });
