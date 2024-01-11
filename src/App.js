
import './App.css';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryImg from './components/GalleryImg';
import Header from './components/Header';
import MakeUnique from './components/MakeUnique';
import OtherServices from './components/OtherServices';
import OurPortfolio from './components/OurPortfolio';
import OurProject from './components/OurProject';
import OurServices from './components/OurServices';
import OurWorks from './components/OurWorks';
import UniqueBuilding from './components/UniqueBuilding';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import BackToTop from "./assets/images/web.p/BackToTop.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loader from "./components/Loader";


function App() {
  // -------------------preloader------------------------
  document.getElementById('root')
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg")
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg")
      setScreenLoading(false);
    }, 3000);
  }, []);
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className=' overflow-x-hidden'>
            <Header />
            <OurServices />
            <MakeUnique />
            <UniqueBuilding />
            <OurWorks />
            <OurProject />
            <OtherServices />
            <OurPortfolio />
            <GalleryImg />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "hover:shadow-[0_3px_8px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[54px] w-[54px] flex items-center justify-center rounded-[50px] bg-[#033A49] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </>
  );
}

export default App;
