import React from "react"

import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 92vh;
`

const Landing = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Landing
