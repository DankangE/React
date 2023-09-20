// 리덕스(Redux)
// 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 효율적으로 관리 가능(전역 상태 관리에 효율적)
// 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값 전달, 업데이트 가능
// Context API 와 useReducer Hook 을 사용해서 개발하는 흐름은 리덕스를 사용하는 것과 매우 개발 방식이 유사
// - Context API 를 사용해도 글로벌 상태 관리

// 리덕스 키워드(useReducer 개념)
// 액션(Action): 상태가 변화될 때
// - 액션 개체 => type 필드가 필수로 가지고 있어야 함, 그외 값들은 개발자가 임의로 생성할 수 있다.
// - 액션 생성함수 (Action Creator) => 파라미터를 받아와 액션 개체 생성
// - 함수화 하는 이유: 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함

export function addTodo(data) {
    {
      type: "ADD_TODO"
      data
    };
  }
  
  export const changeIput = text => (
    {
      type: "CHANGE_INPUT",
      text
    }
  );
  
  
  // 리듀서 (Reducer)
  // - 변화를 일으키는 함수
  // - 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환
  
  function reducer(state, action) {
    // 상태 업데이트 코드
    return upState;
  }
  
  function counter(state, action) {
    switch (action.type) {
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state - 1;
      default:
        return state;
    }
  }
  
  // 스토어 (Store)
  // - 현재의 앱 상태, 리듀서가 들어가 있고 추가적인 몇가지 내장 함수들 정보
  // - 리덕스는 앱플리케이션 하나당 스토어가 만들어짐
  
  // 디스패치 (dispatch)
  // - 스토어의 내장함수 중 하나로 액션을 발생시키는 것
  // - dispatch라는 함수를 가지고 있고 액션을 파라미터로 전달(dispathch(action))
  
  // 구독 (subscribe)
  // - 스토어의 내장함수 중 하나(subscribe 함수)
  // - subscribe 함수에 특정 함수를 파라미터로 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출
  
  // react-redux 라는 라이브러리에서 제공: connect 함수 또는 useSelector Hook 을 사용하여 리덕스 스토어의 상태에 구독
  
  // 3규칙
  // - 하나의 애플리케이션 안에는 하나의 스토어를 가져야 한다.
  // - 상태는 읽기전용
  // - 변화를 일으키는 함수, 리듀서는 순수한 함수
  //   => 동일인풋 => 동일 아웃풋
  
  // 리덕스 미들웨어