import React from 'react'
import { Container } from 'react-bootstrap';





const LinksComponente = () => {
    return (
        <Container>

            <p>
                Links úteis:
            </p>

            <hr />

            <ul>
                <li> <a href="https://www.99freelas.com.br/user/gilson-paulo-2">Perfil 99 Freelas</a></li>
                <li> <a href="https://www.infnet.edu.br/infnet/sobre/">   Instituto Infnet.</a> </li>
                <li> <a href="https://www.w3schools.com/">   W3 Schools. </a> </li>
                <li> <a href="https://developer.mozilla.org/en-US/">   MDN Mozilla Web Docs.</a> </li>
                <li> <a href="https://stackoverflow.com/">    Stack Overflow </a>  </li>
                <li> <a href="https://nextjs.org/">NextJS</a></li>                
            </ul>


        </Container>
    )
}

export default LinksComponente
