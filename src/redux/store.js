import { createStore } from 'redux';
import rootReducer from './reducer';
import { persistStore } from 'redux-persist';
import persistedReducers from './reduxPersist';

export const store = createStore(persistedReducers(rootReducer));

export const persistor = persistStore(store);
export default store;
