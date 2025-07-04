import React from "react"
import Fade from "react-reveal/Fade"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row xxs:flex-col xs:flex-col sm:flex-row mb-5">
          <div className="max-h-80 w-1/2 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-4 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-black opacity-70 text-4xl font-semibold">
              REALIZACJE
            </h1>
            <h1 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Systemy RFID
            </h1>
            <p className="text-lg mt-4 text-white opacity-70 xxs:text-sm sm:text-lg">
              Poznaj nasze najnowsze wdrożenia systemów RFID w różnych branżach. 
              Każda realizacja to unikalne rozwiązanie dostosowane do specyfiki 
              klienta i wymagań biznesowych.
            </p>
          </div>
          <div className="rounded-xl w-auto h-full object-cover flex justify-center">
            <img src="/img/gallery-hero.jpg" alt="RFID Systems Implementation"></img>
          </div>
        </div>
      </Fade>

      {/* RFID System Categories */}
      <div className="max-w-7xl mx-auto px-8 mt-10">
        <Fade bottom cascade>
          <div className="text-center mb-10">
            <h2 className="text-black text-4xl font-semibold opacity-70">
              KATEGORIE ROZWIĄZAŃ
            </h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Specjalizowane Systemy RFID
            </h3>
          </div>
        </Fade>

        <Fade bottom cascade>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#warehouse"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src="/img/gallery-warehouse.jpg"
                loading="lazy"
                alt="System RFID w magazynie"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Magazyny i Logistyka
              </span>
            </a>

            <a
              href="#retail"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src="/img/gallery-retail.jpg"
                loading="lazy"
                alt="RFID w handlu detalicznym"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Handel Detaliczny
              </span>
            </a>

            <a
              href="#manufacturing"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src="/img/gallery-manufacturing.jpg"
                loading="lazy"
                alt="RFID w produkcji"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Produkcja i Przemysł
              </span>
            </a>

            <a
              href="#healthcare"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src="/img/gallery-healthcare.jpg"
                loading="lazy"
                alt="RFID w służbie zdrowia"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Służba Zdrowia
              </span>
            </a>
            <a
              href="#access-control"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src="/img/gallery-access.jpg"
                loading="lazy"
                alt="Kontrola dostępu RFID"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Kontrola Dostępu
              </span>
            </a>

            <a
              href="#asset-tracking"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src="/img/gallery-asset.jpg"
                loading="lazy"
                alt="Śledzenie zasobów RFID"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Śledzenie Zasobów
              </span>
            </a>
          </div>
        </Fade>
      </div>

      {/* Featured Implementations */}
      <div className="max-w-7xl mx-auto px-8 mt-16">
        <Fade bottom cascade>
          <div className="text-center mb-10">
            <h2 className="text-black text-4xl font-semibold opacity-70">
              WYBRANE REALIZACJE
            </h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Sukcesy Naszych Klientów
            </h3>
          </div>
        </Fade>

        <Fade bottom cascade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Implementation 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/img/gallery-distribution.jpg"
                  alt="Centrum dystrybucyjne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Magazyn
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-2">
                  Centrum Dystrybucyjne - 50,000 m²
                </h4>
                <p className="text-gray-600 mb-4">
                  Automatyzacja procesów inwentaryzacyjnych w centrum 
                  dystrybucyjnym w Polsce. System RFID obsługuje 100,000+ produktów dziennie.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink text-white px-2 py-1 rounded text-xs">Inwentaryzacja</span>
                  <span className="bg-purple text-white px-2 py-1 rounded text-xs">Śledzenie</span>
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs">Automatyzacja</span>
                </div>
              </div>
            </div>

            {/* Implementation 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/img/gallery-retail.jpg"
                  alt="Sieć sklepów"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Handel
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-2">
                  Sieć Sklepów - 200+ Lokalizacji
                </h4>
                <p className="text-gray-600 mb-4">
                  Wdrożenie systemu RFID w sieci sklepów detalicznych. 
                  Redukcja strat o 85% i poprawa dostępności produktów o 95%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink text-white px-2 py-1 rounded text-xs">Antykradzież</span>
                  <span className="bg-purple text-white px-2 py-1 rounded text-xs">Inwentaryzacja</span>
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs">Analytics</span>
                </div>
              </div>
            </div>

            {/* Implementation 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/img/gallery-manufacturing.jpg"
                  alt="Zakład produkcyjny"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Produkcja
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-2">
                  Zakład Produkcyjny - Linia Montażowa
                </h4>
                <p className="text-gray-600 mb-4">
                  System RFID w produkcji samochodów. Śledzenie komponentów 
                  w czasie rzeczywistym i kontrola jakości na każdym etapie.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink text-white px-2 py-1 rounded text-xs">Śledzenie</span>
                  <span className="bg-purple text-white px-2 py-1 rounded text-xs">Kontrola Jakości</span>
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs">Automatyzacja</span>
                </div>
              </div>
            </div>

            {/* Implementation 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/img/gallery-healthcare.jpg"
                  alt="Szpital"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm">
                  Służba Zdrowia
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-2">
                  Szpital - 800 Łóżek
                </h4>
                <p className="text-gray-600 mb-4">
                  System RFID w szpitalu. Śledzenie sprzętu medycznego, 
                  kontrola dostępu i zarządzanie zapasami leków.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink text-white px-2 py-1 rounded text-xs">Sprzęt Medyczny</span>
                  <span className="bg-purple text-white px-2 py-1 rounded text-xs">Kontrola Dostępu</span>
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs">Bezpieczeństwo</span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-8 mt-16">
        <Fade bottom cascade>
          <div className="bg-gradient-to-r from-pink to-purple rounded-xl p-8 text-center">
            <h2 className="text-black text-4xl font-bold mb-8">
              NASZE OSIĄGNIĘCIA
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-black text-3xl font-bold">200+</div>
                <div className="text-black opacity-70">Wdrożeń</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">50+</div>
                <div className="text-black opacity-70">Klientów</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">99.9%</div>
                <div className="text-black opacity-70">Dokładność</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">24/7</div>
                <div className="text-black opacity-70">Wsparcie</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-8 mt-16 mb-10">
        <Fade bottom cascade>
          <div className="text-center">
            <h2 className="text-black text-4xl font-semibold opacity-70 mb-4">
              ZAINTERESOWANY?
            </h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple mb-6">
              Skontaktuj się z Nami
            </h3>
            <p className="text-black opacity-70 text-lg mb-8 max-w-2xl mx-auto">
              Chcesz zobaczyć więcej realizacji lub omówić możliwości wdrożenia 
              systemu RFID w Twojej firmie? Skontaktuj się z naszym zespołem ekspertów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
              >
                Umów Konsultację
              </a>
              <a
                href="tel:+48730720007"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
              >
                Zadzwoń Teraz
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery

/* 
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://source.unsplash.com/bYuI23mnmDQ"/>
        <img src="https://source.unsplash.com/Nllx4R-2c3o"/>
        <img src="https://source.unsplash.com/lp40q07DIe0"/>
        <img src="https://source.unsplash.com/wfalq01jJuU"/>
        <img src="https://source.unsplash.com/rMHNK_skwwU"/>
        <img src="https://source.unsplash.com/WBMjuGpbrCQ"/>
        <img src="https://source.unsplash.com/nCUZ5BYBL_o"/>
        <img src="https://source.unsplash.com/3u4fzMQZhjc"/>
        <img src="https://source.unsplash.com/haOIqIPSwps"/>
        <img src="https://source.unsplash.com/3UrYD7NNVxk"/>
        <img src="https://source.unsplash.com/fm1JKDItlVM"/>
        <img src="https://source.unsplash.com/qPpq1EVs8vw"/>
        <img src="https://source.unsplash.com/xRyL63AwZFE"/>
        <img src="https://source.unsplash.com/XeNKWTiCPNw"/>
        <img src="https://source.unsplash.com/DFt3T5r_4FE"/>
        <img src="https://source.unsplash.com/Ebwp2-6BG8E"/>
            </div>
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
*/
