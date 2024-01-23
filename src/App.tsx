import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  { path: '/', Component: Home, errorElement: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
