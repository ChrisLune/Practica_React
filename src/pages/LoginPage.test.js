// src/pages/LoginPage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';
import { Provider } from 'react-redux';
import { store } from '../store';
import userEvent from '@testing-library/user-event';

test('renders login page correctly', () => {
  const { asFragment } = render(<LoginPage />);
  expect(asFragment()).toMatchSnapshot();
});

// src/pages/LoginPage.test.js



jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

test('dispatches login action on form submit', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );

  userEvent.type(getByLabelText('Email:'), 'test@example.com');
  userEvent.type(getByLabelText('Contraseña:'), 'password');
  userEvent.click(getByText('Iniciar Sesión'));

  // Aquí puedes agregar expectativas para verificar que la acción fue despachada
});
