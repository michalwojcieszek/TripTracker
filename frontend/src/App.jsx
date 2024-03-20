import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from './AppLayout';
import store from './store';
import AddPlaceForm from './components/AddPlaceForm';
import List from './components/List';
import Account from './components/Account';
import MapSection from './components/MapSection';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<MapSection />}>
        <Route path="/add" element={<AddPlaceForm />} />
        <Route path="/list" element={<List />} />
      </Route>
      <Route element={<Account />} />
    </Route>,
  ),
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
