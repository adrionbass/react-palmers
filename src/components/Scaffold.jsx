import styled from "styled-components";

export default (props) => {
  return <Section id={props.id}>{props.children}</Section>;
};
const Section = styled.section`
  color: whitesmoke;
  text-align: center;
  padding: 30px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;

    letter-spacing: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  .row {
    display: flex;
    align-items: top;
    width: 100%;
    justify-content: space-between;
  }

  .row .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2%;
  }

  .row .col img {
    width: 30vw;
    transition: transform 0.3s ease;
    &:hover{
      transform: scale(1.1);
    }
  }
  h4 {
    font-size: 1rem;
    color: whitesmoke;
    margin: 20px auto;
  }

  @media screen and (max-width: 760px) {
    .row {
      flex-direction: column;
      
    }

    .row .col img {
      width: 300px;
    }
  }

  @media (max-width: 320px) {
    h2 {
      text-align: center;
      letter-spacing: 0.2rem;
    }
    .row .col img {
      width: 270px;
    }
  }
`;
