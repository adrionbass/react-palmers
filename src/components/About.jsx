import Section from "./Section";
import Grid from "./GenericGrid";
import PalmersNosotros from "../utils/PalmersNosotros";
import NosotrosGrid from "./NosotrosGrid";
import PalmersLogo from "../assets/PalmersLogo";
export default () => {
  return (
    <Section>
      <h2 id="about">Nosotros</h2>
      <Grid>
        <div className="nos-txt">
          <p className="nos">
            Somos una banda paranaense que nació como idea de hacer un tributo
            punkrock a Los Palmeras en el año 2006. Cuando el proyecto
            finalmente comenzó a tomar forma en el 2017, decidimos incorporar al
            repertorio versiones rockeadas de Mario Pereyra, el Brujo Ezequiel y
            otros clásicos de la cumbia santafesina.
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
  );
};
