import styled from "styled-components";

export default (props) => {
  return <Grid>{props.children}</Grid>;
};

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
   
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 7px;
  }
  .nos-txt {
    
    text-align: center;

    @media screen and (min-width: 620px) {
      margin: auto;
      text-align: right;

    }



    @media screen and (min-width: 840px) {

      margin-top: 10%;
    }
    @media screen and (min-width: 940px) {
      ${'' /* grid-template-columns: repeat(3, 1fr); */}
      &:nth-child(1) {
      grid-row: 1 / span 2;
    }
    }
  }
`;