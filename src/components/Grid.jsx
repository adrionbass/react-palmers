import styled from "styled-components";

export default (props) => {
  return <Grid>{props.children}</Grid>;
};

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  ${"" /* grid-auto-rows: 30rem; */}
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  .nos-txt {
    ${'' /* display: flex;
    align-items: center; */}
    ${'' /* &:nth-child(1) {
      grid-row: 1 / span 2;
    } */}
    @media screen and (min-width: 620px) {
      margin-top: 25%;
    }
    @media screen and (min-width: 940px) {
      &:nth-child(1) {
      grid-row: 1 / span 2;
    }
    }
  }
`;
