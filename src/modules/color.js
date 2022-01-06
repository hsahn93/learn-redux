/* 액션 타입 선언*/

const CHANGE_COLOR = 'color/CHANGE_COLOR';

/* 액션 생성 함수 정의 */

export const changeColor = (color) => ({ type: CHANGE_COLOR, color });

//초기상태 정의

const initialState = {
  color : 'red'
}


//리듀서 작성


export default function color(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color : action.color
      }
    default:
      return state;
  }
}