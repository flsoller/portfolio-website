import React from "react"
import styled from "styled-components"

// Component imports.
import Navbar from "../components/header/Navbar"
import Landing from "../layouts/LandingContainer"
import {
  UpToDateSVG,
  MobileWebSVG,
  CodeReviewSVG,
  WebSearchSVG,
} from "../assets/drawings"

const StyledTagline = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 85%;
`

const StyledStatement = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 85%;
`

const StyledTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
`

const StyledButton = styled.button`
  width: 15rem;
  height: 2rem;
  outline: none;
  border: none;
  background-color: #3f3d56;
  color: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default function Home() {
  return (
    <>
      <Navbar />
      <StyledTagline>
        <p>Wir erstellen Ihren schnellen und modernen Internetauftritt.</p>
      </StyledTagline>
      <StyledStatement>
        <StyledTextGroup>
          <p>100% Mobile First.</p>
          <p>Innovative Technologien.</p>
        </StyledTextGroup>
        <StyledButton>Kontaktieren Sie uns</StyledButton>
      </StyledStatement>
      <Landing>
        <UpToDateSVG />
        <CodeReviewSVG />
      </Landing>
      <MobileWebSVG />
      <WebSearchSVG />
    </>
  )
}
