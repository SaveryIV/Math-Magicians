import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Quotes from './Quotes';

describe('Quote component', () => {
  it('should render loading while fetching data', () => {
    render(<Quotes />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
