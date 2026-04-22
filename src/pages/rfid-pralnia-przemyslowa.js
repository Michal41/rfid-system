import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonial from "../components/Home/testimonial"

const RfidPralniaPrzemyslowaPage = () => {
  return (
    <Layout>
      <Seo
        title="RFID w pralni przemysłowej - kontrola obiegu tekstyliów"
        description="RFID w pralni przemysłowej umożliwia pełną kontrolę obiegu tekstyliów, automatyczne zliczanie asortymentu i redukcję strat. Wdrażamy systemy RFID dla pralni hotelowych, medycznych i przemysłowych."
      />

      <section className="max-w-7xl mx-auto mt-10">
        <Fade duration={1800}>
          <div className="flex flex-row xxs:flex-col-reverse sm:flex-row m-4">
            <div className="max-h-96 w-1/2 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl xxs:w-full sm:w-1/2">
              <h1 className="text-black opacity-70 text-4xl font-semibold xxs:text-2xl sm:text-3xl lg:text-4xl">
                RFID W PRALNI PRZEMYSLOWEJ
              </h1>
              <h2 className="text-white text-5xl font-bold mt-2 xxs:text-2xl sm:text-4xl lg:text-5xl">
                Pelna kontrola obiegu tekstyliow
              </h2>
              <p className="text-lg mt-4 text-white opacity-80 xxs:text-sm sm:text-base">
                System RFID dla pralni przemyslowej automatyzuje ewidencje
                odziezy roboczej, bielizny hotelowej i tekstyliow medycznych.
                Kazdy element jest identyfikowany automatycznie, co zwieksza
                dokladnosc rozliczen i eliminuje reczne liczenie.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden w-1/2 xxs:w-full sm:w-1/2 xxs:mb-4 sm:mb-0 sm:ml-4">
              <img
                src="/img/gallery-healthcare.jpg"
                alt="RFID w pralni przemyslowej"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Fade>
      </section>

      <section className="max-w-7xl mx-auto mt-8 px-5">
        <div className="bg-dp opacity-70 p-10 rounded-xl">
          <h2 className="text-2xl font-semibold text-black xxs:text-xl sm:text-2xl">
            Dlaczego warto wdrozyc RFID w pralni przemyslowej?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Automatyczne zliczanie tekstyliow
              </h3>
              <p className="mt-2 text-black opacity-70">
                Odczyt wielu tagow RFID jednoczesnie przy przyjeciu i wydaniu
                partii. Krotki czas obslugi zlecen i mniej pomylek operatorow.
              </p>
            </div>
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Mniejsze straty i pelna rozliczalnosc
              </h3>
              <p className="mt-2 text-black opacity-70">
                Stala kontrola obiegu ogranicza zagubienia odziezy i bielizny.
                Kazdy cykl prania jest rejestrowany, co ulatwia raportowanie.
              </p>
            </div>
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Lepsze planowanie produkcji pralni
              </h3>
              <p className="mt-2 text-black opacity-70">
                Dane RFID w czasie rzeczywistym pomagaja planowac moce
                przerobowe, harmonogramy i dostawy czystych tekstyliow.
              </p>
            </div>
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Integracja z ERP i systemami klienta
              </h3>
              <p className="mt-2 text-black opacity-70">
                Integrujemy RFID z systemami pralni i kontrahentow, aby
                przyspieszyc rozliczenia oraz zapewnic przejrzyste dane.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-8 px-5 text-white">
        <Fade bottom cascade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src="/img/gallery-asset.jpg"
                  alt="Sortowanie tekstyliow z RFID"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Przyjecie i sortowanie
                </div>
              </div>
              <div className="p-6 text-black">
                <h3 className="text-2xl font-bold">Kontrola kazdego etapu</h3>
                <p className="text-gray-600 mt-2">
                  RFID wspiera przyjecie brudnego asortymentu, sortowanie,
                  pranie, pakowanie i wydanie. Zyskujesz pelny obraz procesu.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src="/img/gallery-distribution.jpg"
                  alt="Wydania i zwroty tekstyliow pralnia RFID"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Wydania i zwroty
                </div>
              </div>
              <div className="p-6 text-black">
                <h3 className="text-2xl font-bold">Dokladne rozliczenia klientow</h3>
                <p className="text-gray-600 mt-2">
                  Automatyczna identyfikacja partii tekstyliow przy wydaniu i
                  zwrocie redukuje reklamacje i przyspiesza obieg dokumentow.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="max-w-7xl mx-auto mt-8 px-5 mb-10 text-white">
        <Fade bottom cascade>
          <div className="bg-gradient-to-r from-pink to-purple p-10 rounded-xl">
            <h2 className="text-black text-4xl font-semibold xxs:text-2xl sm:text-3xl">
              Dla kogo jest system RFID w pralni?
            </h2>
            <p className="mt-4 text-white opacity-90 text-lg xxs:text-sm sm:text-base">
              Rozwiazania RFID wdrazamy dla pralni obslugujacych hotele, szpitale,
              zaklady produkcyjne i firmy uslugowe. Dobieramy odpowiednie tagi do
              warunkow prania, projektujemy proces i szkolimy zespol operacyjny.
            </p>
            <h3 className="text-black text-2xl font-bold mt-8 xxs:text-xl sm:text-2xl">
              Korzysci SEO i biznesowe
            </h3>
            <p className="mt-3 text-white opacity-90 xxs:text-sm sm:text-base">
              RFID w pralni przemyslowej zwieksza dokladnosc ewidencji, skraca
              czas obslugi klienta i poprawia rentownosc uslugi. To nowoczesne
              rozwiazanie dla firm, ktore chca ograniczyc straty tekstyliow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/contact"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg"
              >
                Umow konsultacje RFID
              </a>
              <a
                href="tel:+48730720007"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:text-lg"
              >
                Zadzwon teraz
              </a>
            </div>
          </div>
        </Fade>
      </section>
      <Testimonial></Testimonial>
    </Layout>
  )
}

export default RfidPralniaPrzemyslowaPage
