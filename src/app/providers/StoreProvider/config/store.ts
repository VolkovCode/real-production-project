import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const reduceManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore<StateSchema>(
    {
      reducer: reduceManager.reduce as ReducersMapObject<StateSchema>,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
    },
  );

  // @ts-ignore
  store.reducerManager = reduceManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
