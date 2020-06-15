import React from 'react';
import Fade from 'react-fade-opacity'
import "./menu.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';
import { useStaticQuery, graphql } from "gatsby"

const Menu = ({ disabled }) => {

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
        <div hidden={disabled}>
            <Fade in={true} interval={5} delay={100}>
                <div className="menuMain">
                    <section className="menuSectionContainer">
                        <div className="menuItems">
                            <a href="/our-work-page/"><div className="menuLink">Our Work</div></a>
                            <a href="/services-page/"> <div className="menuLink">Services</div></a>
                            <a href="/contact-us-page/"> <div className="menuLink">Contact Us</div></a>
                        </div>
                    </section>
                    <div className="social-section">
                        <a rel="noreferrer" target="_blank" href={site.siteMetadata.socials.linkedIn} className="social-item">
                            <LinkedInIcon fontSize="large" style={{ color: grey[50] }} />
                        </a>
                        <a rel="noreferrer" target="_blank" href={site.siteMetadata.socials.instagram} className="social-item">
                            <InstagramIcon fontSize="large" style={{ color: grey[50] }} />
                        </a>
                        <a rel="noreferrer" target="_blank" href={site.siteMetadata.socials.facebook} className="social-item">
                            <FacebookIcon fontSize="large" style={{ color: grey[50] }} />
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default Menu
