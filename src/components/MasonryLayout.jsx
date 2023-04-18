import styled from "styled-components";

export default (props) => {
  return <Grid>{props.children}</Grid>;
};

const Grid = styled.div`
  columns: 5 10rem;
  column-gap: 0.5em;

  img {
    max-width: 100%;
    margin-bottom: 0.5em;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
    &:hover {
      opacity: 1;
      transform: scale(2);
      ${'' /* transform-origin: left; */}
    }
  }

  @media screen and (max-width: 620px) {
    columns: 3 3rem;
    }
`;
