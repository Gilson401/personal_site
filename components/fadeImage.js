import React, { useRef, useState } from 'react'
import styled from 'styled-components';
// import { Carousel, Col, Row, Container } from 'react-bootstrap'


/**props: imagem, gradiente, link, texto, linkTexto */
const FadeImage = ({ imagem, gradiente, link, texto, linkTexto }) => {

    
    const rgradiente = `linear-gradient(${gradiente})`
    
    const inputEl = useRef(null)    
    const [refer, setRefer] =useState(null)

    const handleImageLoad = (event) => {
        console.log("client  ", event.target.clientWidth ,  event.target.clientHeight)
        // console.log("natural ", event.target.naturalWidth , event.target.naturalHeight )
        // setRefer(event.target)  
        // console.log("inputEl", inputEl.current.naturalWidth )      
    }


    return (
        <StContainer  gradiente={rgradiente} link={link} texto={texto} imagem={imagem}>
            <div className="xcontainer">
                <img   ref={inputEl} onLoad={handleImageLoad} className="image" src={imagem || "/media/pilha.jpg"} alt={imagem || "/media/pilha.jpg"} />
                
                
                <div className="overlay">
                    <div className="text">
                        <a href={link}> {linkTexto || "Defina linkTexto"} </a>
                       <p>{texto || 'Defina o texto'}</p>
                     
                    </div>

                </div>
            </div>
        </StContainer>
    )
}




export default FadeImage
const StContainer = styled.div`
margin-bottom: 20px;
a{
    font-family:Roboto !important;
}
  /* border: 1px red solid; */
.xcontainer {
  position: relative;
  width: 100%; 

  height: auto;
  background: url(${props => props.imagem || 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'});
  background-size:auto ;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  
  /* border: 3px blue solid; */
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
  /* as variaçõe abaixo são referentes a compatibilidade */
/* background: -moz-linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* background: -webkit-linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* background: linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f98001",endColorstr="#fefcfc",GradientType=1); */
}

.xcontainer:hover .overlay {
  opacity: 1;
}

.text {
  /* border: 1px red solid; */
  color: white;
  font-size: 20px;
  position: absolute;

  

  bottom: 10%;
  left: 20px;
  
  /* -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */
  transform-origin: left bottom ;
  text-align: left;
  a{
            text-align: left;
            margin-left: 0px;
            @media screen and (max-width: 600px) {
    font-size: 20px; }
  }
}

`