import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import "./helpers/pomodoroFonts/css/index.css";

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

import { GlobalProvider } from "./context/GlobalContext";

import "react-toastify/dist/ReactToastify.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <Container>

          <Routes />
          <ToastContainer limit={3} />

        </Container>
        <Footer />

      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);





