import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import sagas from "store/sagas";
import reducer from "store/reducer";

export default function ConfigureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(reducer, enhancer);
  // Saga injection
  if (sagas instanceof Array) {
    sagas.forEach((saga) => sagaMiddleware.run(saga));
  }

  return store;
}
