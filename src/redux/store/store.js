import { createStore } from 'redux';
import rootReducer from '../reducers/user';
export const store = createStore(rootReducer)