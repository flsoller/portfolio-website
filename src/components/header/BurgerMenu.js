import React from "react"
import styled from "styled-components"

const StyledBurgerMenu = styled.button`
  cursor: pointer;
  transition: all 0.3s linear;
  background: transparent;
  outline: none;
  border: none;

  div {
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ openMenu }) =>
        openMenu ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
      transform: ${({ openMenu }) =>
        openMenu ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ openMenu }) =>
        openMenu ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const BurgerMenuLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${props => props.theme.colors.mainLight};
  margin: 5px;
  border-radius: 1px;
`

const BurgerMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <StyledBurgerMenu
      openMenu={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <BurgerMenuLine />
      <BurgerMenuLine />
      <BurgerMenuLine />
    </StyledBurgerMenu>
  )
}

export default BurgerMenu
