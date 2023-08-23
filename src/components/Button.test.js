import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import CalculatorButton from './Button';

test('renders button with correct label', () => {
  const { getByText } = render(<CalculatorButton label="AC" />);
  const buttonElement = getByText('AC');
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<CalculatorButton label="AC" onClick={onClickMock} />);
  const buttonElement = getByText('AC');

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
