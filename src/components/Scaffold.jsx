import styled from "styled-components";

export default (props) => {
  return <Section id={props.id}>{props.children}</Section>;
};
const Section = styled.section`
  color: whitesmoke;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    letter-spacing: -0.5rem;
    transition: 0.3s all;
    &:hover {
      letter-spacing: 0.5rem;
      text-decoration-line: underline;
      text-decoration-color: #f16767;
    }
  }

  p {
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: whitesmoke;
    margin-top: 20px;
  }

  .date {
    font-size: 0.8rem;
    font-style: italic;
    color: #777;
    margin: 0;
  }

  svg {
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    h2 {
      &:hover {
        letter-spacing: 0;
      }
    }
  }

  @media (max-width: 320px) {
    h2 {
      text-align: center;
      letter-spacing: 0.2rem;

    }
  }
`;
