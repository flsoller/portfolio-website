import React from "react"
import styled from "styled-components"

const StyledBurgerMenu = styled.div`
  cursor: pointer;
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
