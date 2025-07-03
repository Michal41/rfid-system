import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-background.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              "Implementacja systemu RFID w naszej pralni przemysłowej to był przełomowy moment.
              Dzięki technologii RFID możemy teraz precyzyjnie śledzić każdą sztukę odzieży
              w procesie prania, skutecznie eliminując przypadki zgubień i pomyłek.
              Automatyczna identyfikacja i sortowanie znacząco przyspieszyły nasze procesy,
              a dokładność inwentaryzacji wzrosła do niemal 100%. Zwrot z inwestycji
              zobaczyliśmy już po 6 miesiącach użytkowania systemu."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Anna Konopka</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Właściciel, Pralnia Przemysłowa
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
