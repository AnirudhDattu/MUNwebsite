import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Sponsors from "./Sponsors";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
