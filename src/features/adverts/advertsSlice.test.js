// src/features/adverts/advertsSlice.test.js
import advertsReducer, { fetchAdverts } from './advertsSlice';

describe('adverts reducer', () => {
  it('should handle fetchAdverts.fulfilled', () => {
    const previousState = { adverts: [], status: 'idle' };
    const action = { type: fetchAdverts.fulfilled.type, payload: [{ id: 1, name: 'Anuncio 1' }] };
    expect(advertsReducer(previousState, action)).toEqual({
      adverts: [{ id: 1, name: 'Anuncio 1' }],
      status: 'succeeded',
    });
  });
});
