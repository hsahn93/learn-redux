/*액션 타입선언*/
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; //todo 데이터에 사용할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체 타입일 필요는 없음.
// 배열이여도 되고, 원시 타입이어도 상관 무

const initialState = [
  /* 우리는 다음과 같이 구성된 객체를 이 배열 안에 넣을것임.
  {
    id:1,
    text : '예시',
    done : false
  }
  
  
  */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concate(action.todo);
    case TOGGLE_TODO:
      // return state.map((todo) => {
      //   todo.id === action.id ? {...todo, done: !todo.done} : todo;
      // });
      return state.map(
        (todo) =>
          todo.id === action.id // id 가 일치하면
            ? {...todo, done: !todo.done} // done 값을 반전시키고
            : todo, // 아니라면 그대로 둠
      );
    default:
      return state;
  }
}
