import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import withThemeContext from "../utils/withThemeContext"
import { ThemeContext } from "../contexts/themeContext";
import "./services-page.scss"
import VenDiagram from "../components/venDiagram"
import Observer from '@researchgate/react-intersection-observer'

const getPrintableThreshold = (ratio, range) =>
    range.reduce((prev, curr) =>
        Math.abs(curr - ratio) < Math.abs(prev - ratio) ? curr : prev);

class ServicesPage extends Component {
    static contextType = ThemeContext;

    componentDidMount() {
        const { toggleThemeIsLight } = this.context;
        toggleThemeIsLight(false)
    }

    handleChange = ({ isIntersecting, intersectionRatio }) => {
        const threshold = getPrintableThreshold(intersectionRatio.toFixed(2), [0, 0.25, 0.5, 0.75, 1]) * 100
        const { toggleThemeIsLight } = this.context;

        if (isIntersecting && threshold === 25) {
            toggleThemeIsLight(true)
        }
        if (!isIntersecting) {
            toggleThemeIsLight(false)
        }
    };

    render() {
        const { currentTheme, themes } = this.context;
        return (
            <Layout>
                <SEO title="Melbourne experts in Website Design, User Experience and Digital Solutions."
                    description="The Fearless is a Creative Agency based In Melbourne, our three key offerings are Strategy, Design & Developement." />
                <div className="hero" style={{ color: currentTheme.fontColor, backgroundColor: currentTheme.backgroundColor }}>
                    <div className="hero-layout" style={{ opacity: (currentTheme === themes.lightTheme ? 1 : 0) }}>
                        <header>
                            <h1>With the help of our clients, we craft experiences that users love.</h1>
                        </header>
                        <div className="hero-svg">
                            <VenDiagram />
                        </div>
                    </div>
                    <Observer onChange={this.handleChange} threshold={[0, 0.25, 0.5, 0.75, 1]}>
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
                    </Observer>
                </div>
            </Layout>
        )
    }
}

export default withThemeContext(ServicesPage)
