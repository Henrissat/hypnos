import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/UI/Layout";

import Home from "./components/Home/Index";
import Hotel from "./components/Hotel/Index";
import Reservation from "./components/Reservation/Index";
import Contact from "./components/Contact/Index";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Hotel />} path="/Hotel" ></Route>
          <Route element={<Reservation />} path="/Reservation"></Route>
          <Route element={<Contact />} path="/contact"></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

