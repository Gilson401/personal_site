import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { Codeblock, Imgsmp, ResponsiveIframe } from '../../lib/util'



const Portfolio_academia = () => {

const canonical = "academia"
const title = "Crud de academia"
const descriptConten = "CRUD para gestão de usuários de academias com 4 roles de usuários."

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
<h1> Portfólio - Academia </h1>

<ResponsiveIframe url="https://www.youtube.com/embed/2z6839uBRqw"/>
<br/>
<br/>
<h3>Sobre: </h3>
<p>Este projeto é uma aplicação web CRUD para gestão de usuários de academias de ginástica. Feito em parceria com meu colega do curso.
Fiquei responsável pelo front-end.<br/>
</p>

<p>Nesta aplicação há quatro tipos de usuários: administrador, aluno, professor e estagiário. Os acessos são diferentes dependendo 
    do "role" do usuário.
</p>
<p> O acesso ao sistema é feito por meio de login com nº de matrícula senha. </p>

<p>O administrador possui acesso para cadastrar novos usuários de qualquer role, bem como editar os registros e apagá-los. 
    As trasações são feitas consumindo uma api node express e os registros são armazenados no banco de dados MongoDB.
</p>

<p>O professor possui a visão de listar alunos e pode cadastrar exercícios e editar a ficha do aluno alterando os dados de séries associadas,
    e avaliação física.
</p>

<p>Estagiário consegue listar os alunos e suas series de exercícios, não podenso fazer cadastros e nem alterações.</p>

<p>O aluno por sua vez ao entrar no sistema é direcionado para sua página de dados pessoais, a única que tem acesso.</p>


<br/>
<h3>Dependências: </h3>
<br/>
<p> "bootstrap": "^4.5.2",<br/>
    "jsonwebtoken": "^8.5.1",<br/>
    "react": "^16.13.1",<br/>
    "react-bootstrap": "^1.3.0",<br/>
    "react-dom": "^16.13.1",<br/>
    "react-icons": "^3.11.0",<br/>
    "react-router-dom": "^5.2.0",<br/>
    "react-scripts": "^3.4.4",<br/>
    "styled-components": "^5.2.0"
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

export default Portfolio_academia
