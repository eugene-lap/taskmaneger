import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { tasksReducer, uiReducer} from "./reducers";
import { IStoreState } from '../types';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([]);
}

const store = createStore(
  combineReducers({
     ui: uiReducer,
     tasks: tasksReducer
    }), 
    applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

const handleChange = () => {
  const state = store.getState();
  localStorage.setItem("localState", JSON.stringify(state));
};

store.subscribe(() => handleChange());

export default store;
