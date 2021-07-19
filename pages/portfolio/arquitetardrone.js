import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { ResponsiveIframe } from '../../lib/util'



const Arquitetardrone = () => {

const canonical = "academia"
const title = ""
const descriptConten = ""

  return (
    <>
          <Head>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>
                <link rel="canonical" href={"https://gilsonpaulo.com.br/artigos/"+ canonical} />
                <title>{title}</title>
                <meta name="description" content={descriptConten} />
            </Head>


            <Container> 
            <br/>
<h1> Arquitetar Drone </h1>

<br/>

<ResponsiveIframe url="https://www.youtube.com/embed/JwAzGyzx7dw"/>
<br/>
<br/>

<p>Este projeto é o site institucional da empresa Arquitetar Drone. Feito com o framework NextJs e hospedado na Hostgator.</p>

<p>Possui quatro páginas: Home, Sobre, Portfólio e Contato.  </p>

<p>Site responsivo.</p>

<p>Botão para contato por Zap</p>

<p>Design feito por <a href="https://kindesigner.com/" target="_blank" > Kin Brand</a> </p>

<p>Link em produção <a href="https://arquitetardrone.com.br/" target="_blank" > Arquitetar Drone</a> </p>

<br/>
<h3>Dependências: </h3>
<br/>
<p> 
    "bootstrap": "^4.5.3",<br/>
    "emailjs-com": "2.6.3",<br/>
    "next": "10.2.3",<br/>
    "react": "17.0.2",<br/>
    "react-bootstrap": "^1.6.0",<br/>
    "react-dom": "17.0.2",<br/>
    "react-icons": "^3.11.0",<br/>
    "react-share": "^4.3.1",<br/>
    "sass": "^1.35.1",<br/>
    "styled-components": "^5.3.0",<br/>
    "sweetalert2": "^10.16.9",<br/>
    "swiper": "^6.7.1"<br/>
</p>

<br/>
{/* <Sharegroup /> */}
            <div id="fb-root"></div>
            <div className="fb-comments" data-href={"https://gilsonpaulo.com.br/portfolio/"+ canonical} data-numposts="5" data-width=""></div>
            </Container> 

            <style jsx>{`
            
            `}</style>
    </>
  )
}

export default Arquitetardrone
