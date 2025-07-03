import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            BĄDŹ NA BIEŻĄCO
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Aktualności RFID
          </h3>
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Rewolucja w zarządzaniu magazynem dzięki RFID
            </h2>
            <p className="text-lg text-black opacity-60 mb-6">
              Odkryj, jak technologia RFID może zrewolucjonizować zarządzanie Twoim magazynem. 
              Automatyzacja procesów inwentaryzacyjnych, redukcja błędów ludzkich i znaczące 
              oszczędności czasowe to tylko niektóre z korzyści, jakie oferują nasze 
              rozwiązania RFID dla biznesu.
            </p>
            <a
              href="/blog/rfid-w-magazynie"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              Czytaj Więcej
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Kontrola dostępu RFID - bezpieczeństwo Twojej firmy
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Zaawansowane systemy kontroli dostępu RFID zapewniają najwyższy poziom 
                bezpieczeństwa w Twojej firmie. Poznaj nowoczesne rozwiązania, które 
                pozwalają na precyzyjne zarządzanie dostępem do pomieszczeń i monitoring 
                ruchu pracowników.
              </p>
              <a
                href="/blog/kontrola-dostepu-rfid"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Czytaj Więcej
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
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Optymalizacja łańcucha dostaw z RFID
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Dowiedz się, jak technologia RFID może usprawnić Twój łańcuch dostaw. 
                Śledzenie produktów w czasie rzeczywistym, automatyzacja procesów 
                logistycznych i eliminacja błędów w inwentaryzacji to kluczowe 
                zalety naszych rozwiązań.
              </p>
              <a
                href="/blog/rfid-w-lancuchu-dostaw"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Czytaj Więcej
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
    </Fade>
  )
}

export default FeaturedBlog
