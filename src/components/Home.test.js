import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Home from './Home';

describe('Testing Home', () => {
});
test('Render Home component', () => {
  const { getByTestId } = render(<Home />);
  const element = getByTestId('display');
  expect(element).toBeInTheDocument();
});
