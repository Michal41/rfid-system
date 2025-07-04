import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="O Nas - Systemy RFID"
        description="Eksperci w dziedzinie systemów RFID. Pomagamy firmom zoptymalizować procesy biznesowe poprzez zaawansowaną technologię identyfikacji radiowej. Poszukujemy klientów do wdrożenia systemów RFID."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
