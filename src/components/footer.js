import React from 'react';
import * as logo from "../images/fearless-logo.svg";
import "./footer.scss";

const Footer = () => {
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
                    <a href="mailto:Hello@thefearless.com" className="footer-email">Hello@thefearless.com</a>
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