// 1. 액션 타입 정의
// - 액션타입은 대문자로 정의
// - 문자열 내용은 '모듈 이름/액션 이름' 형태 - 모듈 이름을 넣음으로써 액션 이름 충돌 방지

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


// 2. 액션 함수 만들기
// - export 키워드로 선언 => 다른 파일에서 불러와 사용할 수 있음

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. 초기상태 및 리듀서 함수 만들기
//  - export : 모듈 여러 개를 내보낼 수 있다.
//  - export default : 모듈 단 한 개를 내보낼 수 있다.

// 초기상태
const initialState = {
  number: 0
};

// 리듀서 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;