import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results';

// Mock the fetchData function
jest.mock('./path/to/your/file', () => ({
  ...jest.requireActual('./path/to/your/file'),
  fetchData: jest.fn().mockResolvedValue('fakeData'),
}));

describe('Results Component', () => {
  test('renders loading message if data is null', () => {
    const { getByText } = render(<Results data={null} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message if error is present', () => {
    const { getByText } = render(<Results error="Error occurred" />);
    expect(getByText('Error occurred')).toBeInTheDocument();
  });

  test('renders data if data is present', () => {
    const data = { name: 'John Doe', age: 30 };
    const { getByText } = render(<Results data={data} />);
    expect(getByText('Name: John Doe')).toBeInTheDocument();
    expect(getByText('Age: 30')).toBeInTheDocument();
  });
});




// // Results.test.jsx

// import React from 'react';
// import { render } from '@testing-library/react';
// import Results from './Results';

// describe('Results Component', () => {
//   test('renders loading message if data is null', () => {
//     const { getByText } = render(<Results data={null} />);
//     expect(getByText('Loading...')).toBeInTheDocument();
//   });

//   test('renders error message if error is present', () => {
//     const { getByText } = render(<Results error="Error occurred" />);
//     expect(getByText('Error occurred')).toBeInTheDocument();
//   });

//   test('renders data if data is present', () => {
//     const data = { name: 'John Doe', age: 30 };
//     const { getByText } = render(<Results data={data} />);
//     expect(getByText('Name: John Doe')).toBeInTheDocument();
//     expect(getByText('Age: 30')).toBeInTheDocument();
//   });
// });
