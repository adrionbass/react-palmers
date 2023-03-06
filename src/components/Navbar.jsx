import { useState } from "react";
import PalmersLogo from "../assets/PalmersLogo";
import {
  Navbar,
  Logo,
  NavItem,
  NavLinks,
  ItemLink,
  ItemSocial,
  Active,
  Hamb,
  Wrapper,
  SocialIconsRow,
} from "./Navbar.elements";
import HambIconClosd from "../assets/HambIconClosd";
import HambIconOpend from "../assets/HambIconOpend";
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

export default () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <Navbar>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
          <Logo>
            <PalmersLogo height="2em" />
          </Logo>
          <Hamb onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <HambIconOpend fill="#feac00" width="30px" />
            ) : (
              <HambIconClosd fill="#feac00" width="30px" />
            )}
          </Hamb>
          <NavLinks open={mobileMenu}>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)}>
              <Active>
                <ItemLink href="#fechas">FECHAS</ItemLink>
              </Active>
            </NavItem>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)}>
              <ItemLink href="#multimedia">MULTIMEDIA</ItemLink>
            </NavItem>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)}>
              <ItemLink href="#about">NOSOTROS</ItemLink>
            </NavItem>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)} class="ctn">
              <ItemLink href="#contacto">CONTACTO</ItemLink>
            </NavItem>
            <NavItem>
              <SocialIconsRow>
                <NavItem>
                  <ItemSocial>
                    <FaSpotify />
                  </ItemSocial>
                </NavItem>
                <NavItem>
                  <ItemSocial>
                    <a href="https://www.youtube.com/@palmersofpunkrock4635" target="_blank">
                    <FaYoutube />
                    </a>
                  </ItemSocial>
                </NavItem>
                <NavItem>
                  <ItemSocial>
                    <a href="https://www.instagram.com/palmersofpunkrock/" target="_blank">
                    <FaInstagram />
                    </a>
                  </ItemSocial>
                </NavItem>
              </SocialIconsRow>
            </NavItem>
          </NavLinks>
        </IconContext.Provider>
      </Wrapper>
    </Navbar>
  );
};
