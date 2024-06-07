// src/__tests__/App.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, title: 'Post 1' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders and fetches data on form submit', async () => {
  render(<App />);
  
  fireEvent.change(screen.getByPlaceholderText('URL'), {
    target: { value: 'https://jsonplaceholder.typicode.com/posts' },
  });
  fireEvent.click(screen.getByText('Go'));
  
  await waitFor(() => {
    expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
  });
});

test('stores API call history and allows replay', async () => {
  render(<App />);
  
  fireEvent.change(screen.getByPlaceholderText('URL'), {
    target: { value: 'https://jsonplaceholder.typicode.com/posts' },
  });
  fireEvent.click(screen.getByText('Go'));

  await waitFor(() => {
    expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText('https://jsonplaceholder.typicode.com/posts'));

  await waitFor(() => {
    expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
  });
});
