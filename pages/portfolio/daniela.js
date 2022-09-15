import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import {  ResponsiveIframe } from '../../lib/util'



const Portfolio_academia = () => {

const canonical = "daniela"
const title = "Site institucional"
const descriptConten = "Site Daniela Consultora"

  return (
    <>
          <Head>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>
                <link rel="canonical" href={"https://gilsonpaulo.com.br/portfolio/"+ canonical} />
                <title>{title}</title>
                <meta name="description" content={descriptConten} />
            </Head>


            <Container> 
            <br/>
<h1> Portfólio - Daniela Consultora </h1>

<img className="responsive" src="/media/daniela-consultora.jpg" alt="daniela consultora"/>

<h3 className="mt-4">Sobre: </h3>
<p>Este projeto é um site institucional feito em React com Typescript e TailwindCSS. 
</p>

<a className="d-block" href="https://www.daniestiloeimagem.com.br/" target="_blank">
Link Aplicação
</a>

<a className="d-block" href="https://github.com/Gilson401/daniela_consultora" target="_blank">
Link GitHub
</a>

<h3 className="mt-4">Dependências: </h3>

<p >
    "typescript": "^4.7.4",<br/>
    "react": "^18.2.0",<br/>
    "react-dom": "^18.2.0",<br/>
    "react-error-boundary": "^3.1.4",<br/>
    "react-icons": "^4.4.0",<br/>
    "react-multi-carousel": "^2.8.2",<br/>
    "vite-plugin-svgr": "2.2.0"<br/>
    "postcss": "^8.4.14",<br/>
    "tailwindcss": "^3.1.5",<br/>
</p>

<br/>

            <div id="fb-root"></div>
            <div className="fb-comments" data-href={"https://gilsonpaulo.com.br/portfolio/"+ canonical} data-numposts="5" data-width=""></div>
            </Container> 

            <style jsx>{`
            
            `}</style>
    </>
  )
}

export default Portfolio_academia
