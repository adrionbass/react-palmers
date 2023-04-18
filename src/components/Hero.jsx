import styled from "styled-components";
import bgHeroImg from "../assets/hero-cover.jpg";
import logoHeroImg from "../assets/PalmersLogo.png"

export default (props) => {
  return (
    <Hero>
      <HeroContent>
        {props.children}
      </HeroContent>
    </Hero>
  );
};
const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  background-image: url(${bgHeroImg});
  background-position: center;
  ${'' /* background-position: bottom; */}
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 640px) {
      ${'' /* display: none; */}
      background-image: url(${logoHeroImg});
      background-size: 90%;
      
      ${'' /* background-size: contain; */}
      background-repeat: no-repeat;
    }
`;

const HeroContent = styled.div`
  margin-bottom: 150px;
  color: whitesmoke;
  text-align: center;
`;
