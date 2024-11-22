import {combineReducers} from 'redux';
import CounterSlice from './CounterSlice';
import ThemeSlice from './ThemeSlice';

export default combineReducers({
  counter: CounterSlice,
  theme: ThemeSlice,
});
