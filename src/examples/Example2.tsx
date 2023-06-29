import { useRef, useState } from 'react';
import styles from './example.module.css';

type Box = {
  id: number;
  title: string;
  color: string;
};

export default function Example2() {
  const boxesRef = useRef<(HTMLLIElement | null)[]>([]);

  const [widths, setWidths] = useState<number[]>(() => getWidths());

  const handleClick = () => {
    const rights = boxesRef.current.map((ref, i) => ({
      right: ref?.getBoundingClientRect().right as number,
      i,
    }));
    const max = Math.max(...rights.map((r) => r.right));
    const finded = boxes[rights.find((r) => r.right === max)?.i as number];

    alert(finded.title);
  };

  const handleClickRerender = () => {
    setWidths(getWidths());
  };

  return (
    <div>
      <h1>Example2 : 여러 개의 DOM요소를 접근해보자!</h1>
      <ul className={styles['box-container']}>
        {boxes.map((box, index) => (
          <li
            className={styles['box-item']}
            key={box.id}
            style={{
              width: `${widths[index]}px`,
              color: 'white',
              backgroundColor: `${box.color}`,
            }}
            ref={(ref) => {
              if (boxesRef.current) boxesRef.current[index] = ref;
            }}
          >
            {box.title}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>가장 오른쪽에 있는 박스는??</button>
      <button onClick={handleClickRerender}>박스 리랜더링!!</button>
    </div>
  );
}

const boxes: Box[] = [
  {
    id: 1,
    title: 'box1',
    color: '#ae5af2',
  },
  {
    id: 2,
    title: 'box2',
    color: '#4de4a3',
  },
  {
    id: 3,
    title: 'box3',
    color: '#bb4e6f',
  },
  {
    id: 4,
    title: 'box4',
    color: '#27c6db',
  },
  {
    id: 5,
    title: 'box5',
    color: '#896520',
  },
  {
    id: 6,
    title: 'box6',
    color: '#dc4805',
  },
  {
    id: 7,
    title: 'box7',
    color: '#0aad2b',
  },
];

function getWidths() {
  return Array.from({ length: 7 }, () => Math.random() * 200 + 100);
}
