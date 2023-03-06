import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import img1 from "./assets/news-img/palmers-cover-1.jpg";
import img2 from "./assets/news-img/kamisama-fest-cuadrado.jpg";
import Grid from "./components/Grid";
import Scaffold from "./components/Scaffold";

export default () => {
  return (
    <App>
      <Navbar />
      <Hero></Hero>
      <Section>
        <h2>News</h2>
        <Grid className="grid">
          <Scaffold>
            <img src={img1} alt="" />
            <h4>
              Cuatro iracundos con sed de la peligrosa subidos a la rueda del
              cumbión
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              dolorum ad cumque accusantium blanditiis sequi nam inventore
              corrupti sint eligendi consequatur similique aut reprehenderit?
              Quos obcaecati tenetur laboriosam mollitia minima.
            </p>
          </Scaffold>

          <Scaffold>
            <img src={img2} alt="" />
            <h4>Kamisama Fest @ Libo Rock-pub!</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              dolorum ad cumque accusantium blanditiis sequi nam inventore
              corrupti sint eligendi consequatur similique aut reprehenderit?
              Quos obcaecati tenetur laboriosam mollitia minima.
            </p>
          </Scaffold>

          <Scaffold>
            <img src={img2} alt="" />
            <h4>Kamisama Fest @ Libo Rock-pub!</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              dolorum ad cumque accusantium blanditiis sequi nam inventore
              corrupti sint eligendi consequatur similique aut reprehenderit?
              Quos obcaecati tenetur laboriosam mollitia minima.
            </p>
          </Scaffold>

          <Scaffold>
            <img src={img1} alt="" />
            <h4>
              Cuatro iracundos con sed de la peligrosa subidos a la rueda del
              cumbión
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              dolorum ad cumque accusantium blanditiis sequi nam inventore
              corrupti sint eligendi consequatur similique aut reprehenderit?
              Quos obcaecati tenetur laboriosam mollitia minima.
            </p>
          </Scaffold>

          <Scaffold>
            <img src={img1} alt="" />
            <h4>
              Cuatro iracundos con sed de la peligrosa subidos a la rueda del
              cumbión
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              dolorum ad cumque accusantium blanditiis sequi nam inventore
              corrupti sint eligendi consequatur similique aut reprehenderit?
              Quos obcaecati tenetur laboriosam mollitia minima.
            </p>
          </Scaffold>
        </Grid>
        <p>Juan Jose Pitto</p>
      </Section>

      <Section id="nosotros">
        <h2>Nosotros</h2>
        <Grid>
          
          <Grid>
          <div className="nos-txt">
          <p className="nos">
            Somos una banda paranaense que nació como idea de hacer un tributo
            punkrock a Los Palmeras en el año 2006. Cuando el proyecto
            finalmente comenzó a tomar forma en el 2017, decidimos incorporar al
            repertorio versiones rockeadas de Mario Pereyra, el Brujo Ezequiel y
            otros clásicos de la cumbia santafesina.
          </p>
          </div>
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
          </Grid>
        </Grid>
      </Section>
      <Section id="contacto">
        <h2>Contacto</h2>
        <p>Juan Pitto</p>
      </Section>
    </App>
  );
};

const App = styled.div``;
