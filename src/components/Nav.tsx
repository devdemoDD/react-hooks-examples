import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/use-ref">useRef 활용</Link>
        </li>
        <li>
          <Link to="/use-imperative-handle">useImperativeHandle 활용</Link>
        </li>
        <li>
          <Link to="/use-layout-effect">useLayoutEffect 활용</Link>
        </li>
        <li>
          <Link to="/use-reducer">useReducer 활용</Link>
        </li>
      </ul>
    </div>
  );
}
