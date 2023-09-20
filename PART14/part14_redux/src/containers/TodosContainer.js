// connect 함수를 사용하고, mapDispatchToProps를 짧고 간단하게 쓰는 방법을 적용해서 코드를 작성

import React from "react";
import { connect } from 'react-redux';
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove, }) => {
  return (
    <Todos input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove} />
  );
};

// mapDispatchToProps => 객체형태로 구현
export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);