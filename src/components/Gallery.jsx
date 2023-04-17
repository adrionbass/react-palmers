import Section from "./Section";
import MasonryLayout from "./MasonryLayout";
import PalmersGallery from "../utils/PalmersGallery";

let PalmersRandomGallery = [];
for (let x = 0; x < PalmersGallery.length; x++) {
  let randomImg =
    PalmersGallery[Math.floor(Math.random() * PalmersGallery.length)];
  while (PalmersRandomGallery.includes(randomImg)) {
    randomImg =
      PalmersGallery[Math.floor(Math.random() * PalmersGallery.length)];
  }
  PalmersRandomGallery.push(randomImg);
}

export default () => {
  return (
    <Section>
      <h2 id="gallery">Galería</h2>
      <MasonryLayout>
        {PalmersRandomGallery.map((item) => (
          <img src={item.img_path} alt="gallery-img" />
        ))}
      </MasonryLayout>
    </Section>
  );
};
/* ANTES LA IMG MAPEADA DENTRO DE MASONRYLAYOUT
ESTABA ENVUELTA POR UN SCAFFOLD, Y NO RECUERDO POR QUE */
