import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const PageTemplate = ({data}) => (
 <Layout>
   <h1>{data.wordpressPage.title}</h1>
   <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}} />
 </Layout>
)

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      author {
      name
      }
    content
    title
    }
  }
`

export default PageTemplate