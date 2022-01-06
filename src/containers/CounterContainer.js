import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease, setDiff} from '../modules/counter';

function CounterContainer() {
  //useSelect는 리덕스 스토어의 상태를 조회하는 HOOK.
  // STATE의 값은 store.getState() 함수를 호출했을때 나타나는 결과와 동일합니다.

  const {number, diff} = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
    //최적화 하기 위함.
  );

  //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할수 있게 해준 HOOK입니다.
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      //상태와
      number={number}
      diff={diff}
      //액션을 디스패치하는 함수를 props로 넣어준다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
