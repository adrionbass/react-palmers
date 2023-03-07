import styled from "styled-components";

export default (props) => {
  return <Grid>{props.children}</Grid>;
};

const Grid = styled.div`
  columns: 2 5rem;
  column-gap: 0.5em;

  img {
    max-width: 100%;
    margin-bottom: 0.5em;
    transition: 0.3s all;
    &:hover {
      opacity: 0.5;
    }
  }

  ${'' /* @media screen and (max-width: 620px) {
    columns: 3 3rem;
    } */}
`;
