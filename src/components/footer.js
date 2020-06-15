import React from 'react';
import * as logo from "../images/fearless-logo.svg";
import "./footer.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                socials {
                    linkedIn
                    facebook
                    instagram
                }
              }
            }
          }
        `
    )

    return (
        <footer className="footer">
            <section className="footer-container">
                <img src={logo} alt="" className="footer-img"></img>
                <div>
                    <a className="footer-menu-item" href="/"><span>Home</span></a>
                    <a className="footer-menu-item" href="/our-work-page/"><span>Our Work</span></a>
                    <a className="footer-menu-item" href="/services-page/"><span>Services</span></a>
                    <a className="footer-menu-item" href="/contact-us-page/"><span>Contact Us</span></a>
                </div>
                <div className="footer-contact">
                    <div className="contact-segment">
                        <a href="mailto:Hello@thefearless.com" className="footer-email">Hello@thefearless.com</a>
                        <div className="social-section">
                            <a rel="noreferrer" target="_blank" href={site.siteMetadata.socials.linkedIn} className="social-item">
                                <LinkedInIcon fontSize="large" style={{ color: grey[900] }} />
                            </a>
                            <a rel="noreferrer" target="_blank" href={site.siteMetadata.socials.instagram} className="social-item">
                                <InstagramIcon fontSize="large" style={{ color: grey[900] }} />
                            </a>
                            <a rel="noreferrer" target="_blank" href={site.siteMetadata.socials.facebook} className="social-item">
                                <FacebookIcon fontSize="large" style={{ color: grey[900] }} />
                            </a>
                        </div>
                    </div>
                    <div className="contact-segment">
                        <span className="footer-text">0800123123</span>
                        <span className="footer-copyright footer-text">© {new Date().getFullYear()} The Fearless Creative Ltd.</span>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer
