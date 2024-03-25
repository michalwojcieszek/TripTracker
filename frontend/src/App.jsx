import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from './AppLayout';
import store from './store';
import AddPlaceForm from './pages/AddPlaceForm';
import MapSection from './pages/MapSection';
import PlacesList from './pages/PlacesList';
import CountriesList from './pages/CountriesList';
import ContinetsList from './pages/ContinetsList';
import Place from './pages/Place';
import Country from './pages/Country';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        </Route>
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
      <ToastContainer />
    </Provider>
  );
}

export default App;
