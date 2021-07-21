import React, { useState } from 'react';
import { Navbar, Dropdown, Container, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';



function NavDoApp(props) {
    const router = useRouter()

    const mainLinks = [
        { push: "/", label: "HOME" },
        // { push: "/blog", label: "BLOG" },
        { push: "/sobre", label: "SOBRE" },
        { push: "/links", label: "LINKS" },
        { push: "/portfolio", label: "PORTFOLIO" },
        { push: "/contato", label: "CONTATO" },
        // { push: "/testes", label: "TESTES" },
        
    ]


    /**Monta Dropdown.Item*/
    const montarLinksDrop = () => mainLinks.map((itemMainlinks, index) => (
        <Dropdown.Item key={index} eventKey={index} onClick={() => router.push(itemMainlinks.push)} >   {itemMainlinks.label}  </Dropdown.Item>
    ))

    function CollapseNavbarBootstrap() {
        return (
            <STNavbar collapseOnSelect expand="lg" className='red' variant="light">
                <Container>
                    <Navbar.Brand >
                    <img className=" d-block w-100 responsive hidesmall"
                        src={'/android-chrome-192x192.png'}
                        alt={'android-chrome-192x192.png'}
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle className='custom-toggler' aria-controls="-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {montarLinksDrop()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </STNavbar>




        )
    }

    return (
        < >


            <CollapseNavbarBootstrap />


        </>
    );
}

export default NavDoApp;

const STNavbar = styled(Navbar)`
/* background: linear-gradient(90deg, rgba(20,26,40,1) 0%, rgba(56,78,136,1) 53%, rgba(112,128,144,1) 100%)  !important; */
a {
font-size: 20px ;
border-radius: 5px;
color: white !important;
transition: 0.7s linear; 
    :hover {
        color: black !important;
        transition: 0.7s linear;  
    }
}


hr{
      margin: 0px;
  }
    div main{
        min-height: 50vh;

    } 
    
    a .dropdown-item {
        color: white !important;
        font-family: Roboto !important;
    }
    
    .hidelarge { 
        display : none; 
        width:100% !important;
    }

    @media screen and (max-width: 600px) {
        .hidesmall {
        display: none !important;
        /* border: 1px red solid; */
        } 
        .hidelarge {display : flex; 
                    justify-content:flex-end;
                    width:100% !important;
                    background-color : rgb(255, 255, 255);                    
                   }        
    }  

`