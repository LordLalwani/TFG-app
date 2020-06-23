import React from 'react';
import * as logo from "../images/fearless-logo.svg";
import "./footer.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';
import { useStaticQuery, graphql, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
                    <Link className="footer-menu-item" to="/"><span>Home</span></Link>
                    <Link className="footer-menu-item" to="/Our-Work/"><span>Our Work</span></Link>
                    <Link className="footer-menu-item" to="/Services"><span>Services</span></Link>
                    <Link className="footer-menu-item" to="/Contact-Us"><span>Contact Us</span></Link>
                </div>
                <div className="footer-contact">
                    <div className="contact-segment">
                        <OutboundLink href="mailto:Hello@thefearless.com" className="footer-email">Hello@thefearless.com</OutboundLink>
                        <div className="social-section">
                            <OutboundLink rel="noreferrer" target="_blank" href={site.siteMetadata.socials.linkedIn} className="social-item">
                                <LinkedInIcon fontSize="large" style={{ color: grey[900] }} />
                            </OutboundLink>
                            <OutboundLink rel="noreferrer" target="_blank" href={site.siteMetadata.socials.instagram} className="social-item">
                                <InstagramIcon fontSize="large" style={{ color: grey[900] }} />
                            </OutboundLink>
                            <OutboundLink rel="noreferrer" target="_blank" href={site.siteMetadata.socials.facebook} className="social-item">
                                <FacebookIcon fontSize="large" style={{ color: grey[900] }} />
                            </OutboundLink>
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
