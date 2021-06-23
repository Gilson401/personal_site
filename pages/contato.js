import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';


import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';



const Contato = () => {

    // Email validation
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    init("user_UeDDUdLb8xg9AXQRmPBV5");


const REACT_APP_EMAILJSUSERID = process.env.REACT_APP_EMAILJSUSERID
    
const [state, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        formErrors: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    })

    // Form validation
    const formValid = ({ formErrors, ...rest }) => {
        let valid = true;

        // Validate form errors being empty
        Object.values(formErrors).forEach((val) => {
            val.length > 0 && (valid = false);
        });

        // Validate the form was filled out
        Object.values(rest).forEach((val) => {
            val === '' && (valid = false);
        });

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(state)) {
            // Handle form validation success
            const { name, email, subject, message } = state;

            // Set template params
            let templateParams = {
                to_name: "Admin of GPWeb",
                from_name: name,
                name: name,
                email: email,
                from_email: email,
                reply_to: email,
                subject: subject,
                message: message,
            };
            emailjs.send('emailumblergp', 'template_l9b1qoj', templateParams, 'user_UeDDUdLb8xg9AXQRmPBV5')
                .then(function (response) {
                   
                    if(name == "disp"){
                        console.log("fff", REACT_APP_EMAILJSUSERID)
                    }

                }, function (error) {
                    console.log('FAILED...', error);
                });

            resetForm();
            alert(`
        --Sua mensagem foi enviada com os dados  --
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}        
      `);


        } else {
            // Handle form validation failure
            console.log('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    // Function to reset form
    const resetForm = () => {
        setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
            formErrors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        });
    }


    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...formErrors };

        switch (name) {
            case 'name':
                formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
                break;
            case 'subject':
                formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
                break;
            case 'message':
                formErrors.message = value.length < 1 ? 'Please enter a message' : '';
                break;
            default:
                break;
        }
        setForm({
            ...state,
            formErrors: formErrors,
            [name]: value
        });
       
    };

    return (

        <Container>

            <br />
            <h3>Fale comigo: </h3>

            <br />



            <Row>
                <Col xs="12" md="6" xl="4">
                    <form id='contact-form' onSubmit={handleSubmit} noValidate>
                        <br />
                        <Form.Control
                            type='text'
                            name='name'
                            value={state.name}
                            // className={`form-control formInput`}
                            onChange={handleChange}
                            placeholder='Nome'
                            noValidate>

                        </Form.Control>

                        <br />
                        <Form.Control
                            type='email'
                            name='email'
                            value={state.email}
                            // className={`form-control formInput`}
                            onChange={handleChange}
                            placeholder='Email'
                            noValidate
                        ></Form.Control>

                        <br />
                        <Form.Control
                            type='text'
                            name='subject'
                            value={state.subject}
                            // className={`form-control formInput`}
                            onChange={handleChange}
                            placeholder='Assunto'
                            noValidate
                        ></Form.Control>

                        <br />
                        <Form.Control type="textarea"
                            rows='5'
                            name='message'
                            value={state.message}
                            className={`form-control formInput`}
                            onChange={handleChange}
                            placeholder='Mensagem'
                            noValidate
                        ></Form.Control>
                        <br />
                        <Pulsante>
                            <Button id={formValid(state) ? "box" : ""} color="secondary" type='submit' disabled={!formValid(state)}> Enviar </Button>


                        </Pulsante>
                        <br />
                    </form>
                </Col>

            </Row>

        </Container >
    )
}

// https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9

export default Contato
const Formlimit = styled(Form)`
max-width : 400px;
`

const Pulsante = styled.div`
#box {
  background:gray;
  animation:pulse 0.5s infinite alternate;
}

@keyframes pulse {
  from { box-shadow:0px 0px 10px 3px white; }
  to { box-shadow:0px 0px 10px 3px green; }
}
`