import { Fragment } from 'react'
import NavBar from './components/NavBar'
import { GlobalStyle, Container } from './styles/global'
import ContactSection from './components/contact'
import TechnologiesSection from './components/technologies'
import AboutSection from './components/about'
import AboutResumSection from './components/about-resume'

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Container >
        <AboutResumSection />
        <AboutSection />
        <TechnologiesSection />
        <ContactSection />
      </Container>
    </Fragment>
  )
}

