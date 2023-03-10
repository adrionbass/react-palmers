import styled from "styled-components";
import Scaffold from "./Scaffold";

export default (props) => {
  return (
    <Container>
      <Scaffold>{props.children}</Scaffold>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  padding: 30px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #090909;
`;
