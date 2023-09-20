// 컨테이너 컴포넌트
// - 리덕스 스토어에 접근하여 원하는 상태를 받아 오거나, 액션을 디스패치 한다.
// - 리덕스 스토어 연동 

import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";  // 익명함수 선언시 사용
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
}

export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease,
  }

)(CounterContainer)



// ********************************************** /
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer)


//******************************************************************************* */
// const mapStateToProps = state => ({
//   number: state.counter.number
// })

// const mapDispatchToProps = dispatch => ({
//   // 임시로 만들어진 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);