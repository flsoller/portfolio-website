import React from "react"
import styled from "styled-components"

const StyledBurgerMenu = styled.div`
  display: none;
`

const BurgerMenuLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${props => props.theme.colors.mainLight};
  margin: 5px;
`

const BurgerMenu = () => {
  return (
    <StyledBurgerMenu>
      <BurgerMenuLine />
      <BurgerMenuLine />
      <BurgerMenuLine />
    </StyledBurgerMenu>
  )
}

export default BurgerMenu
