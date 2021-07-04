import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const LinksComponente = () => {
    return (
        <StContainer>

            <h1>
                Links úteis:
            </h1>

            <hr />

            <ul>
                <li> <a href="https://www.99freelas.com.br/user/gilson-paulo-2">Perfil 99 Freelas</a></li>
                <li> <a href="https://www.infnet.edu.br/infnet/sobre/">   Instituto Infnet.</a> </li>
                <li> <a href="https://www.w3schools.com/">   W3 Schools. </a> </li>
                <li> <a href="https://developer.mozilla.org/en-US/">   MDN Mozilla Web Docs.</a> </li>
                <li> <a href="https://stackoverflow.com/">    Stack Overflow </a>  </li>
                <li> <a href="https://nextjs.org/">NextJS</a></li>                
            </ul>


        </StContainer>
    )
}

export default LinksComponente

const StContainer = styled(Container)`
min-height: 70vh;
padding-top: 30px;
ul{
li{
    a{font-family:Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
font-size: 20px;
}
}
}

`