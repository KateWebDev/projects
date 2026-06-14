import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { FakeAuthProvider } from "./contexts/FakeAuthContext";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

export default function App() {
  return (
    <FakeAuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate to="cities" replace />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </FakeAuthProvider>
  );
}
