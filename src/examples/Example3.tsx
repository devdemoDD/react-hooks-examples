import styles from './example.module.css';

export default function Example3() {
  return (
    <div className={styles['grid-container']}>
      <UseEffectComp />
      <UseLayoutEffect />
    </div>
  );
}

function UseEffectComp() {
  return (
    <div>
      <h2>useEffect 사용</h2>
      <button></button>
    </div>
  );
}

function UseLayoutEffect() {
  return (
    <div>
      <h2>useLayoutEffect사용</h2>
      <button></button>
    </div>
  );
}
