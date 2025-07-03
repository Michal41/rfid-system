import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Systemy RFID | Oprogramowanie na zamówienie | Rozwiązania dla firm"
        description="Profesjonalne rozwiązania RFID dla Twojej firmy. Tworzymy dedykowane oprogramowanie do zarządzania inwentarzem, śledzenia zasobów i kontroli dostępu. Zwiększ efektywność swojego biznesu z naszymi systemami RFID."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
