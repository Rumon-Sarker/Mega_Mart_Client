import { Outlet } from "react-router-dom";
import Footer from "./Share/Footer/Footer";
import TopNavbar from "./Share/Navbar/TopNavbar";
import { useEffect, useState } from "react";
import Navbar from "./Share/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false)
    }
    else {
      setShowNavbar(true)
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <>

      <ToastContainer />
      <div className={`fixed w-full z-30 transition-transform duration-700 ${showNavbar ? 'translate-y-0' : '-translate-y-40'}`}>
        <TopNavbar />
        <Navbar />
      </div>
      <Outlet />
      <Footer />

    </>
  );
};

export default App;