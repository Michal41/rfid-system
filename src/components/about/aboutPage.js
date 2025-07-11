import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Dokładność</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">99.9%</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Oszczędność Czasu</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">+85%</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Redukcja Kosztów</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">+60%</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">ROI</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">12-18 mies.</h4>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold">DLACZEGO RFID?</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Rewolucja w zarządzaniu zasobami
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Technologia RFID (Radio Frequency Identification) to przyszłość automatyzacji procesów biznesowych. 
          Nasze systemy RFID zapewniają precyzyjne śledzenie zasobów w czasie rzeczywistym, eliminują błędy 
          ludzkie i znacząco przyspieszają procesy inwentaryzacyjne. Dzięki zaawansowanym czytnikom RFID 
          i inteligentnym tagom, Twoja firma może osiągnąć pełną widoczność łańcucha dostaw, zoptymalizować 
          procesy magazynowe i zwiększyć efektywność operacyjną. Współpracujemy z firmami z różnych branż, 
          dostosowując rozwiązania RFID do ich specyficznych potrzeb i wymagań biznesowych.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
