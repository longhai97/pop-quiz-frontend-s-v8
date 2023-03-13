import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from './Input';

describe('Input component', () => {
  it('should render correctly with default props', () => {
    const { getByTestId, queryByText } = render(<Input />);
    const input = getByTestId('input');
    expect(input).toBeDefined();
    expect(queryByText('Email not valid')).toBeNull();
  });

  it('should call the onChangeText function when input text changes', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(<Input onChangeText={onChangeText} />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'hello');
    expect(onChangeText).toHaveBeenCalledWith('hello');
  });

  it('should display an error message if the email is invalid', () => {
    const { getByTestId, getByText } = render(<Input type="email" />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'invalid-email');
    expect(getByText('Email not valid')).toBeDefined();
  });

  it('should not display an error message if the email is valid', () => {
    const { getByTestId, queryByText } = render(<Input type="email" />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'valid-email@example.com');
    expect(queryByText('Email not valid')).toBeNull();
  });

  it('should allow password input when the length is greater than or equal to 8', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(<Input type="password" onChangeText={onChangeText} />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'validpassword');
    expect(onChangeText).toHaveBeenCalledWith('validpassword');
  });

  it('should not allow password input when the length is less than 8', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(<Input type="password" onChangeText={onChangeText} />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'short');
    expect(onChangeText).not.toHaveBeenCalled();
  });
});
