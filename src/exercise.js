import {createStore} from 'redux';
//createStroe는 스토어를 만들어주는 함수.
// 리엑트 프로젝트에서는 단 하나의 스토어를 만들어야함.

/* 리덕스에서 관리할 상태를 정의함.*/
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

/*액션 타입 정의 */
//액션 타입은 주로 대문자로 작성함.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/*액션 생성 함수 정의 */
//액션 생성 함수는 주로 camelCase로 작성
function increase() {
  return {
    type: INCREASE,
    //액션 객체에서는 TYPE값이 필수임.
  };
}

//액션 생성 함수는 화살표로 쓰면 더 편하다.
const decrease = () => ({ 
  type : DECREASE

})
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, //액션안에는 type외에 추가적인 필드를 마음대로 넣을수 있습니다.
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});



/* 리듀서 만들기 */
//위 액션 생성 함수들을 통해서 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만든다.
// 주의 : 리듀서에서는 불변성을 꼭 지켜주어야 함.

function reducer(state = initialState, action) {
  //state 의 초기값을 initialState로 저장함.
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter : state.counter -1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text : action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list : state.list.concat(action.item)
      }
    default:
      return state;
  }
}


/* 스토어 만들기 */
const store = createStore(reducer);


console.log('store.getState()......',store.getState());
// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
//구독을 해제하기 위해서는 unsubscribe를 호출함.

//액션들을 디스패치 해본다.

store.dispatch(increase())
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id : 1, text : '와우'}));