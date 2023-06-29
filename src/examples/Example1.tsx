import { memo, useCallback, useState } from 'react';

export default function Example1() {
  const [rendering, setRendering] = useState(false);
  console.log('랜더링1');

  return (
    <div>
      <h1>Example1 : 인풋이 랜더링 될 때마다 포커싱되게 만들어보자!</h1>
      <Search />
      <button onClick={() => setRendering(!rendering)}>랜더링</button>
      <p>
        랜더링 버튼을 누르면 memo에 의해서 랜더링1만 찍힘!{' '}
        <strong>by useCallback / memo</strong>
      </p>
    </div>
  );
}

const Search = memo(() => {
  const [isShow, setShow] = useState<boolean>(false);

  console.log('랜더링2');

  const onRenderAfter = useCallback((node: HTMLInputElement) => {
    console.log('랜더링3');
    node?.focus();
  }, []);

  const onClick = useCallback(() => setShow((prev) => !prev), []);

  return (
    <div>
      {isShow && (
        <>
          <label htmlFor="input">SEARCH : </label>
          <input
            placeholder="input"
            id="input"
            type="text"
            ref={onRenderAfter}
          />
        </>
      )}
      <button onClick={onClick}>Toggle</button>
    </div>
  );
});
