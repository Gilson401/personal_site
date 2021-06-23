import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { ResponsiveIframe } from '../../lib/util'



const Portfolio_quizz = () => {

const canonical = "quizz"
const title = "Quizz Escolar"
const descriptConten = "Exercícios de fixação para escolas."

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
<h1> Portfólio - Uma aplicação de Quizz para escolas </h1>

<ResponsiveIframe url="https://www.youtube.com/embed/lFbmTPA-gUE"/>
<br/>
<br/>
<h3>Sobre: </h3>
<p>
    Trata-se de uma aplicação escalável, voltada para escolas onde os professores podem cadastrar perguntas e respostas 
    de suas disciplinas. Foi pensado para ser mais do que um jogo de perguntas e respostas. Trata-se de uma solução online de exercícios de fixação.
</p>

<p> 
    As questões são específicas para cada instituição de ensino. Cada professor/organização poderá aplicar as questões da forma que
    julgar adequadas.
</p>

<p>
    Tem como diferenciais o professor poder cadastrar mais de uma resposta correta para cada pergunta, assim faz com que os alunos possam
    ser avaliados quanto ao entendimento da questão e assunto e não apenas decorar a resposta correta.
</p>

<p> 
    Para cada questão podem ser adicionados imagens e e ou vídeo (link youtube) além de um enunciado obrigatório.
</p>

<p> 
    Os alunos tem acesso à area de "Quizz" onde escolhem uma disciplina, uma quantidade de questões e testam seus conhecimentos
    com questões colocadas pela sua escola/professor.
</p>


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

export default Portfolio_quizz
