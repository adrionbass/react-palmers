import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Grid from "./components/GenericGrid";
import Scaffold from "./components/Scaffold";
import Mailer from "./components/Mailer";
import PalmersNews from "./utils/PalmersNews";
import PalmersNosotros from "./utils/PalmersNosotros";
import PalmersLogo from "./assets/PalmersLogo";
import { ItemSocial } from "./components/Navbar.elements";
import MasonryLayout from "./components/MasonryLayout";
import PalmersGallery from "./utils/PalmersGallery";
import NosotrosGrid from "./components/NosotrosGrid";
import { IoIosArrowDropupCircle } from "react-icons/io";
import ScrollToTop from "react-scroll-up";

export default () => {
  return (
    <App>
      <ScrollToTop showUnder={160} color="#FFF">
        <ToTopBtn><IoIosArrowDropupCircle/></ToTopBtn>
      </ScrollToTop>
      <Navbar />
      <Hero id="home"></Hero>
      <Section id="news">
        <h2>News</h2>
        <Grid>
          {PalmersNews.map((item) => (
            <Scaffold key={item.name}>
              <img src={item.img_path} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="date">{item.date}</p>
              <p>{item.desc}</p>
            </Scaffold>
          ))}
        </Grid>
      </Section>

      <Section id="about">
        <h2>Nosotros</h2>
        <Grid>
          <div className="nos-txt">
            <p className="nos">
              Somos una banda paranaense que nació como idea de hacer un tributo
              punkrock a Los Palmeras en el año 2006. Cuando el proyecto
              finalmente comenzó a tomar forma en el 2017, decidimos incorporar
              al repertorio versiones rockeadas de Mario Pereyra, el Brujo
              Ezequiel y otros clásicos de la cumbia santafesina.
            </p>
            <PalmersLogo height="3em" />
          </div>

          <NosotrosGrid>
            {PalmersNosotros.map((item) => (
              <img src={item.img_path} alt={item.name} key={item.img_path} />
            ))}
          </NosotrosGrid>
        </Grid>
      </Section>

      <Section id="gallery">
        <h2>Galería</h2>
        <MasonryLayout>
          {PalmersGallery.map((item) => (
            <Scaffold>
              <img src={item.img_path} alt="gallery-img" />
            </Scaffold>
          ))}
        </MasonryLayout>
      </Section>

      <Section id="contact">
        <h2>Contacto</h2>
        <Mailer />

        <ItemSocial>
          <a href="https://wa.me/5493434749677" target="_blank">
            +54 9 343 474-9677
          </a>
        </ItemSocial>
        <ItemSocial>
          <a href="mailto:palmersofpunkrock@gmail.com" target="_blank">
            palmersofpunkrock@gmail.com
          </a>
        </ItemSocial>
      </Section>
    </App>
  );
};

const App = styled.div``;

const ToTopBtn = styled.i`
color: whitesmoke;
font-size: 35px;

`
