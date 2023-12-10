// import { configureStore } from '@reduxjs/toolkit';
// import firstSlice from './slices/firstSlice';
// // import { firstSlice } from './slices/firstSlice';

// export const store = configureStore({
//   // preloadedState: initialState,
//   reducer: firstSlice,
// });
// Above code for Async Thunk

import { configureStore } from '@reduxjs/toolkit';
import firstSlice from './slices/firstSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: firstSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
