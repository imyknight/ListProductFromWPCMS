import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h3>List data</h3>
    <div className="list-product">
      {data.allWordpressWcProducts.edges.map(product => (
        <Link key={product.node.id} to={`/product/${product.node.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}>
          <div className="item">
            <img alt="img" src={product.node.images[0].thumbnail} />
            <div className="text">
              <div className="name">{product.node.name}</div>
              <div dangerouslySetInnerHTML={{ __html: product.node.price_html }} />
            </div>
          </div>
        </Link>
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