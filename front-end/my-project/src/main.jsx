import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/Layout.jsx";

import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App2 from "./About/App2.jsx";
import App3 from "./Products/App3.jsx";
import App4 from "./Service/App4.jsx";
import App5 from "./Blog/App5.jsx";
import App6 from "./Contacts/App6.jsx";
import App7 from "./Last/App7.jsx";
import App8 from "./Last1/App8.jsx";
import App9 from "./Read/App9.jsx";
import App10 from "./product1/App10.jsx";
import App11 from "./Product2/App11.jsx";
import App12 from "./Product3/App12.jsx";
import App13 from "./Product4/App13.jsx";
import App14 from "./Product5/App14.jsx";
import App15 from "./Product6/App15.jsx";
import App16 from "./Product7/App16.jsx";
import App17 from "./Product8/App17.jsx";
import App18 from "./Product9/App18.jsx";
import App19 from "./BuyProduct/App19.jsx";
import App20 from "./cart/App20.jsx";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="" element={<App />} />
      <Route path="/about" element={<App2 />} />
      <Route path="/products" element={<App3 />} />
      <Route path="/service" element={<App4 />} />
      <Route path="/blog" element={<App5 />} />
      <Route path="/contacts" element={<App6 />} />
      <Route path="/login" element={<App7 />} />
      <Route path="/register" element={<App8 />} />
      <Route path="/Read" element={<App9 />} />
      <Route path="/Click1" element={<App10/>} />
      <Route path="/Click2" element={<App11/>} />
      <Route path="/Click3" element={<App12/>} />
      <Route path="/Click4" element={<App13/>} />
      <Route path="/Click5" element={<App14/>} />
      <Route path="/Click6" element={<App15/>} />
      <Route path="/Click7" element={<App16/>} />
      <Route path="/Click8" element={<App17/>} />
      <Route path="/Click9" element={<App18/>} />
      <Route path="/Buy" element={<App19/>} />
      <Route path="/cart" element={<App20/>} />
      
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
