import React, { useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';



const ContatoComponente = () => {

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const NEXT_PUBLIC_SENDGRID_SERVICEID = process.env.NEXT_PUBLIC_SENDGRID_SERVICEID
const NEXT_PUBLIC_SENDGRID_TEMPLATE= process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE
const NEXT_PUBLIC_SENDGRID_USER= process.env.NEXT_PUBLIC_SENDGRID_USER
const [isLoading, setLoading] = useState(false);

init(NEXT_PUBLIC_SENDGRID_USER);


const gmessage = (type, message, text="") => {
    Swal.fire({
        position: 'center',
        icon: type,
        title: text || "Mensagem:",
        text : message,
        html: message,
        showConfirmButton: false,
        timer: 3500
    })
}


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
            setLoading(true)
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
            emailjs.send(NEXT_PUBLIC_SENDGRID_SERVICEID, NEXT_PUBLIC_SENDGRID_TEMPLATE , templateParams, NEXT_PUBLIC_SENDGRID_USER)
                .then(function (response) {
                        gmessage(
                        'success',
                        `Sua mensagem foi enviada com os dados:
                         Name: ${name}
                         Email: ${email}
                         Subject: ${subject}
                         Message: ${message}`,
                        "Feito!"
                    )
                    setLoading(false)

                }, function (error) {
                    console.log('FAILED...', error);
                    setLoading(false)
                })
                
            // resetForm();          


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

        <StContainer className='darkbg'>

            <br />
            <h3>Vamos conversar! </h3>
            <h4>Mande uma mensagem para mim. </h4>

            <br />



            <Row>
                <Col xs="12" md="6" xl="6">
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
                        {/* <Pulsante> */}
                            <Button className={formValid(state) ? "pulseanim success" : ""} 
                            // color= {formValid(state) ? "secondary" : "primary"}  
                            variant= {!formValid(state) ? "secondary" : "success"}  
                            type='submit' 
                            disabled={!formValid(state)}> 
                            
                            
                            {isLoading ?   <> <Spinner animation="border" size="sm" />  Enviando </>  :   "Enviar"  }
                            
                            
                             </Button>


                        {/* </Pulsante> */}
                        <br />
                    </form>
                </Col>

                <Col className="hidesmall">
                <img className="responsive hidesmall"
                                // className="d-block w-100"
                                src={'/media/correio.jpg'}
                                alt={'correio'}
                            />
                </Col>

            </Row>
  
  
        </StContainer >
    )
}




export default ContatoComponente


const StContainer = styled(Container)`
@media screen and (max-width: 600px) {
    .hidesmall {
    display: none !important;
    
    } 
    .hidelarge {
        display : flex; 
        justify-content:flex-end;
        width:100% !important;
    }        
} 
`