import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import shopsReducer from './shops_reducer';


const rootReducer = combineReducers({
  form: reducerForm,
  shops: shopsReducer,
});

export default rootReducer;
