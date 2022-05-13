import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/UI/Layout";
import Home from "./components/Home/Index";
import Hotel from "./components/Hotel/Index";
import Room from "./components/Room/index";
import Reservation from "./components/Reservation/Index";
import Contact from "./components/Contact/Index";
import Connection from "./components/Connection/index";
import Register from "./components/Connection/Register";
import LoginUser from "./components/Connection/LoginUser";
import Logout from "./components/Connection/Logout";

export default function App() {
  return (
        <Router>
          <Layout>
            <Routes>
              <Route element={<Home />} path="/"></Route>
              <Route element={<Hotel />}  path="/Hotel/:slug" >
              </Route>
              <Route element={<Room />} path="/Room/" >
                  <Route element={<Room />}  path=":id/:slug" />
              </Route>
              <Route element={<Reservation />} path="/Reservation"></Route>
              <Route element={<Contact />} path="/contact"></Route>
              <Route element={<Connection />} path="/Connection"></Route>
              <Route element={<Register />} path="/Register"></Route>
              <Route element={<LoginUser />} path="/LoginUser"></Route>
              <Route element={<Logout />} path="/Logout"></Route>
              <Route element={Error} />
            </Routes>
          </Layout>
        </Router>
  );
}

// <Route element={<Admin />} path="/Admin"></Route>
// <Route element={<Login />} path="/Login"></Route>