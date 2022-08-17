import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     directus {
  //       Team {
  //         id
  //       }
  //     }
  //   }
  // `)

  // console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Team</h1>

      <div className={styles.textCenter}></div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
