import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { keanuPictureSlice } from 'MainRoot/app/slice';
import rootSaga from 'MainRoot/app/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: keanuPictureSlice.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;
