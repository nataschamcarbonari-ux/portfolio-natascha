import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import StepDetail from '../pages/StepDetail/StepDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/step/:id',
    element: <StepDetail />,
  },
]);