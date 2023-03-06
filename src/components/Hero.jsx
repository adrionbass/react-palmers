import styled from "styled-components";
import bgHeroImg from "../assets/hero-cover.jpg"

export default (props) => {
  return (
    <Hero>
      <HeroContent>{props.children}</HeroContent>
    </Hero>
  );
};
const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  background: #191919;
  background-image: url(${bgHeroImg});
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const HeroContent = styled.div`
  margin-bottom: 150px;
  color: whitesmoke;
  text-align: center;
`;
