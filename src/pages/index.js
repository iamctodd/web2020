import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import { Link } from "gatsby"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <Link to="/page-2">page2</Link>
    </Layout>
  )
}

export default IndexPage
