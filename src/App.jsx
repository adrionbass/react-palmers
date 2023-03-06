import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import img1 from "./assets/news-img/palmers-cover-1.jpg";
import img2 from "./assets/news-img/kamisama-fest-cuadrado.jpg";

export default () => {
  return (
    <App>
      <Navbar />
      <Hero></Hero>
      <Section id="news">
        <h2>News</h2>
        <div className="row">
          
            <div className="col">
              <img src={img1} alt="" />
              <h4>Cuatro iracundos con sed de la peligrosa subidos a la rueda del cumbión</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                dolorum ad cumque accusantium blanditiis sequi nam inventore
                corrupti sint eligendi consequatur similique aut reprehenderit?
                Quos obcaecati tenetur laboriosam mollitia minima.
              </p>
              <a href="#" className="ctn">
                More ...
              </a>
            </div>
            <div className="col">
              <img src={img2} alt="" />
              <h4>Kamisama Fest</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                dolorum ad cumque accusantium blanditiis sequi nam inventore
                corrupti sint eligendi consequatur similique aut reprehenderit?
                Quos obcaecati tenetur laboriosam mollitia minima.
              </p>
              <a href="#" className="ctn">
                More ...
              </a>
            </div>
          </div>
        
      </Section>
      <Section id="nosotros">
        <h2>Nosotros</h2>
        <p>
          Somos una banda paranaense que nació como idea de hacer un tributo
          punkrock a Los Palmeras en el año 2006. Cuando el proyecto finalmente
          comenzó a tomar forma en el 2017, decidimos incorporar al repertorio
          versiones rockeadas de Mario Pereyra, el Brujo Ezequiel y otros
          clásicos de la cumbia santafesina.
        </p>
      </Section>
    </App>
  );
};

const App = styled.div``;
