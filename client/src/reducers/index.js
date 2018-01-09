import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import tweets from './tweets';

const rootReducer = combineReducers({
  user,
  flash,
  tweets,
});

// {
//   user: { name: '', email: ''},
//   flash: { message: '' },
//   tweets: []
// }

export default rootReducer;
