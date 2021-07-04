import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components';

const Artigos = () => {


 return (
 <>
 <StContainer className='darkbg'>
 <Row>
<Col>
 <div className='responsive centro'>
 <h3> Artigos </h3>
 </div>
 </Col>
 </Row>
<br/>

 <Row>

 <Col>
 {/* <div className="vl"> */}
 <p> 17/11/2020 -
 <Link href="/artigos/testes-integracao-jest-express-mongodb"> Artigo: Algumas observações sobre testes de integração com Jest, Express e Mongodb. </Link> </p>

 <p> 14/11/2020 -
 <Link href="/artigos/formulario-de-contato-react-sem-back-end"> Artigo: Formulário de Contato React sem Back End. </Link> </p>

 <p> 12/11/2020 -
 <Link href="/artigos/jest-mongodb-erros"> Artigo: Resolvendo os erros de implementação de testes Jest + MongoDB. </Link> </p>

 <p> 10/11/2020 -
 <Link href="/artigos/cookies-vs-local-storage"> Artigo: Cookies vs local storage </Link> </p>

 <p> 04/11/2020 -
 <Link href="/artigos/arredondar-decimal-javascript"> Artigo: Arredondar números decimais em JavaScript </Link> </p>

 </Col>
 </Row>
 </StContainer>


 </>
 )
}

export default Artigos


const StContainer = styled(Container)`
min-height: 70vh;
padding-top: 30px;

.vl{
 height:100%;
 border-right: solid 1px red;
 }

.container {
 position: relative;
 overflow: hidden;
 width: 100%;
 padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
 }
 
 /* Then style the iframe to fit in the container div with full height and width */
 .responsive-iframe {
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 width: 100%;
 height: 100%;
 }
 #slide {
 height: 50px;
 transition: height 500ms ease;
 -moz-transition: height 500ms ease;
 -ms-transition: height 500ms ease;
 -o-transition: height 500ms ease;
 -webkit-transition: height 500ms ease;
 }

 .responsive {
 width: 100%;
 height: auto;
 
 }

 p{
 a{
 font-family:Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
 Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 font-size: 20px;
 }
 }



`