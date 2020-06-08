import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const GImage = () => {

    const data = useStaticQuery(graphql`
        query images {
            image: file(relativePath: {eq: "contact-photo.jpg"}) {
                id
                childImageSharp {
                sizes {
                    src
                }
                fixed (width: 400) {
                    ...GatsbyImageSharpFixed
                }
                fluid {
                    ...GatsbyImageSharpFluid
                }
                }
            }
        }
  `)

    return <div style={{ backgroundColor: "black", borderRadius: 10}}>
        <Img
            fluid={data.image.childImageSharp.fluid}
            alt="test"
            fadeIn={true}
            durationFadeIn={3000}
            style={{ opacity: 0.9, borderRadius: 10 }}
        />
    </div>
}

export default GImage;
