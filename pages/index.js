

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link'
import Apresentacao from '../components/apresentacao.js'
import Portfolio from '../components/carouselPortfolio.js';
import NavDoApp from '../components/layout/nav/nav.js';

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
                
            </StContainer>

        </>
    )
}


export default Home;


const StContainer = styled(Container)`




`