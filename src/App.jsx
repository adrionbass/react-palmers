import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Grid from "./components/Grid";
import Scaffold from "./components/Scaffold";
import Mailer from "./components/Mailer";
import PalmersNews from "./utils/PalmersNews";
import PalmersNosotros from "./utils/PalmersNosotros";
import PalmersLogo from "./assets/PalmersLogo";
import { ItemSocial } from "./components/Navbar.elements";
import MasonryLayout from "./components/MasonryLayout";
import PalmersGallery from "./utils/PalmersGallery";
import NosotrosGrid from "./components/NosotrosGrid";

export default () => {
  return (
    <App>
      <Navbar />
      <Hero></Hero>
      <Section>
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

      <Section id="nosotros">
        <h2>Nosotros</h2>
        <Grid>




        
            <div className="nos-txt">
              <p className="nos">
                Somos una banda paranaense que nació como idea de hacer un
                tributo punkrock a Los Palmeras en el año 2006. Cuando el
                proyecto finalmente comenzó a tomar forma en el 2017, decidimos
                incorporar al repertorio versiones rockeadas de Mario Pereyra,
                el Brujo Ezequiel y otros clásicos de la cumbia santafesina.
              </p>
              <PalmersLogo height="3em" />
            </div>










            <NosotrosGrid>
            {PalmersNosotros.map((item) => (
              <img src={item.img_path} alt={item.name} />
            ))}
            </NosotrosGrid>
            

















          {/* <Grid>
            <div className="nos-txt">
              <p className="nos">
                Somos una banda paranaense que nació como idea de hacer un
                tributo punkrock a Los Palmeras en el año 2006. Cuando el
                proyecto finalmente comenzó a tomar forma en el 2017, decidimos
                incorporar al repertorio versiones rockeadas de Mario Pereyra,
                el Brujo Ezequiel y otros clásicos de la cumbia santafesina.
              </p>
              <PalmersLogo height="3em" />
            </div>
            {PalmersNosotros.map((item) => (
              <img src={item.img_path} alt={item.name} />
            ))}
          </Grid> */}
        </Grid>
      </Section>

      <Section>
        <h2>Galería</h2>
        <MasonryLayout>
          {PalmersGallery.map((item) => (
            
            <Scaffold>
            <img src={item.img_path} alt="gallery-img" />
              
            </Scaffold>
          ))}
        </MasonryLayout>
      </Section>

      <Section id="contacto">
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
