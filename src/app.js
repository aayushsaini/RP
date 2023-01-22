import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import {createBrowserRouter} from "react-router-dom"

import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <About /> */}
      <Footer />
    </>
  );
};

export default App;
