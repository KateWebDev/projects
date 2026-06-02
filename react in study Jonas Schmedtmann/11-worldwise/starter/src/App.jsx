import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:9000/cities");

        if (!response.ok) {
          throw new Error("Error Fetch Data");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setCities(data);
      } catch (error) {
        if (!error.name === "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} error={error} />} />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} error={error} />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
