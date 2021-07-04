import React from 'react'
import styled from 'styled-components';
import { Carousel, Col, Row, Container } from 'react-bootstrap'

const AdminPage = () => {
    const imgs = ['https://pbs.twimg.com/media/E5XwqTKWUAUMITd?format=jpg&name=900x900', '/media/pilha.jpg', '/media/mongow.jpg']
    const FadeImage = (props) => {

        const { imagem, gradiente, link, texto, linkTexto } = props

        const rgradiente = `linear-gradient(${gradiente})`
        return (

            <StContainer gradiente={rgradiente} link={link} texto={texto} imagem={imagem}>

                <div className="xcontainer">
                    <img className="image" src={imagem || "/media/pilha.jpg"} alt={imagem || "/media/pilha.jpg"} />
                    <div className="overlay">
                        <div className="text">
                            <p>{texto || 'Defina o texto'}</p>
                            <p><a href={link}> {linkTexto || "Defina linkTexto"} </a> </p>

                        </div>

                    </div>
                </div>
            </StContainer>
        )
    }
    return (

        <Container>
            <Row>

                <Col>
                    <FadeImage
                        imagem={imgs[0]}
                        gradiente='8deg, rgba(13,9,6,0.6604050196958392) 32%, rgba(254,252,252,0.2615286152014572) 82%'
                        link='https://br.pinterest.com/'
                        texto="Texto desccritivo"
                        linkTexto="https://br.pinterest.com/"
                    />

                </Col>

                <Col>
                    <FadeImage
                        imagem={imgs[0]}
                        gradiente='8deg, rgba(13,9,6,0.6604050196958392) 32%, rgba(254,252,252,0.2615286152014572) 82%'
                        link='https://br.pinterest.com/'
                        texto="Texto desccritivo"
                        linkTexto="https://br.pinterest.com/"
                    />

                </Col>

                <Col>
                    <FadeImage
                        imagem={imgs[0]}
                        gradiente='8deg, rgba(13,9,6,0.6604050196958392) 32%, rgba(254,252,252,0.2615286152014572) 82%'
                        link='https://br.pinterest.com/'
                        texto="Texto desccritivo"
                        linkTexto="https://br.pinterest.com/"
                    />

                </Col>
            </Row>
        </Container>

    )
}


export default AdminPage
const StContainer = styled.div`
a{
    font-family:Roboto !important;
}

.xcontainer {
  position: relative;
  width: 100%;
  border: 1px red solid;
  height: auto;
  background: url(${props => props.imagem || 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'});
  background-size:auto ;
}

.image {
  display: block;
  width: 100%;
  height: 230px;
  border: 3px blue solid;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  /* background-color: #008CBA; */
  background: ${props => props.gradiente};
  /* background: rgb(249,128,1); */
/* background: -moz-linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* background: -webkit-linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* background: linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f98001",endColorstr="#fefcfc",GradientType=1); */
}

.xcontainer:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

`