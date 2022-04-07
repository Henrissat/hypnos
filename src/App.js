import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./components/UI/Layout";

import { HypnosProvider } from "./components/Home/hypnos-context"
import { RoomsProvider } from "./components/Hotel/room-context"
import Home from "./components/Home/Index";
import Hotel from "./components/Hotel/Index";
import Room from "./components/Room/index";
import Reservation from "./components/Reservation/Index";
import Contact from "./components/Contact/Index";

export default function App() {
  return (
    <HypnosProvider>
      <RoomsProvider>
        <Router>
          <Layout>
            <Routes>
              <Route element={<Home />} path="/"></Route>
              <Route element={<Hotel />} path="/Hotel/" >
                  <Route element={<Hotel />}  path=":id/:slug" />
              </Route>
              <Route element={<Room />} path="/Room/" >
                  <Route element={<Room />}  path=":id/:slug" />
              </Route>
              <Route element={<Reservation />} path="/Reservation"></Route>
              <Route element={<Contact />} path="/contact"></Route>
              <Route element={Error} />
            </Routes>
          </Layout>
        </Router>
      </RoomsProvider>
    </HypnosProvider>
  );
}

