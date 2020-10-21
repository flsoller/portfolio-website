import React, { useState, useEffect } from "react"
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
  position: fixed;
  right: 0px;
  height: 100vh;
  top: 0vh;
  background-color: ${props => props.theme.colors.mainBlue};
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  opacity: 0.8;
  backdrop-filter: blur(16px);
  transition: ${props => (props.isResizing ? "none" : "transform 0.3s ease")};
  transform: ${props =>
    props.openMenu ? "translateX(0)" : "translateX(100%)"};

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
    transition: none;
  }
`
const StyledLogoContainer = styled.div``

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isResizing, setIsResizing] = useState(false)

  // Blocks animation/transition effects during window resizing.
  useEffect(() => {
    const userResizes = () => {
      setIsResizing(true)
      setTimeout(() => setIsResizing(false), 500)
    }

    window.addEventListener("resize", userResizes)

    // Cleanup to prevent unused events / memory leak.
    return () => window.removeEventListener("resize", userResizes)
  }, [])

  return (
    <StyledNav>
      <StyledLogoContainer>LogoPlaceholder</StyledLogoContainer>
      <StyledNavLinks openMenu={openMenu} isResizing={isResizing}>
        <LinkItems />
      </StyledNavLinks>
      <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </StyledNav>
  )
}

export default Navbar
