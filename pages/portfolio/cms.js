import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { ResponsiveIframe } from '../../lib/util'



const Portfolio_cms = () => {

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
<h1> Portfólio - Um CMS altamente customizável </h1>

<ResponsiveIframe url="https://www.youtube.com/embed/zcb-qTlW2fA"/>
<br/>
<br/>
<h3>Sobre: </h3>
<p>Este projeto é uma aplicação web CMS + CRUD para exibição de produtos e serviços de um negócio (neste exemplo do ramo de alimentos).<br/>
O front é 100% responsivo. Possui estados administrados com arquitetura flux redux.
</p>

<p>Nesta aplicação temos a visão do portal que é para o visitante conhecer os produtos e serviços da 
    empresa e também temos a visão do administrador.</p>

<p> O portal tem cinco regiões na sua página inicial. </p>

<ul>
    <li>Banner em carrossel para exibição dos destaques.</li>
    <li>Região para listagem resumida de serviços, aceitando links.</li>
    <li>Uma área para exibição de fotos diversas.</li>
    <li>Uma região para quem somos (breve descrição do negócio).</li>
    <li>A última região é onde o proprietário poderá inserir itens de serviços.</li>
</ul>

<p>
    Todas as áreas destacadas acima possuem uma contraparte com detalhamentro maior acessada pelo menu de navegação da parte superior.
</p>

<p> 
    A aplicação possui uma área do proprietário contendo a parte administrativa na qual é possivel fazer a customização 
    de todos os itens listados bem como a imagem de fundo da página.
</p>

<p>As informações do rodapé são customizáveis</p>

<p>O link para a área de produtos possui uma tabela onde o visitante pode ver detalhes de cada produto/serviço.</p>

<p>O portal também possui um formulário de contato onde o visitante pode mandar email sem precisar sair da página. </p>

<p>A região do portal possui um grupo de botões de compartilhamento para redes sociais.</p>

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

export default Portfolio_cms
