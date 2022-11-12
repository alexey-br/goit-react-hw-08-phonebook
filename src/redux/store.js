import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
