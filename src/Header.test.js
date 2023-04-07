import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';

test('dummy test render check', () => {
  render(<Header />);
  const sampleText = screen.getByTestId('sample');
  expect(sampleText).toHaveTextContent('hai');
});
