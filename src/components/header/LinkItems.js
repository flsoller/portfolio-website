import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.mainLight};
  letter-spacing: 2px;
  text-decoration: none;
`

const LinkItems = () => {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/technology">Tech</StyledLink>
      <StyledLink to="/pricing">Pricing</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </>
  )
}

export default LinkItems
