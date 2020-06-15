import React, { Component } from "react"
import Layout from "../components/layout"
import "./our-work-page.scss"
import withThemeContext from "../utils/withThemeContext"

class OurWorkPage extends Component {

    render() {
        return (
            <Layout>
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
