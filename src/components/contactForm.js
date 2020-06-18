import React, { Component } from 'react';
import "./contactForm.scss";
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import ReCAPTCHA from "react-google-recaptcha";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allValuesFilled: false,
            recaptchaValue: null,
            contactFormValidation: {
                tf1: {
                    valid: true,
                    errorMessage: null,
                    value: null
                },
                tf2: {
                    valid: true,
                    errorMessage: null,
                    value: null
                },
                tf3: {
                    valid: true,
                    errorMessage: null,
                    value: null
                },
                tf4: {
                    valid: true,
                    errorMessage: null,
                    value: null
                }
            }
        };
    }

    render() {
        const ColorButton = withStyles((theme) => ({
            root: {
                color: theme.palette.getContrastText(purple[500]),
                backgroundColor: "rgba(24, 20, 36, 1)",
                '&:hover': {
                    backgroundColor: purple[900],
                },
            },
        }))(Button);

        const isFormValid = () => {
            const tfs = Object.keys(this.state.contactFormValidation)
            let errors = true;
            tfs.forEach((tf) => {
                if (this.state.contactFormValidation[tf].valid === false) {
                    errors = false;
                }
            })
            return errors;
        }

        const updateValidationState = (tf, isValid, errorMessage) => {
            const updatedState = { ...this.state.contactFormValidation }
            updatedState[tf].valid = isValid;
            updatedState[tf].errorMessage = errorMessage;
            this.setState({ updatedState })
        }
        const updateValidationValueState = (tf, incomingValue) => {
            const updatedState = { ...this.state.contactFormValidation }
            updatedState[tf].value = incomingValue;
            this.setState({ updatedState })
        }


        const hasNumbers = (value) => {
            return /\d/g.test(value);
        }

        const hasSpecialChars = (value) => {
            return ! /^[a-zA-Z0-9\s+]+$/.test(value)
        }

        const hasLetters = (value) => {
            if (/^[a-z0-9]+$/i.test(value)) {
                const valueWithoutDigits = value.replace(/[0-9]/g, '');
                return /^[a-z0-9]+$/i.test(valueWithoutDigits)
            }
        }

        const handleNameValidations = (tf, value) => {
            if (value.length === 0) {
                updateValidationState(tf, false, "Your name cannot remain blank.")
            } else if (hasNumbers(value)) {
                updateValidationState(tf, false, "Your name cannot contain a number.")
            } else if (hasSpecialChars(value)) {
                updateValidationState(tf, false, "Your name cannot contain special characters.")
            } else if (value.length > 25) {
                updateValidationState(tf, false, "Character limit of 20 reached.")
            } else {
                updateValidationState(tf, true, null)
            }
        }

        const handleEmailValidations = (tf, value) => {
            if (value.length === 0) {
                updateValidationState(tf, false, "Your email cannot remain blank.")
            } else if (!value.includes("@")) {
                updateValidationState(tf, false, "Invalid Email")
            } else {
                updateValidationState(tf, true, null)
            }
        }

        const handleMobileNumberValidations = (tf, value) => {
            if (value.length === 0) {
                updateValidationState(tf, false, "Your contact number cannot remain blank.")
            } else if (hasLetters(value)) {
                updateValidationState(tf, false, "Your contact number cannot contain alphabets")
            } else if (!hasNumbers(value)) {
                updateValidationState(tf, false, "Your contact number requires digits.")
            } else if (hasSpecialChars(value)) {
                updateValidationState(tf, false, "Your contact number cannot contain special characters.")
            } else if (value.length >= 15) {
                updateValidationState(tf, false, "Character limit of 15 reached.")
            } else {
                updateValidationState(tf, true, null)
            }
        }

        const updateAllValuesFilled = () => {
            const tfs = Object.keys(this.state.contactFormValidation)
            const size = Object.keys(this.state.contactFormValidation).length;
            let count = 0
            tfs.forEach((tf) => {
                const value = this.state.contactFormValidation[tf].value;
                if (value !== null && value !== "") {
                    count++
                }
            })
            if (count === size) {
                this.setState({ allValuesFilled: true })
            } else {
                this.setState({ allValuesFilled: false })
            }
        }

        const handleTextFieldChange = (event, tf) => {
            const value = event.target.value;
            updateValidationValueState(tf, value);

            if (tf === "tf1") {
                handleNameValidations(tf, value)
            } else if (tf === "tf2") {
                handleEmailValidations(tf, value)
            } else if (tf === "tf3") {
                handleMobileNumberValidations(tf, value)
            }

            updateAllValuesFilled()
        }
        const onRecaptchaChange = (value) => {
            this.setState({ recaptchaValue: value })
        }
        const { tf1, tf2, tf3, tf4 } = this.state.contactFormValidation;
        return (
            <div>
                <form method="post" action="#" className="form-container">
                    <TextField type="text" id="name" label="Your full name" className="form-input" onChange={(e) => handleTextFieldChange(e, "tf1")} error={!tf1.valid} helperText={tf1.errorMessage !== null ? tf1.errorMessage : ""} />
                    <TextField type="email" id="email" label="Email" className="form-input" onChange={(e) => handleTextFieldChange(e, "tf2")} error={!tf2.valid} helperText={tf2.errorMessage !== null ? tf2.errorMessage : ""} />
                    <TextField type="tel" id="phone" label="A number we can contact you on" className="form-input" onChange={(e) => handleTextFieldChange(e, "tf3")} error={!tf3.valid} helperText={tf3.errorMessage !== null ? tf3.errorMessage : ""} />
                    <TextField multiline rows={4} size="small" label="How can we help ?" className="form-input form-input-last" onChange={(e) => handleTextFieldChange(e, "tf4")} error={!tf4.valid} helperText={tf4.errorMessage !== null ? tf4.errorMessage : ""} />
                    {this.state.allValuesFilled ?
                        <div className="recaptcha">
                            <ReCAPTCHA
                                sitekey={process.env.GATSBY_GOOGLE_SITE_KEY}
                                onChange={onRecaptchaChange}
                            />
                        </div>
                        : null}
                    <ColorButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                        className="contact-button"
                        disabled={!isFormValid() || !this.state.allValuesFilled || !this.state.recaptchaValue}
                        startIcon={<SendIcon />}>
                        Send
                    </ColorButton>
                </form>
            </div>
        )
    }
}
export default ContactForm
