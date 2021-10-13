﻿import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'REACT-WEATHER',
      storage,
      whitelist: ['list'],
    },
    reducers,
  );
  return persistReducers;
};
