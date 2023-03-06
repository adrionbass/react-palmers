import styled from "styled-components";

export default (props) => {
  return <Section id={props.id}>{props.children}</Section>;
};
const Section = styled.section`
  color: whitesmoke;
  text-align: center;
  ${'' /* padding: 30px 10%; */}
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

  h4 {
    font-size: 1rem;
    color: whitesmoke;
    margin: 20px auto;
  }

  @media screen and (max-width: 760px) {

  }

  @media (max-width: 320px) {
    h2 {
      text-align: center;
      letter-spacing: 0.2rem;
    }
  }
`;
