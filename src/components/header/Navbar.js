import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Component imports
import BurgerMenu from "./BurgerMenu"

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

  @media (min-width: 768px) {
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

const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.mainLight};
  letter-spacing: 2px;
  text-decoration: none;
`

const StyledLogoContainer = styled.div``

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <StyledNav>
      <StyledLogoContainer>LogoPlaceholder</StyledLogoContainer>
      <StyledNavLinks openMenu={openMenu}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/technology">Tech</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNavLinks>
      <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </StyledNav>
  )
}

export default Navbar
