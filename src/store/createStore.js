import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'

import reducers from '../reducers'
import rootSaga from '../sagas';

export default function (initialState = {}) {

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    thunk,
    sagaMiddleware,
    createLogger(),
  ];

  const enhancer = compose(applyMiddleware(...middleware))

  const store = createStore(
    reducers,
    initialState,
    enhancer
  )

  sagaMiddleware.run(rootSaga)

  return store
}
