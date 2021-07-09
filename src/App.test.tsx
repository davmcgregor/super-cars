import {render, screen} from '@testing-library/react';
import App from './App';

test('App renders a search component', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText(/search.../i);
  expect(searchElement).toBeInTheDocument();
});
