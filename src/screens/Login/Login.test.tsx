import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';

describe('Login component', () => {
  it('should call onSubmit function on button press', () => {
    const onLogin = jest.fn();
    const navigation = { navigate: jest.fn() };
    const { getByTestId, getByLabelText } = render(<Login navigation={navigation} onLogin={onLogin} />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByTestId('login-button');

    fireEvent.changeText(emailInput, 'test@test.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);

    expect(onLogin).toHaveBeenCalledTimes(1);
  });
});
