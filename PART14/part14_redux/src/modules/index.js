// 루트 리듀서 

// - createStore 함수를 사용해 스토어를 만들 때에는 리듀서를 하나만 사용해야 함
// - combineReducers: 기존 리듀서 합치기 위한 함수

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;