import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Realizacje systemów RFID"
        description="Zobacz wdrożenia systemów RFID: magazyny, produkcja, handel i służba zdrowia. Automatyzacja inwentaryzacji, śledzenie zasobów i kontrola procesów."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
