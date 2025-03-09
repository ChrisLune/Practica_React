// src/features/user/userSlice.test.js
import userReducer, { logout } from './userSlice';

describe('user reducer', () => {
  it('should handle logout', () => {
    const previousState = { token: 'fakeToken', isAuthenticated: true };
    expect(userReducer(previousState, logout())).toEqual({
      token: null,
      isAuthenticated: false,
    });
  });
});

// src/features/user/userSlice.test.js
import { login } from './userSlice';
import axios from 'axios';

jest.mock('axios');

describe('async actions', () => {
  it('should create login action', async () => {
    const data = { token: 'fakeToken' };
    axios.post.mockResolvedValueOnce({ data });

    const result = await login({ email: 'test@example.com', password: 'password', rememberMe: false });
    expect(result.payload).toEqual('fakeToken');
  });
});

// src/features/user/userSlice.test.js
import { selectUser } from './userSlice';

describe('selectors', () => {
  it('should select the user state', () => {
    const state = { user: { token: 'fakeToken', isAuthenticated: true } };
    expect(selectUser(state)).toEqual({ token: 'fakeToken', isAuthenticated: true });
  });
});
