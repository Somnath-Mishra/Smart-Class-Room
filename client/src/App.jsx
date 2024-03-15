import React, { useContext, useState } from "react";
// import { AuthContext, AuthContextProvider } from "./context/Authcontext";
import Register from "./pages/register";
import Login from "./pages/Login";

import Frame from "./Frame";
import Schedule from "./components/Schedule/Schedule";
import Material from "./components/Material/Material";
import Assignment from "./components/Assignment/Assignment";
import Quiz from "./components/Quiz/Quiz";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  Form,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";

const App = () => {
  // const { user } = useContext(AuthContext);
  //console.log(user)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Frame />}>
        <Route path="" element={<Schedule />} />
        <Route path="material" element={<Material />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    )
  );

  return (
    <>
      {/* <AuthContextProvider>
        <Login/>
      </AuthContextProvider> */}
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
