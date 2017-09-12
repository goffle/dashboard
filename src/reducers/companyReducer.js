import { FETCH_COMPANY, POST_COMPANY } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return action.payload.val();
    case POST_COMPANY:
      return null;
    default:
      return state;
  }
}
