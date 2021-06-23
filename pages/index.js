

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link'

function Home() {


    return (
        <Container>
            <Head>
                <meta name="google-site-verification" content="QlUiQQ-kTps5v700InG2Qvf83HzHTL14yNjFESgdRU0" />
                <title>GilsonPaulo Web Developer React, MongoDB, NodeJs, ExpressJs</title>
                <link rel="canonical" href="https://www.gilsonpaulo.com.br" />

            </Head>


            <br />
            <h1 >Web Developer ReactJS, MongoDB, ExpressJS, NodeJS</h1>
            <br />
            <p className="lead">Updates:</p>

            <hr className="my-2" />

            {/* ################################################################################################################################# */}

            {/* /arredondar-decimal-javascript */}
            <div className="scroll">
            <p>13/06/2021 - Migrei para um VPS</p>
            <p> 14/01/2021 -
            <Link href="/portfolio"> Atualizações no portfólio. </Link>  </p>

            <p> 30/11/2020 - Novo post no Blog. Vídeo de exibição do meu WIP CMS no meu canal do youtube. </p>

            <p> 18/11/2020 - Adicionado botão de voltar ao topo. Canto inferior direito. </p>
            
            <p> 17/11/2020 -
            <Link href="/artigos/testes-integracao-jest-express-mongodb"> Artigo: Algumas observações sobre testes de integração com Jest, Express e Mongodb. </Link>  </p>

            <p> 15/11/2020 - Adicionado grupo de botões de compartilhamento em redes sociais. Ver acima. </p>

            <p> 14/11/2020 -
            <Link href="/artigos/formulario-de-contato-react-sem-back-end"> Artigo: Formulário de Contato React sem Back End. </Link>  </p>

            <p> 12/11/2020 -
            <Link href="/artigos/jest-mongodb-erros"> Artigo: Resolvendo os erros de implementação de testes Jest + MongoDB. </Link>  </p>

            <p> 10/11/2020 -
            <Link href="/artigos/cookies-vs-local-storage"> Artigo: Cookies vs local storage </Link>  </p>


            <p> 07/11/2020 -
            <Link href="/artigos/dark-mode-em-nextjs"> Update: Adicionei Darkmode e Error Page dos Gatinhos </Link>  </p>

            <p> 04/11/2020 -
            <Link href="/artigos/arredondar-decimal-javascript"> Artigo: Arredondar números decimais em JavaScript </Link>  </p>

            <p> 03/11/2020 -
            <Link href="/blog"> Blog: Ataque Hacker afeta time brasileiro: </Link>  </p>

            <p> 01/11/2020 -
            <Link href="/blog"> Subi versão em NextJS: </Link>  </p>
            <p> 18/10/2020 -  Atualizando conteúdo .</p>

            </div>
            
        </Container>
    )
}


export default Home;

const Divs = styled.div`
height: '50px';
width: '70px';
background: 'red'
`
