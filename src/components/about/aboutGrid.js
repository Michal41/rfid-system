import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="/img/about-warehouse.jpg"
        position="Magazyny i Logistyka"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="/img/about-manufacturing.jpg"
        position="Produkcja i Przemysł"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="/img/about-healthcare.jpg"
        position="Służba Zdrowia"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
