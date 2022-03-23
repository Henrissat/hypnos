import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/UI/Layout";

import Home from "./components/Home/Index";
import Hotel from "./components/Hotel/Index";
import Rooms from "./components/Rooms/Index";
import Reservation from "./components/Reservation/Index";
import Contact from "./components/Reservation/Index";
import Admin from "./components/Admin/Index";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Hotel />} path="/Hotel" ></Route>
          <Route element={<Rooms />} path="/Rooms"></Route>
          <Route element={<Reservation />} path="/Reservation"></Route>
          <Route element={<Contact />} path="/Contact"></Route>
          <Route element={<Admin />} path="/admin"></Route>
        </Routes>
      </Layout>
    </Router>
  );
}