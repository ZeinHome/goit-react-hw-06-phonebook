import { nanoid } from 'nanoid';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactAdd, contactDelete, changeFilter } from './actions';

const items = createReducer([], {
  [contactAdd]: (state, { payload: { name, number } }) => {
    return [
      ...state,
      {
        id: nanoid(),
        name,
        number,
      },
    ];
  },

  [contactDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
