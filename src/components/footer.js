import React from 'react';
import Fade from 'react-fade-opacity'
import "./menu.scss"
import "./footer.scss"
import * as logo from "../images/fearless-logo.svg"

const Footer = () => {
    return (
            <footer className="footer">
                <section className="footer-container">
                    <img src={logo} className="footer-img"></img>
                    <div className="footer-menu">
                        <a className="footer-menu-item" href="/"><span>Home</span></a>
                        <a className="footer-menu-item" href="/"><span>Our Work</span></a>
                        <a className="footer-menu-item" href="/"><span>Services</span></a>
                        <a className="footer-menu-item" href="/"><span>Contact Us</span></a>
                    </div>
                    <div className="footer-contact">
                        <a href="mailto:Hello@thefearless.com" class="footer-email">Hello@thefearless.com</a>
                        <div>
                            <span className="footer-text">0800123123</span>
                            <span className="footer-copyright footer-text">© {new Date().getFullYear()} The Fearless Creative Ltd.</span>
                        </div>
                    </div>
                </section>
            </footer>
    )
}
export default Footer
