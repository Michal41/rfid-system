import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Profesjonalne rozwiązania RFID<br></br> dla Twojej firmy. Zwiększ efektywność,
                <br></br>
                zoptymalizuj procesy i<br></br>
                zredukuj koszty operacyjne.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    RFID Systems
                  </a>

                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="/"
                    rel="noopener noreferrer"
                  >
                    - Eksperci RFID
                  </a>
                </p>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Strona Główna</Link>
                </li>
                <li>
                  <Link to="/o-nas">O Nas</Link>
                </li>
                <li>
                  <Link to="/realizacje">Realizacje</Link>
                </li>{" "}
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
