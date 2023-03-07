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
    transition: transform 0.3s ease;
    
    &:active {
      transform: scale(2);
      border-radius: 0;
    }
  }

`;