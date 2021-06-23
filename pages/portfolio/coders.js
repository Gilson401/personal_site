import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { ResponsiveIframe } from '../../lib/util'



const Portfolio_coders = () => {

const canonical = "coders"
const title = "Coders a rede social de desenvolvedores"
const descriptConten = "Coders a rede social de desenvolvedores."

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
<h1> Portfólio - Coders a rede social de desenvolvedores </h1>

<ResponsiveIframe url="https://www.youtube.com/embed/URV_xDnbsj8"/>
<br/>
<br/>
<h3>Sobre: </h3>
<p>
    Esta é a rede social dos devs do Brasil.
</p>

<p> 
    Deployado no host Vercel, esta aplicação é um clone de facebook. Os usuários fazem o cadastro inicial e 
    recebem um email de confirmação para poder acessar a rede.
</p>

<p>
    O sistema de amizade é do tipo do Twitter. Escolhe um usuário e passa as seguir as postagens que irão aparecer em sua timeline.
</p>

<p> O usuário também pode escolher um tópico de interesse e passará a ver em seu feed todos os posts referentes a este tópico.
</p>

<p> Como diferencial, este projeto utiliza o framework AntDesign no logar do Bootstrap e derivados.
</p>

<a href="https://coders-seven.vercel.app/minharede"> Link </a>

<br/>
<h3>Dependências: </h3>
<br/>
<p> 
"axios": "^0.21.1", <br/>
    "bootstrap": "^4.5.2",<br/>
    "node-sass": "^4.14.1",<br/>
    "popper.js": "^1.16.1",<br/>
    "react": "^16.13.1",<br/>
    "react-bootstrap": "^1.3.0",<br/>
    "react-dom": "^16.13.1",<br/>
    "react-helmet": "^6.1.0",<br/>
    "react-icons": "^3.11.0",<br/>
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
            <div className="fb-comments" data-href={"https://gilsonpaulo.com.br/artigos/"+ canonical} data-numposts="5" data-width=""></div>
            </Container> 

            <style jsx>{`
            
            `}</style>
    </>
  )
}

export default Portfolio_coders
