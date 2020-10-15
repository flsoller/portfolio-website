import React from "react"
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
  display: flex;
  justify-content: space-around;
  width: 30%;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.mainLight};
  letter-spacing: 2px;
  text-decoration: none;
`

const StyledLogoContainer = styled.div``

const Navbar = () => {
  return (
    <StyledNav>
      <StyledLogoContainer>LogoPlaceholder</StyledLogoContainer>
      <StyledNavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/technology">Tech</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNavLinks>
      <BurgerMenu />
    </StyledNav>
  )
}

export default Navbar
