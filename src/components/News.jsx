import Section from "./Section";
import Grid from "./GenericGrid";
import PalmersNews from "../utils/PalmersNews";
import Scaffold from "./Scaffold";
export default () => {
  return (
    <Section>
      <h2 id="news">News</h2>
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
  );
};
