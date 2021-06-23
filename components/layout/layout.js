import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import NavDoApp from './nav/nav'
import { CgSun, CgMoon } from 'react-icons/cg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container }from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { Sharegroup } from '../../lib/util';



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
            <Header botao={<Button onClick={() => setIsLight(!isLight)}  > {modo.buttonIcon} {modo.buttonTxt} </Button>} />
            <NavDoApp  >    </NavDoApp>
            
            <Container><Sharegroup/> </Container> 
            <main>  {props.children} </main>

            
            <Footer />
            <style jsx global>{` 
                 main{
                    min-height: 50vh;
                    color: ${modo.textcolor};
                    background-color: ${modo.bgcolor};
                } 

                body{
                    color: ${modo.textcolor};
                    background-color: ${modo.bgcolor};
                }
                .responsive {
                    width: 100%;
                    height: auto;                 
                }

                .smallcell{
                    height: 10%;
                }

                .greyBorder{
                    border: solid 1px grey;
                }

                .codeblock {
                    box-sizing: inherit;
                    font-family: Consolas,Menlo,Monaco,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,
                    DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Courier New,Courier,monospace;
                    line-height: 1.5;
                    border-radius: .2rem;
                    font-size: 1em;
                    direction: ltr;
                    text-align: left;
                    white-space: pre;
                    word-spacing: normal;
                    word-break: normal;
                    tab-size: 4;
                    hyphens: none;
                    background: #2a2734;
                    color: white;
                    padding: 1em;
                    margin: .5em 0;
                    overflow: auto;
                    }
                    .scroll {
                    
                    width: 100%;
                    height: 200px;
                    overflow-x: hidden;
                    overflow-y: auto;
                    
                    padding: 20px;}     
                    .centro{
                        display: flex;
                        justify-content:center;  
                        align-items:center;
                      }              

            `}</style>

        </>
    );
}
export default Layout;
