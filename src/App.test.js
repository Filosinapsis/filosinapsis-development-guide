import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders slogan without crash', () => {
  const { getByText } = render(<App />);
  const sloganElement = getByText(/Creando software para el aprendizaje/i);
  expect(sloganElement).toBeInTheDocument();
});
