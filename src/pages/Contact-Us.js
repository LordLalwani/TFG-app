import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
import withThemeContext from "../utils/withThemeContext"
import { ThemeContext } from "../contexts/themeContext";
import Observer from '@researchgate/react-intersection-observer'
import "./contact-us-page.scss"
import GImage from "../components/contactImage"

const getPrintableThreshold = (ratio, range) =>
    range.reduce((prev, curr) =>
        Math.abs(curr - ratio) < Math.abs(prev - ratio) ? curr : prev);
class ContactPage extends Component {
    componentDidMount() {
        const { toggleThemeIsLight } = this.context;
        toggleThemeIsLight(false)
    }

    handleChange = ({ isIntersecting, intersectionRatio }) => {
        const threshold = getPrintableThreshold(intersectionRatio.toFixed(2), [0, 0.25, 0.5, 0.75, 1]) * 100
        const { toggleThemeIsLight } = this.context;

        if (isIntersecting && threshold === 50) {
            toggleThemeIsLight(true)
        }
        if (!isIntersecting) {
            toggleThemeIsLight(false)
        }
    };
    static contextType = ThemeContext;
    render() {
        const { currentTheme, themes } = this.context;
        return (

            <Layout>
                <SEO title="The Fearless are here to help you with all of your digital Strategy, Design & developement needs. Please contact us at our local Melbourne office."
                    description="Feel the tingling in your fingertips? We're excited to start your project too. Get in contact with The Fearless. " />
                <div className="hero-contact" style={{ color: currentTheme.fontColor, backgroundColor: currentTheme.backgroundColor }}>
                    <div className="hero-layout" style={{ opacity: (currentTheme === themes.lightTheme ? 1 : 0) }}>
                        <section className="split-section">
                            <div className="split-inner">
                                <h1>Lets have a whiteboard <br /> session over coffee.</h1>
                                <h4>Have an opportunity to discuss? Feel free to reach out to us.</h4>
                            </div>
                            <div className="split-inner">
                                <div>
                                    <GImage />
                                </div>

                            </div>
                        </section>
                    </div>
                    <Observer onChange={this.handleChange} threshold={[0, 0.25, 0.5, 0.75, 1]}>
                        <section className="contact-section">
                            <div className="contact-parent">
                                <div className="contact-left-section">
                                    <h3 className="">We would love to <br />hear from you.</h3>
                                    <p>To discuss new business inquiries, media/press requests, feedback or just to have a quick chat. Fill out our form and we will get back to you as soon as we can. We promise.</p>
                                </div>
                                <div className="contact-right-section">
                                    <ContactForm />
                                </div>
                            </div>
                        </section>
                    </Observer>
                </div>
            </Layout>)
    }
}

export default withThemeContext(ContactPage)
