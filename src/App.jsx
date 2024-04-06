import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Sponsors from './Sponsors';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;
