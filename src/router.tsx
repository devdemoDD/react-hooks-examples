import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import UseRef from './pages/use-ref';
import UseImperativeHandle from './pages/use-imperative-handle';
import UseLayoutEffect from './pages/use-layout-effect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'use-ref',
        element: <UseRef />,
      },
      {
        path: 'use-imperative-handle',
        element: <UseImperativeHandle />,
      },
      {
        path: 'use-layout-effect',
        element: <UseLayoutEffect />,
      },
    ],
  },
]);

export default router;
