import { useState } from "react";
import PalmersLogo from "../assets/PalmersLogo";
import {
  Navbar,
  Logo,
  NavItem,
  NavList,
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
            <a href="#home">
              <PalmersLogo height="2em" />
            </a>
          </Logo>
          <Hamb onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <HambIconOpend fill="#FFB84C" width="30px" />
            ) : (
              <HambIconClosd fill="#FFB84C" width="30px" />
            )}
          </Hamb>
          <NavList open={mobileMenu}>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)}>
              <ItemLink href="#news">
                NEWS
              </ItemLink>
            </NavItem>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)}>
              <ItemLink href="#about">
                NOSOTROS
              </ItemLink>
            </NavItem>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)}>
              <ItemLink href="#gallery">
                GALERIA
              </ItemLink>
            </NavItem>
            <NavItem onClick={() => setMobileMenu(!mobileMenu)} class="ctn">
              <ItemLink href="#contact">
                CONTACTO
              </ItemLink>
            </NavItem>
            <NavItem>
              <SocialIconsRow>
                <NavItem>
                  <ItemSocial>
                    <a
                      href="https://open.spotify.com/album/1ZC1E9zjMoHRia0eFLSxPm?si=_zLqHc9XSOyCC2Pzk2ADqQ"
                      target="_blank"
                    >
                      <FaSpotify />
                    </a>
                  </ItemSocial>
                </NavItem>
                <NavItem>
                  <ItemSocial>
                    <a
                      href="https://www.youtube.com/@palmersofpunkrock4635"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </ItemSocial>
                </NavItem>
                <NavItem>
                  <ItemSocial>
                    <a
                      href="https://www.instagram.com/palmersofpunkrock/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </ItemSocial>
                </NavItem>
              </SocialIconsRow>
            </NavItem>
          </NavList>
        </IconContext.Provider>
      </Wrapper>
    </Navbar>
  );
};
