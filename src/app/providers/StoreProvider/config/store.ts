import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const reduceManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>(
    {
      reducer: reduceManager.reduce,
      devTools: __IS_DEV__,
      preloadedState: initialState,
    },
  );

  // @ts-ignore
  store.reducerManager = reduceManager;

  return store;
}
