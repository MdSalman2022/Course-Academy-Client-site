import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes/Routes';

function App() {

  return (
    <div className="App dark:bg-slate-900 dark:text-white">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
