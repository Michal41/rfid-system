import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonial from "../components/Home/testimonial"

const RfidMagazynPage = () => {
  return (
    <Layout>
      <Seo
        title="RFID magazyn - automatyzacja procesów magazynowych"
        description="RFID w magazynie to szybka identyfikacja towarów, mniejsza liczba pomyłek i pełna kontrola stanów. Wdrażamy systemy RFID dla magazynów wysokiego składowania, centrów logistycznych i e-commerce."
      />

      <section className="max-w-7xl mx-auto mt-10">
        <Fade duration={1800}>
          <div className="flex flex-row xxs:flex-col-reverse sm:flex-row m-4">
            <div className="max-h-96 w-1/2 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl xxs:w-full sm:w-1/2">
              <h1 className="text-black opacity-70 text-4xl font-semibold xxs:text-2xl sm:text-3xl lg:text-4xl">
                RFID MAGAZYN
              </h1>
              <h2 className="text-white text-5xl font-bold mt-2 xxs:text-2xl sm:text-4xl lg:text-5xl">
                Automatyzacja procesów magazynowych
              </h2>
              <p className="text-lg mt-4 text-white opacity-80 xxs:text-sm sm:text-base">
                System RFID dla magazynu pozwala automatycznie identyfikować towary
                na każdym etapie przepływu: od przyjęcia dostawy, przez kompletację,
                aż po wydanie i inwentaryzację. Zyskujesz pełną kontrolę stanów i
                szybszą realizację zamówień.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden w-1/2 xxs:w-full sm:w-1/2 xxs:mb-4 sm:mb-0 sm:ml-4">
              <img
                src="/img/home-warehouse.jpg"
                alt="System RFID w magazynie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Fade>
      </section>

      <section className="max-w-7xl mx-auto mt-8 px-5">
        <div className="bg-dp opacity-70 p-10 rounded-xl">
          <h2 className="text-2xl font-semibold text-black xxs:text-xl sm:text-2xl">
            Dlaczego warto wdrożyć RFID w magazynie?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Automatyczna identyfikacja towarów
              </h3>
              <p className="mt-2 text-black opacity-70">
                Odczyt wielu tagów jednocześnie bez potrzeby skanowania każdej
                etykiety. Pracownicy oszczędzają czas przy przyjęciach i wydaniach.
              </p>
            </div>
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Mniej pomyłek operacyjnych
              </h3>
              <p className="mt-2 text-black opacity-70">
                Stała kontrola przepływu produktów ogranicza błędy kompletacji i
                redukuje koszty związane z niezgodnością stanów magazynowych.
              </p>
            </div>
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Szybsza inwentaryzacja
              </h3>
              <p className="mt-2 text-black opacity-70">
                Inwentaryzacja RFID może być wykonana wielokrotnie szybciej niż
                tradycyjnie, a dane o stanie towaru są dostępne niemal natychmiast.
              </p>
            </div>
            <div className="bg-bg bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black">
                Integracja z WMS i ERP
              </h3>
              <p className="mt-2 text-black opacity-70">
                Wdrożenie RFID łączymy z systemami używanymi w firmie, dzięki czemu
                wszystkie działy działają na tych samych, aktualnych danych.
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
                  src="/img/gallery-warehouse.jpg"
                  alt="Bramki RFID i strefa przyjęć"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Przyjęcia i wydania
                </div>
              </div>
              <div className="p-6 text-black">
                <h3 className="text-2xl font-bold">Kontrola przepływu towaru</h3>
                <p className="text-gray-600 mt-2">
                  Rejestracja ruchu towaru w punktach krytycznych: bramy, strefy
                  kompletacji i wysyłki. System wykrywa niezgodności w czasie
                  rzeczywistym.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src="/img/gallery-distribution.jpg"
                  alt="Nowoczesne centrum dystrybucyjne z RFID"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Inwentaryzacja
                </div>
              </div>
              <div className="p-6 text-black">
                <h3 className="text-2xl font-bold">Dokładne stany magazynowe</h3>
                <p className="text-gray-600 mt-2">
                  Mobilne czytniki RFID pozwalają szybko porównać stany fizyczne z
                  systemowymi i błyskawicznie wyłapać rozbieżności.
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
              Dla jakich magazynów jest system RFID?
            </h2>
            <p className="mt-4 text-white opacity-90 text-lg xxs:text-sm sm:text-base">
              Rozwiązania RFID wdrażamy w centrach logistycznych, magazynach
              e-commerce, magazynach produkcyjnych oraz obiektach wysokiego
              składowania. Projektujemy cały proces: od doboru tagów i anten, po
              integrację z systemami oraz szkolenie zespołu.
            </p>
            <h3 className="text-black text-2xl font-bold mt-8 xxs:text-xl sm:text-2xl">
              Najważniejsze korzyści biznesowe
            </h3>
            <p className="mt-3 text-white opacity-90 xxs:text-sm sm:text-base">
              Wdrożenie RFID zwiększa przepustowość operacji, poprawia dokładność
              danych i skraca czas realizacji zamówień. Firmy zyskują pełną
              identyfikowalność produktów oraz większą przewidywalność kosztów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/contact"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg"
              >
                Umów konsultację RFID
              </a>
              <a
                href="tel:+48730720007"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:text-lg"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </Fade>
      </section>
      <Testimonial></Testimonial>
    </Layout>
  )
}

export default RfidMagazynPage
