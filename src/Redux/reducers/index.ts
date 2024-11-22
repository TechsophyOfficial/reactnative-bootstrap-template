import {combineReducers} from 'redux';
import CounterSlice from './CounterSlice';
import ThemeSlice from './ThemeSlice';
import LanguageSlice from './LanguageSlice';

export default combineReducers({
  counter: CounterSlice,
  theme: ThemeSlice,
  language: LanguageSlice,
});
