import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero and pricing section', () => {
  render(<App />);
  expect(screen.getByText(/Build Real Maths Confidence/i)).toBeInTheDocument();
  expect(screen.getByText(/Simple, Transparent Pricing/i)).toBeInTheDocument();
});
