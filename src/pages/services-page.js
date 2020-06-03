import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import withThemeContext from "../utils/withThemeContext"
import { ThemeContext } from "../contexts/themeContext";
import "./services-page.scss"
import VenDiagram from "../components/venDiagram"

class ServicesPage extends Component {
    static contextType = ThemeContext;

    componentDidMount() {
        const { toggleThemeIsLight } = this.context;
        toggleThemeIsLight(false)
    }

    render() {
        const { currentTheme } = this.context;
        return (
            <Layout>
                <SEO title="Home" />
                <div className="hero" style={{ color: currentTheme.fontColor, backgroundColor: currentTheme.backgroundColor }}>
                    <div className="hero-layout">
                        <header>
                            <h1>With the help of our clients, we craft experiences that users love.</h1>
                        </header>
                        <div className="hero-svg">
                            <VenDiagram />
                        </div>
                    </div>
                    <section className="services-section">
                        <div className="pre-header">
                            <h6>WHAT WE OFFER</h6>
                            <h2>We have a suite of services that help us craft the perfect digital experiences.</h2>
                        </div>
                        <div className="services">
                            <article className="service-offering">
                                <h4>Strategy</h4>
                                <p className="service-description">Our approach combines the worlds of business, technology and UX with a human-centred approach.</p>
                                <ul className="service-list">
                                    <li>Research & Insights</li>
                                    <li>Technical Sencemaking</li>
                                </ul>
                            </article>
                            <article className="service-offering">
                                <h4>Design</h4>
                                <p className="service-description">We value our craft and work with clients who understand the importance of investing in design.</p>
                                <ul className="service-list">
                                    <li>User Experience</li>
                                    <li>Digital Branding</li>
                                </ul>
                            </article>
                            <article className="service-offering">
                                <h4>Development</h4>
                                <p className="service-description">At the end of day, we're just a bunch of nerdy engineers who want to build prototypes and measure results.</p>
                                <ul className="service-list">
                                    <li>Static Websites</li>
                                    <li>Web Applications</li>
                                    <li>Mobile Applications</li>
                                    <li>IOT</li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default withThemeContext(ServicesPage)
