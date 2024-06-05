// src/Components/Results/Results.test.jsx
import { render } from '@testing-library/react';
import Results from './index';

test('renders Results with data', () => {
  const data = { key: 'value' };
  const { getByText } = render(<Results data={data} />);
  expect(getByText(/"key": "value"/i)).toBeInTheDocument();
});

test('renders Results without data', () => {
  const { container } = render(<Results data={null} />);
  expect(container).toBeEmptyDOMElement();
});
