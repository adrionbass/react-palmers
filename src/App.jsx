import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { IoIosArrowDropupCircle } from "react-icons/io";
import ScrollToTop from "react-scroll-up";

export default () => {
  return (
    <>
      <ScrollToTop showUnder={160} color="#FFF">
        <ToTopBtn>
          <IoIosArrowDropupCircle />
        </ToTopBtn>
      </ScrollToTop>
      <Navbar />
      <Hero />
      <News />
      <About />
      <Gallery />
      <Contact />
    </>
  );
};

const ToTopBtn = styled.i`
  color: whitesmoke;
  font-size: 35px;
`;
