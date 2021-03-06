import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [apiData, setAPIData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("/.netlify/functions/hello-world?name=jack")
      setAPIData(data)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{apiData.message}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
