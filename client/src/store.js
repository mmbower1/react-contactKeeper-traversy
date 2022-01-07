import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
// import { createSagaMiddleware } from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [thunk]; // sagaMiddleware replaces thunk here if using sagas

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

// export default { store };
// export default { persistor };