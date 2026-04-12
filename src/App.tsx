import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/styles.css';
import './styles/components.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;