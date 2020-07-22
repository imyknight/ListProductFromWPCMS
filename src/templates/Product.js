import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import "../styles/product-detail.scss"


const ProductTemplate = ({ data }) => (
  <Layout>
    {console.log(data)}
    <div className="top">
      <div className="left">
        <img alt="img" src={data.wordpressWcProducts.images[0].thumbnail} />
      </div>
      <div className="right">
        <h2>{data.wordpressWcProducts.name}</h2>
        <div dangerouslySetInnerHTML={{__html: data.wordpressWcProducts.description}} />
      </div>
    </div>
    <div className="bot">
      bot
    </div>
  </Layout>
)

export const query = graphql`
  query ($id: Int!) {
  wordpressWcProducts(wordpress_id: {eq: $id}) {
    name
    description
    average_rating
    id
    sku
    short_description
    images {
      thumbnail
    }
  }
}

`

export default ProductTemplate

