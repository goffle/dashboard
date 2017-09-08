import { FETCH_COMPANY } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return action.payload.val();
    default:
      return state;
  }
}
