import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Technologia RFID" src="/img/about-rfid-hero.jpg"></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            Kim Jesteśmy?
          </h1>
          <h2 className="text-black text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl">
            Eksperci w dziedzinie systemów RFID, którzy pomagają firmom 
            zoptymalizować procesy biznesowe poprzez zaawansowaną technologię 
            identyfikacji radiowej.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
