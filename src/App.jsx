import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

import ProtectedRoutes from './privateRoute/ProtectedRoutes'

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        
        <Route element={<ProtectedRoutes/>}>

          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Auth login/>} />
        <Route path="/register" element={<Auth register/>} />

       
        {/* any path that not defined */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
