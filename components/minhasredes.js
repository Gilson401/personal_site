import React from 'react'
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

const Minhasredes = () => {
    return (
        <StContainer>
            <h3>Aqui estão minhas redes e repositórios.</h3>
            <br />


            <Row xs={3} md={6}>
                <Col>
                <a href="https://www.linkedin.com/in/gpsc/" target="_blank" >
                    <img className=" d-block w-100 responsive pulse"
                        src={'/media/linkedin.png'}
                        alt={'imagem Linkedin'}
                    />
                </a>    
                </Col>
                <Col>
                {/* //https://github.com/Gilson401 */}
                <a href="https://github.com/Gilson401" target="_blank" >
                    <img className=" d-block w-100 responsive pulse"
                        src={'/media/github.png'}
                        alt={'imagem Linkedin'}
                    />
</a>

                </Col>

                <Col>
                    <a href="https://gitlab.com/GilsonInfet" target="_blank" >
                        <img className=" d-block w-100 responsive pulse"
                            src={'/media/gitlab.png'}
                            alt={'imagem Linkedin'}
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.youtube.com/channel/UC_K6s6sn9z0Tam-cvwL_mGg" target="_blank" >
                        <img className=" d-block w-100 responsive pulse"
                            src={'/media/youtube.png'}
                            alt={'imagem Linkedin'}
                        />
                    </a>
                </Col>

                <Col>

                    <a href="https://twitter.com/DeveloperGp" target="_blank" >
                        <img className=" d-block w-100 responsive pulse"
                            src={'/media/twitter.png'}
                            alt={'imagem Linkedin'}
                        />
                    </a>

                </Col>
                <Col>
                    <a href=" https://www.instagram.com/gp.web/?igshid=2toohtb69gfp" target="_blank" >
                        <img className=" d-block w-100 responsive pulse"
                            src={'/media/instagram.png'}
                            alt={'imagem Linkedin'}
                        />
                    </a>
                </Col>
            </Row>

        </StContainer>
    )
}

export default Minhasredes

const StContainer = styled(Container)`

background: url('/media/bgpreto.jpg');
padding-top: 20px;
margin-top: 20px;
padding-bottom: 10px;
color:white;
background:rgba(0, 0, 0, .51);
font-family: Roboto;
img{
margin-bottom: 20px;
padding-bottom: 10px;
}
h1{
    font-family: Roboto;
    font-weight: 700;

    @media (max-width: 600px) {
    font-size: 20px;
    }
}







`