import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Dokładność</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">99.9%</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Wydajność</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">+80%</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Oszczędność Czasu</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">+65%</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">ROI</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">12-18 mies.</h4>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="Systemy RFID dla firm"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">TECHNOLOGIA RFID</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Automatyzacja i Kontrola
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Nasze systemy RFID zapewniają pełną automatyzację procesów inwentaryzacji, 
              śledzenia zasobów i kontroli dostępu. Zwiększ efektywność swojej firmy 
              dzięki precyzyjnym rozwiązaniom dostosowanym do Twoich potrzeb.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:+48730720007"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Zadzwoń Teraz
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/realizacje"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Zobacz Realizacje
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              ZASTOSOWANIA
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Inwentaryzacja</p>
                <p className="text-black opacity-50 text-sm">Automatyczne liczenie</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Kontrola Dostępu</p>
                <p className="text-black opacity-50 text-sm">Bezpieczeństwo</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Śledzenie Zasobów</p>
                <p className="text-black opacity-50 text-sm">
                  Pełna widoczność
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              Zrewolucjonizuj zarządzanie zasobami
            </h2>
            <p className="mt-10 text-white opacity-70">
              Nasze systemy RFID to kompleksowe rozwiązania dla firm każdej wielkości. 
              Oferujemy pełną automatyzację procesów inwentaryzacyjnych, skuteczne 
              śledzenie zasobów w czasie rzeczywistym oraz zaawansowaną kontrolę dostępu. 
              Dzięki naszym rozwiązaniom znacząco zredukujesz koszty operacyjne, 
              wyeliminujesz błędy ludzkie i zwiększysz efektywność procesów w swojej firmie.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INNOWACYJNE ROZWIĄZANIA
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Dedykowane Systemy RFID
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Projektujemy i wdrażamy zaawansowane systemy RFID dostosowane do specyfiki 
          Twojej branży. Nasze rozwiązania wspierają automatyzację procesów, 
          optymalizację łańcucha dostaw i efektywne zarządzanie zasobami. Wykorzystujemy 
          najnowsze technologie RFID, aby zapewnić najwyższą dokładność i niezawodność 
          systemu.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INTEGRACJA SYSTEMÓW
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Kompleksowe Wdrożenia
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Zapewniamy pełną integrację systemów RFID z istniejącą infrastrukturą IT 
          Twojej firmy. Nasze rozwiązania można łatwo połączyć z systemami ERP, WMS 
          czy innymi narzędziami biznesowymi. Oferujemy kompleksowe wsparcie techniczne 
          i szkolenia dla personelu, aby maksymalnie wykorzystać potencjał technologii RFID.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Zapytaj o Wycenę
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="System RFID w magazynie" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Kontrola dostępu RFID" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Śledzenie zasobów RFID" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Doświadczenie</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">10+ lat</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Realizacje</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              200+ wdrożeń
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Wsparcie</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              24/7
            </h4>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
