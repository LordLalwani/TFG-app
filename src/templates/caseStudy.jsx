import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import withThemeContext from "../utils/withThemeContext"
import { ThemeContext } from "../contexts/themeContext";
import "./caseStudy.scss"

class CaseStudy extends Component {

    static contextType = ThemeContext;

    componentDidMount() {
        const { toggleThemeIsLight } = this.context;
        toggleThemeIsLight(true)
    }

    render() {
        const { project_and_client_name, project_statement, project_hero_image, getting_started, ideation, what_we_built,
            our_learnings, services_offered, project_year, project_client } = this.props
        return (
            <Layout>
                <SEO title="Home" />
                <div className="banner">
                    <h6>{project_and_client_name[0].text.toUpperCase()}</h6>
                    <h1>{project_statement[0].text}</h1>
                </div>
                <div className="hero-image">
                    <img className="case-study-image" src={project_hero_image.url} />
                </div>
                <div className="project-breakdown">
                    <div className="project-section">
                        <h5>CLIENT</h5>
                        <hr />
                        <p>{project_client[0].text}</p>
                    </div>
                    <div className="project-section">
                        <h5>SERVICES</h5>
                        <hr />
                        <div>{services_offered.map((service) => {
                            return <p>{service.text}</p>
                        })}</div>
                    </div>
                    <div className="project-section">
                        <h5>YEAR</h5>
                        <hr />
                        <p>{project_year[0].text}</p>
                    </div>
                </div>
                <div className="main-content">
                    <div className="content-section">
                        <h2>Getting Started</h2>
                    </div>

                    <div className="content-section">
                        <h2>Ideation</h2>
                        <p>{ideation[0].text}</p>
                    </div>

                    <div className="content-section">
                        <h2>What We Built</h2>
                        <p>{what_we_built[0].text}</p>
                    </div>

                    <div className="content-section">
                        <h2>What We Learnt Along The Way</h2>
                        <p>{our_learnings[0].text}</p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withThemeContext(CaseStudy)
