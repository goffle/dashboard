import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import companyReducer from './companyReducer';


const rootReducer = combineReducers({
  form: reducerForm,
  companies: companyReducer,
});

export default rootReducer;
