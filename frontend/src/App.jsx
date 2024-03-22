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
import Account from './components/Account';
import MapSection from './components/MapSection';
import PlacesList from './components/PlacesList';
import CountriesList from './components/CountriesList';
import ContinetsList from './components/ContinetsList';
import Place from './components/Place';
import Country from './components/Country';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PageNotFound from './components/PageNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<MapSection />}>
          <Route path="/add" element={<AddPlaceForm />} />
          <Route path="/places" element={<PlacesList />} />
          <Route path="/places/:id" element={<Place />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:id" element={<Country />} />
          <Route path="/continents" element={<ContinetsList />} />
          <Route path="/continents" element={<ContinetsList />} />
        </Route>
        <Route element={<Account />} />
      </Route>
      <Route element={<Home />}>
        <Route path="/login" element={<LoginForm />} />,
        <Route path="/register" element={<RegisterForm />} />,
        <Route path="*" element={<PageNotFound />} />,
      </Route>
      ,
    </>,
  ),
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
