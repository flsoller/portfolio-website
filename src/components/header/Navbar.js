import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  color: ${props => props.theme.colors.mainLight};
  background-color: ${props => props.theme.colors.mainBlue};
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.mainLight};
  text-decoration: none;
`

const StyledLogoContainer = styled.div``

const Navbar = () => {
  return (
    <StyledNav>
      <StyledLogoContainer>LogoPlaceholder</StyledLogoContainer>
      <ul>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/technology">Technology</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </ul>
    </StyledNav>
  )
}

export default Navbar
