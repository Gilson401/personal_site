import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button }from 'react-bootstrap';
import { TiSocialTwitter } from 'react-icons/ti'
import { AiFillYoutube, AiFillGitlab, AiFillInstagram } from 'react-icons/ai'
import styled from 'styled-components';
import Swal from 'sweetalert2'
import { savecookie, hascookie, get_cookie } from '../cookieswarn';

function Footer() {

    const [exibe, setExibe] = useState(false)
    const [avisacookie, setAvisaCookie] = useState(true)

    const avisocookie = () => {

        if (!hascookie()) {

            // Swal.fire({
            //     title: '<strong>Este Site usa cookies</strong>',

            //     imageUrl: 'https://cdn.pixabay.com/photo/2016/05/04/19/05/cookies-1372607_960_720.jpg',
            //     imageWidth: 400,
            //     imageHeight: 200,
            //     imageAlt: 'Custom image',
            //     html:
            //         'Eles são usados para aprimorar a sua experiência com o site. Ao fechar este banner' +
            //         ' ou continuar a usar a página, você concorda com o uso de cookies. Para mais informações ' +
            //         '<a href="https://automattic.com/cookies/"> clique aqui </a> .',
            //     showCloseButton: true,
            //     // showCancelButton: true,
            //     // cancelButtonColor: '#d33',
            //     focusConfirm: false,
            //     confirmButtonText:
            //         '<i class="fa fa-thumbs-up"></i> OK, Entendi!',

            // }).then((result) => {
            //     if (result.isConfirmed) {
            //         savecookie("gpweb" + Date.now());

            //     } else {

            //     }
            // })


        }
    }


    function scrollFunction() {
        
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            setExibe(true)
        } else {
            setExibe(false)
        }
    }

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction, true);
        // avisocookie()
    }, [])


    useEffect(() => {
        avisocookie2()
    }, [])


    const avisocookie2 = () => {
        if (!hascookie()) {
            setAvisaCookie(true)
        }else{
            setAvisaCookie(false)
        }
    }
    const outroSetupCookie = () =>{
        savecookie("gpweb" + Date.now());
        setAvisaCookie(false)
    }
    

    return (

        <>

                  {avisacookie ?    
               <div className="cookiewarn">
                 Este site usa cookies. 
                 <Button onClick={()=> outroSetupCookie()}> {`   OK    `}</Button> 
                 Para ler a política de dados deste site  
                 <a href="https://automattic.com/cookies/"> clique aqui </a>                     
              </div>
             : ""}
             
             {exibe ? <Btnfixed onClick={() => scrollToTop()} id="myBtn" >TOPO</Btnfixed> : ""}
                            

            <footer className="footerClass centro ">
                <Container>


                    <Row xs="1" sm="2" md="4">

                        <Col>Até aqui me ajudou o Senhor</Col>

                        {/* <Col></Col> */}

                        <Col>Todos os Direitos Reservados</Col>

                        <FooterSocial>
                            <a href=" https://www.instagram.com/gp.web/?igshid=2toohtb69gfp" target="_blank" > <AiFillInstagram /> </a>

                            <a href="https://twitter.com/DeveloperGp" target="_blank" > <TiSocialTwitter /> </a>

                            <a href="https://www.youtube.com/channel/UC_K6s6sn9z0Tam-cvwL_mGg" target="_blank" > <AiFillYoutube /> </a>
                            <a href="https://gitlab.com/GilsonInfet" target="_blank" > <AiFillGitlab /> </a>


                        </FooterSocial>
                    </Row>
                </Container>
            </footer>

            <style jsx>{`





.cookiewarn{
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 120px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: rgb(20, 26, 40, 0.91); /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
    width: 80%;
}

#myBtn {
    // 
  }
  
  #myBtn:hover {
    background-color: #555; /* Add a dark-grey background on hover */
  }

  .footerClass{
    margin-top: 20px;
   background-color: #797a7e;
   width: 100%;
   min-height: 20vh;
   color: white;
   background: rgb(20,26,40);
background: linear-gradient(90deg, rgba(20,26,40,1) 0%, rgba(56,78,136,1) 53%, rgba(112,128,144,1) 100%);
 } 
 .centro{
    display: flex;
    justify-content:center;  
    align-items:center;
  }
 


        `}</style>

        </>
    );
}

const Btnfixed = styled(Button)`

    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: rgb(20, 26, 40, 0.91); /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */

`


const FooterSocial = styled(Col)`

display: flex;
color:white;
cursor:pointer;
svg{
    margin: 5px;
    font-size:25px;
    :hover{
        color:yellow;
    }
}

`
export default Footer
