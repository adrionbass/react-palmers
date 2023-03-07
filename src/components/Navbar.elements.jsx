import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background: #000;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const Logo = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

export const NavLinks = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Active = styled.div`
  margin: 0 15px;
  padding: 5px;
  background-color: #FFB84C;
  border-radius: 15px 0 15px 0;
  transition: 1s ease;
  &:hover {
    background-color: whitesmoke;
    border-radius: 0 15px 0 15px;
    a {
      color: #FFB84C;
      background-color: whitesmoke;
    }
  }
`;

export const ItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: whitesmoke;
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    background-color: #FFB84C;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const SocialIconsRow = styled.ul`
  display: flex;

  justify-content: center;

  @media screen and (max-width: 960px) {
    position: absolute;

    flex-direction: row;
    width: 20%;

    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const ItemSocial = styled.span`
  ${'' /* display: flex; */}
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  padding: 0.5rem 0.5rem;
  
  ${'' /* text-decoration: none; */}
  cursor: pointer;
  transition: 0.5s all ease;
  svg {
    fill: #A459D1;
  }
  &:hover {
    svg {
      fill: whitesmoke;
    }
    background-color: #A459D1;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Hamb = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;
