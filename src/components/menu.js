import React from 'react';
import Fade from 'react-fade-opacity'
import "./menu.scss"

const Menu = ({ disabled }) => {
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
                </div>
            </Fade>
        </div>
    )
}
export default Menu
