// import { combineReducers } from 'redux';

/* ------------------ action types ------------------ */
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

/* ------------------ action creators(创建函数) ------------------ */

// function increment (value = 1) {
//   // this is an action below
//   console.warn(object);
//   return {
//     type: COUNTER_INCREMENT,
//     payload: value,
//   };
// }

/* ------------------ reducers ------------------ */

function reducer(state, action) {
  console.warn('reducer 执行了', state, action);
  switch (action.type) {
    case COUNTER_INCREMENT:
      return (state + action.payload);
    default:
      return state;
  }
}

export default reducer;
