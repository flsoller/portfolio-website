import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.mainLight};
  font-weight: "500";
  font-size: 1.4rem;
  letter-spacing: 3px;
  text-decoration: none;
`

const LinkItems = () => {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/technology">Technologie</StyledLink>
      <StyledLink to="/pricing">Preise</StyledLink>
      <StyledLink to="/about">Über uns</StyledLink>
      <StyledLink to="/contact">Kontakt</StyledLink>
    </>
  )
}

export default LinkItems
