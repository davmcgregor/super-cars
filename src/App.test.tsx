import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders search component', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText(/search.../i);
  expect(searchElement).toBeInTheDocument();
});
