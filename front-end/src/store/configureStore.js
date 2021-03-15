import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';

import { loadFromLocalStorage, saveToLocalStorage } from './localStore';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

sagaMiddleware.run(rootSaga);

export default store;
