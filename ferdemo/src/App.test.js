import { render, screen } from '@testing-library/react';
import App from './App';

test('renders food order heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /đặt đồ ăn/i })).toBeInTheDocument();
});
