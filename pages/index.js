import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link'
import Apresentacao from '../components/apresentacao.js'
import Portfolio from '../components/carouselPortfolio.js';
import NavDoApp from '../components/layout/nav/nav.js';
import Minhasredes from '../components/minhasredes.js';
import ContatoComponente from '../components/contatocomp.js';

function Home() {


    return (

        <>
            <Head>
                <meta name="google-site-verification" content="QlUiQQ-kTps5v700InG2Qvf83HzHTL14yNjFESgdRU0" />
                <title>GilsonPaulo Web Developer React, MongoDB, NodeJs, ExpressJs</title>
                <link rel="canonical" href="https://www.gilsonpaulo.com.br" />

            </Head>

            <StContainer fluid>
          

                <Apresentacao />
                <Portfolio />
                <Minhasredes/>
                <ContatoComponente/>
            </StContainer>

        </>
    )
}


export default Home;


const StContainer = styled(Container)`


font-family:Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

`