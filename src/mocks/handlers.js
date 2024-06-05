// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ])
    );
  }),
];
