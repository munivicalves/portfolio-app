import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the sidebar profile name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Munique Victória/i);
  expect(nameElement).toBeInTheDocument();
});
