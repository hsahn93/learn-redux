import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todo'


function TodosContainer() {
  //useSelector 에서 꼭 객체를 반환할 필요는 x
  //한종류의 값만 조회하고 싶으면 그냥 원하는값만 바로 반환하면됨.

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id), [dispatch]))
  //최적화를 위한 useCallback

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer