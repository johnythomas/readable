import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import rootSaga from "../sagas"
import rootReducer from "../reducers"

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
