import Section from "./Section";
import Mailer from "./Mailer";
import { ItemSocial } from "./Navbar.elements";

export default () => {
  return (
    <Section>
      <h2 id="contact">Contacto</h2>
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
  );
};
