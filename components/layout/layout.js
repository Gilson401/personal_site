import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import NavDoApp from './nav/nav'
import { CgSun, CgMoon } from 'react-icons/cg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { Sharegroup } from '../../lib/util';
import styled from 'styled-components';


function Layout(props) {

    const [isLight, setIsLight] = useState(true)

    const [modo, setModo] = useState({
        textcolor: "black",
        bgcolor: "white",
        buttonTxt: "Dark Mode",
        buttonIcon: <CgSun />
    })




    useEffect(() => {

        setModo({
            textcolor: `${isLight ? "black" : "white"}`,
            bgcolor: `${isLight ? "white" : "rgb(55, 55, 55)"}`,
            buttonTxt: `${isLight ? "" : ""}`,
            // buttonTxt: `${isLight ? "Dark Mode" : "Light Mode"}`,
            buttonIcon: isLight ? <CgMoon /> : <CgSun />
        })

    }, [isLight])


    return (
        < >
            {/* <Header botao={<Button onClick={() => setIsLight(!isLight)}  > {modo.buttonIcon} {modo.buttonTxt} </Button>} /> */}
            <NavDoApp  >    </NavDoApp>



            
                <StConteudo >
                    {/* <Container><Sharegroup /> </Container> */}
                    {props.children}



                </StConteudo>
               
           
 <Footer />
           
        </>
    );
}
export default Layout;

const StConteudo = styled.div`
width: 100vw;


/* border: 1px solid #000000; */
box-sizing: border-box;



.internalNav{
padding: 30px 30px 30px 30px;
}

/* a{   
width: 36px;
height: 27px;
font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 27px;
line-height: 27px;
color: #FFFFFF;
margin: 0 20px 0 20px;
text-decoration: none;
} */

.links{
padding-bottom:20px;
border-bottom: 1px solid #FFFFFF;
}


`