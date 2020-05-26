import React from 'react';
import Fade from 'react-fade-opacity'
import "./menu.scss"

const Menu = () => {
    return (
        <Fade in={true} interval={5} delay={100}>
            <div className="menuMain">
                <section className="menuSectionContainer">
                    <div className="menuItems">
                        <div className="menuLink">Our Work</div>
                        <div className="menuLink">Services</div>
                        <div className="menuLink">Contact Us</div>
                    </div>
                </section>
            </div>
        </Fade>
    )
}
export default Menu
