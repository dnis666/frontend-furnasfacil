import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Details from './pages/Details';

const router = createBrowserRouter([
  { path: '/', Component: Home, errorElement: <ErrorPage /> },
  { path: '/:id', Component: Details, errorElement: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
