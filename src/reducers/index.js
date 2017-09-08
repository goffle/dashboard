import { combineReducers } from 'redux';

import companiesReducer from './companiesReducer';
import companyReducer from './companyReducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
  currentCompany: companyReducer,
});

export default rootReducer;
