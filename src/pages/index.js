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
  font-size: 0.9rem;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
`

const StyledButton = styled.button`
  width: 15rem;
  height: 2rem;
  outline: none;
  border: none;
  background-color: ${props => props.theme.colors.mainBlue};
  color: ${props => props.theme.colors.mainLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  height: 45%;
  width: 100%;
  background-color: ${props => props.theme.colors.mainBlue};
  color: ${props => props.theme.colors.mainLight};

  h3 {
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  h5 {
    margin-top: 1rem;
  }

  button {
    outline: none;
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.mainLightAlt};
    margin-top: 0.5rem;
  }
`

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing>
        <StyledTagline>
          <h1>Wir erstellen Ihren schnellen und modernen Internetauftritt.</h1>
        </StyledTagline>
        <StyledStatement>
          <StyledTextGroup>
            <p>100% Mobile First.</p>
            <p>Innovative Technologien.</p>
          </StyledTextGroup>
          <StyledButton>Kontaktieren Sie uns</StyledButton>
        </StyledStatement>
        <UpToDateSVG />
        <BottomSection>
          <h3>Was wir bieten</h3>
          <h5>
            Handgeschriebene Webseiten ab 150€ / Monat. <br /> Kein Wordpress.
            Keine Pagebuilder.
          </h5>
          <button>mehr erfahren...</button>
          <CodeReviewSVG />
        </BottomSection>
      </Landing>
      <MobileWebSVG />
      <WebSearchSVG />
    </main>
  )
}
