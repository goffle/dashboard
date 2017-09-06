import { FETCH_SHOPS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SHOPS:
      return action.payload.val() ? action.payload.val() : {};
    default:
      return state;
  }
}
