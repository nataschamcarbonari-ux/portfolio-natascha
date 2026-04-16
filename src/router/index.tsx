import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail';
import StepDetail from '../pages/StepDetail/StepDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project/:slug',
    element: <ProjectDetail />,
  },
  {
    path: '/project/:slug/step/:id',
    element: <StepDetail />,
  },
]);
