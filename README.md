# React Hooks 예시들

## useRef 활용1 : Example1

> [callback refs 사용으로 useEffect 방지하기](https://velog.io/@cnsrn1874/%EB%B2%88%EC%97%AD-callback-refs-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-useEffect-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0)

> 덤으로 useCallback / React.memo 활용!

- forwardRef

  - 사용하는 이유 : 하위 컴퍼넌트에 ref를 전달하기 위해서, 특히 `ref` 이름 그대로 를 전달하고자할 때 사용!

  - DOM객체로서 사용 가능

- Callback ref

  - 왜 사용할까? : 렌더링 이후에 DOM 노드와 직접 상호작용해야할 필요성이 있을 때!

  - callback ref 는 그냥 콜백함수이다. 그 안에서 해당 DOM의 랜더링 이후 특정 로직을 수행하길바랄때 사용할 수 있다.

  - 콜백함수의 호출 시점 : 컴포넌트가 렌더링 된 이후에 호출되는 함수

## useRef 활용2 : Example2

> 여러개의 DOM 요소에 접근하기

## useRef활용3

- useRef는 변수로 활용 가능! 하지만 해당 값의 변경에 따라서 리랜더링이 일어나거나 하진 않는다.
- useRef vs useState 활용 기준
  - 변수의 변경으로 UI변경이 필요한 경우는 useState 활용, UI와 관련 없는 경우는 useRef를 활용

## useImperativeHandle 활용
