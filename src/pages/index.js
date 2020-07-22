import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <SEO title="Home" />
    <h3>List data</h3>
    <div className="list-product">
      {data.allWordpressWcProducts.edges.map(product => (
        <div className="item" key={product.node.id}>
          <img alt="img" src={product.node.images[0].thumbnail} />
          <div className="text">
            <div className="name">{product.node.name}</div>
            <div dangerouslySetInnerHTML={{ __html: product.node.price_html }} />
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
    query MyQuery {
  allWordpressWcProducts {
    edges {
      node {
        name
        id
        description
        price_html
        images {
          thumbnail
        }
      }
    }
  }
}
`