import React, {useState} from 'react';

//컴포넌트 최적화를 위해서 React.memo를 사용한다.

const TodoItem = React.memo(function TodoItem({todo, onToggle}) {
  return (
    <li
      style={{textDecoration: todo.done ? 'line-through' : 'none'}}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

//컴포넌트 최적화를 위한 React.memo 사용

const TodoList = React.memo(function TodoList({todos, onToggle}) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />;
      })}
    </ul>
  );
});


function Todos({ todos, onCreate, onToggle }) {
  //리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야 하는것은 아님.
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value)
  const onSubmit = e => {
    e.preventDefault() //submit시점에서 이벤트 발생시, 새로고침을 방지함.
    onCreate(text)
    setText('')//인풋 초기화
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          value={text}
          placeholder='할 일'
          onChange={onChange}
        />
        <button type='submit'>등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  )
}

export default Todos