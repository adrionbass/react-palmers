import styled from "styled-components";

export default (props) => {
  return <GenericGrid>{props.children}</GenericGrid>;
};

const GenericGrid = styled.div`
 ${'' /*  padding: 0 5rem; */}
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: auto;
   
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 7px;

    


    @media screen and (max-width: 620px) {
      grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));

    }




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