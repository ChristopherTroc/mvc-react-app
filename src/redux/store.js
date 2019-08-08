import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import globals from './reducers/globals';

const reducer = combineReducers({
  globals,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

export const store = createStore(persistReducer(persistConfig, reducer));
export const persistor = persistStore(store);
