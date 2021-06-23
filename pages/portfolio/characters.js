import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { ResponsiveIframe } from '../../lib/util'



const Portfolio_coders = () => {

const canonical = "characters"
const title = "Database para jogos de RPG"
const descriptConten = "Banco de dados de personagens de RPG."

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
<h1> Portfólio - Characters Database para jogos de RPG </h1>

<ResponsiveIframe url="https://www.youtube.com/embed/AqItP8316kQ"/>
<br/>
<br/>
<h3>Sobre: </h3>
<p>
    Aqui você salva o progresso dos teus personagens de RPG.
</p>

<p> 
    Deployado no host Vercel, esta aplicação é um CRUD básico contendo dois schemas. Um para os usuários e outro para os personagens.
</p>

<br/>
<a href="https://charactersdatabase.vercel.app/login"> Link </a>

<br/>
<h3>Dependências: </h3>
<br/>

<p> 
"axios": "^0.19.2",<br/>
    "bootstrap": "^4.5.2",<br/>
    "jsonwebtoken": "^8.5.1",<br/>
    "react": "^16.13.1",<br/>
    "react-dom": "^16.13.1",<br/>
    "react-router-dom": "^5.2.0",<br/>
    "react-scripts": "^3.4.3",<br/>
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
