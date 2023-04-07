import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const sampleText = screen.getByText(/hjhhlhl/i);
  expect(sampleText).toBeInTheDocument();
});
