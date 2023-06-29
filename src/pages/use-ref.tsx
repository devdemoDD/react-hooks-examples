import Example1 from '../examples/Example1';
import Example2 from '../examples/Example2';
import styles from './page.module.css';

export default function UseRef() {
  return (
    <div className={styles.container}>
      <Example1 />
      <Example2 />
    </div>
  );
}
