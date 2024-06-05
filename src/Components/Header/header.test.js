import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders header title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('RESTy')).toBeInTheDocument();
  });
});




// // Header.test.jsx

// import React from 'react';
// import { render } from '@testing-library/react';
// import Header from './Header';

// describe('Header Component', () => {
//   test('renders header title', () => {
//     const { getByText } = render(<Header />);
//     expect(getByText('RESTy')).toBeInTheDocument();
//   });
// });
