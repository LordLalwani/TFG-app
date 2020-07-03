import React from "react"
import { graphql } from "gatsby"
import CaseStudy from "./caseStudy"

const Post = ({ data: { prismicCasestudies } }) => {
  const { data } = prismicCasestudies
  const prismicData = data;
  return (
    <CaseStudy {...prismicData}/>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($targetUID: String!) {
    prismicCasestudies(uid: { eq: $targetUID }) {
      id
      uid
    data {
      project_client {
        text
      }
      project_year {
        text
      }
      project_statement {
        text
      }
      project_hero_image {
        url
      }
      project_and_client_name {
        text
      }
      our_learnings {
        text
      }
      ideation {
        text
      }
      getting_started {
        text
      }
      services_offered {
        text
      }
      what_we_built {
        text
      }
    }
      }
  }
`