import React, { Component } from "react"
import Layout from "../components/layout"
import "./our-work-page.scss"
import withThemeContext from "../utils/withThemeContext"
import SEO from "../components/seo"

class OurWorkPage extends Component {

    render() {
        return (
            <Layout>
                <SEO title="Some Of Our Best Work"
                    description="The Fearless is a Creative Agency based In Melbourne, here is some of our work in Strategy, Design & Developement." />
                <section>
                    <div className="header-section">
                        <h1>Our Recent work</h1>
                    </div>
                </section>
                <section className="work-section">

                </section>
            </Layout>
        )
    }
}

export default withThemeContext(OurWorkPage)
