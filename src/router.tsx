import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import UseRef from './pages/use-ref';
import UseImperativeHandle from './pages/use-imperative-handle';
import UseLayoutEffect from './pages/use-layout-effect';
import UseReducer from './pages/use-reduce';

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
      {
        path: 'use-reducer',
        element: <UseReducer />,
      },
    ],
  },
]);

export default router;
