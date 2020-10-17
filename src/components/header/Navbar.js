import React, { useState } from "react"
import styled from "styled-components"

// Component imports
import BurgerMenu from "./BurgerMenu"
import LinkItems from "./LinkItems"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  color: ${props => props.theme.colors.mainLight};
  background-color: ${props => props.theme.colors.mainBlue};
`

const StyledNavLinks = styled.div`
  position: absolute;
  right: 0px;
  height: 92vh;
  top: 8vh;
  background-color: ${props => props.theme.colors.mainBlue};
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  opacity: 0.8;
  backdrop-filter: blur(16px);
  transition: transform 3s ease-in-out;
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(100%)"};

  @media ${({ theme }) => theme.breakpoints.navbar.desktop} {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 0;
    opacity: 1;
    height: auto;
    justify-content: space-around;
    width: 40%;
    transform: none;
  }
`
const StyledLogoContainer = styled.div``

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <StyledNav>
      <StyledLogoContainer>LogoPlaceholder</StyledLogoContainer>
      <StyledNavLinks openMenu={openMenu}>
        <LinkItems />
      </StyledNavLinks>
      <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </StyledNav>
  )
}

export default Navbar
