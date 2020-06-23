import React from 'react';
import Fade from 'react-fade-opacity'
import "./menu.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';
import { useStaticQuery, graphql, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
                            <Link to="/Our-Work"><div className="menuLink">Our Work</div></Link>
                            <Link to="/Services"> <div className="menuLink">Services</div></Link>
                            <Link to="/Contact-Us"> <div className="menuLink">Contact Us</div></Link>
                        </div>
                    </section>
                    <div className="social-section">
                        <OutboundLink rel="noreferrer" target="_blank" href={site.siteMetadata.socials.linkedIn} className="social-item">
                            <LinkedInIcon fontSize="large" style={{ color: grey[50] }} />
                        </OutboundLink>
                        <OutboundLink rel="noreferrer" target="_blank" href={site.siteMetadata.socials.instagram} className="social-item">
                            <InstagramIcon fontSize="large" style={{ color: grey[50] }} />
                        </OutboundLink>
                        <OutboundLink rel="noreferrer" target="_blank" href={site.siteMetadata.socials.facebook} className="social-item">
                            <FacebookIcon fontSize="large" style={{ color: grey[50] }} />
                        </OutboundLink>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default Menu
