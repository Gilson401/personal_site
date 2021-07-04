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
<h1> TODO DRONE </h1>

<ResponsiveIframe url="https://www.youtube.com/embed/zcb-qTlW2fA"/>
<br/>
<br/>
<h1>TODO DRONE</h1>
<p></p>

<p>.</p>

<p></p>

<ul>
    <li>Banner em carrossel para exibição dos destaques.</li>
   
</ul>

<p></p>

<p></p>


<br/>
<h3>Dependências: </h3>
<br/>
<p> 
    "bootstrap": "^4.5.2",<br/>
    "emailjs-com": "^2.6.3",<br/>
    "node-sass": "^4.14.1",<br/>
    "react": "^16.13.1",<br/>
    "react-bootstrap": "^1.3.0",<br/>
    "react-dom": "^16.13.1",<br/>
    "react-helmet": "^6.1.0",<br/>
    "react-icons": "^3.11.0",<br/>
    "react-intl-currency-input": "^0.2.5",<br/>
    "react-loader-spinner": "^3.1.14",<br/>
    "react-redux": "^7.2.2",<br/>
    "react-router-dom": "^5.2.0",<br/>
    "react-scripts": "^3.4.4",<br/>
    "react-share": "^4.3.1",<br/>
    "redux": "^4.0.5",<br/>
    "redux-multi": "^0.1.12",<br/>
    "redux-thunk": "^2.3.0",<br/>
    "styled-components": "^5.2.0",<br/>
    "sweetalert2": "^10.6.1"<br/>
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
