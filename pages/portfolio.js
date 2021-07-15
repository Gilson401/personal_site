import React, { useState } from 'react'

import styled from 'styled-components';
import Link from 'next/link'

import { Carousel, Col, Row, Container } from 'react-bootstrap'


import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper React components
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';


SwiperCore.use([Pagination,Navigation]);

//https://medium.com/makers-byte/the-25-best-personal-portfolio-website-design-inspiration-examples-e2eb1c8734df

const Portfolio = () => {


    const academialogin = '/media/academialogin.JPG'
    const academiausercreate = '/media/academiausercreate.JPG'
    const characterusercreate = '/media/charactersusercreate.JPG'
    const darkmode = '/media/darkmode.JPG'
    const whitemode = '/media/whitemode.JPG'
    const [cms1, cms2, cms3, cms4, cms5, cms6] = ['/media/cms1.JPG', '/media/cms2.JPG', '/media/cms3.JPG', '/media/cms4.JPG',
        '/media/cms5.JPG', '/media/cms6.JPG']
    const [quizz0] = ['/media/quizz0.PNG']
    const [coders0, coders1] = ['/media/coders0.PNG', '/media/coders1.PNG']
    const items = [
        {
            src: academialogin,
            altText: 'Sistema online para gestão de usuários, administradores, alunos, estagiários e professores',
            caption: 'Sistema de gestão de usuários de academia',
            header: ' App Academia Login',
            link: 'https://front-app-academia.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/academia'
        },
        {
            src: academiausercreate,
            altText: 'formulário html feito em react',
            caption: 'React useState',
            header: 'User Create Form',
            link: 'https://front-app-academia.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/academia'
        },
        {
            src: characterusercreate,
            altText: 'Salve as informações de seus personagens de RPG.',
            caption: 'Banco de dados de personagens',
            header: 'Character Usercreate Form',
            link: 'https://charactersdatabase.vercel.app/'
        },

        {
            src: whitemode,
            altText: 'Este Site com Whitemode implementado',
            caption: 'Whitemode',
            header: 'Este Site com Whitemode implementado',
            link: ''
        },

        {
            src: darkmode,
            altText: 'Este Site com Darkmode implementado e ativado',
            caption: 'Darkmode',
            header: 'Este Site com Darkmode implementado',
            link: ''
        },
        {
            src: cms1,
            altText: 'Display',
            caption: 'CMS: Carousel Customizado.',
            header: 'Display dos itens vendidos pelo estabelecimento.',
            link: 'https://front-gluten-free.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/cms'
        },
        {
            src: cms2,
            altText: 'CMS contendo Emailjs',
            caption: 'CMS',
            header: 'Projeto mais recente CMS para produtos alimentícios.',
            link: 'https://front-gluten-free.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/cms'
        },
        {
            src: cms3,
            altText: 'CMS  contendo Emailjs',
            caption: 'Decida o que seus clientes vão ver na tela inicial',
            header: 'Landing Page  customizável.',
            link: 'https://front-gluten-free.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/cms'
        },
        {
            src: cms4,
            altText: 'CMS contendo Emailjs',
            caption: 'Área de admin com dashboard com diversos forms para cadastro dos itens.',
            header: 'Projeto mais recente CMS para produtos alimentícios.',
            link: 'https://front-gluten-free.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/cms'
        },
        {
            src: cms5,
            altText: 'CMS contendo Emailjs',
            caption: 'Área de listagem de todos os produtos com detalhes de preço.',
            header: 'Relação de produtos.',
            link: 'https://front-gluten-free.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/cms'
        },
        {
            src: cms6,
            altText: 'CMS contendo Emailjs',
            caption: 'Área de contato. O proprietário recebe um email de contato diretamente do site.',
            header: 'Form de contato com lib Emailjs .',
            link: 'https://front-gluten-free.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/cms'
        },
        {
            src: quizz0,
            altText: 'Quizz escolar',
            caption: 'Uma solução de exercícios de fixação para escolas.',
            header: 'Tela de login.',
            link: 'https://quizzescola.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/quizz'
        }, {
            src: coders0,
            altText: 'A rede social',
            caption: 'Rede social clone de Facebook.',
            header: 'Tela de login.',
            link: 'https://coders-seven.vercel.app/signin/',
            link2: 'https://gilsonpaulo.com.br/portfolio/coders'
        }, {
            src: coders1,
            altText: 'A rede social',
            caption: 'Rede social clone de Facebook.',
            header: 'Tela de feed.',
            link: 'https://coders-seven.vercel.app/signin/',
            link2: 'https://gilsonpaulo.com.br/portfolio/coders'
        }

    ];




    const RowCol = (element) => {
        return (<Row>
            <Col>
                {element}
            </Col>
        </Row>
        )
    }


    const PortItem = (props) => {
        const txt = props.linktext
        return (


            <>
                <BackBlack>


                    <Row >
                        <Col xs="12" md="3">
                            <img className="responsive" src={'/media' + props.srcimage} />
                        </Col>
                        <Col>

                            <Link  className='linkme' href={props.link}>
                                {txt}
                            </Link> <br />
                            <br />
                            {props.brief}


                        </Col>
                    </Row>
                </BackBlack>
            </>)
    }


    return (
        <StContainer>

            <h2>Portfolio </h2>

            <p>Projetos desenvolvidos com Reactjs, Mongodb, Nodejs, Expressjs</p>


            <Banner hidden={false} >
            <Swiper
                pagination={{"type": "progressbar" }}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper.activeIndex)}
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Row>
                            <img className="responsive"
                                // className="d-block w-100"
                                src={item.src}
                                alt={item.altText}
                            />
                        </Row>
                        <Row>
                            <Col>
                                {RowCol(<h3>{item.header}</h3>)}
                                {RowCol(<p>{item.caption}</p>)}
                                {RowCol(<a className='linkme' href={item.link}>Link da Aplicação</a>)}
                                {item.link2 ? RowCol(<a className='linkme' href={item.link2}>Detalhe da Aplicação</a>) : ""}
                            </Col>
                        </Row>
                    </SwiperSlide>
                ))}
                
            </Swiper>

</Banner>
            <br /><br /><br /><br />

            <PortItem
                srcimage={"/coders0.PNG"}
                link={"/portfolio/coders"}
                linktext={"A rede social dos DEVS."}
                brief={`É um clone de Facebook. Feito com a lib Antdesign, é 100% responsivo. O próprio usuário faz o seu 
                cadastro, atualiza seu perfil e posta e seque postagens de outros usuários, podendo inclusive fazer comentários. `}
            />

            <br />
            <PortItem
                srcimage={"/cms7.PNG"}
                link={"/portfolio/cms"}
                linktext={"Um CMS altamente customizável."}
                brief={`Este projeto é uma aplicação web CMS + CRUD para exibição de produtos e serviços de um negócio 
            (neste exemplo do ramo de alimentos). O front é 100% responsivo. Possui estados administrados com 
            arquitetura flux redux. `}
            />

            <br />



            <PortItem
                srcimage={"/quizz2.png"}
                link={"/portfolio/quizz"}
                linktext={"Quizz para escolas."}
                brief={`Trata-se de uma aplicação voltada para escolas onde os professores podem cadastrar perguntas 
            e respostas de suas disciplinas. Foi pensado para ser mais do que um jogo de perguntas e respostas.
            Trata-se de uma solução online de exercícios de fixação.`}
            />

            <br />

            <PortItem
                srcimage={"/academialogin.JPG"}
                link={"/portfolio/academia"}
                linktext={"CRUD para Academias."}
                brief={`Este projeto é uma aplicação web CRUD para gestão de usuários de academias de ginástica. 
            Feito em parceria com meu colega do curso. Fiquei responsável pelo front-end. `}
            />

            <br />

            <PortItem
                srcimage={"/characters0.PNG"}
                link={"/portfolio/characters"}
                linktext={"CharactersDatabase."}
                brief={`Este projeto é uma aplicação web CRUD para gestão de usuários de academias de ginástica.`}
            />
            <br />

            {/* <BackBlack>
<div className="card"></div>
</BackBlack> */}

        </StContainer>

    )
}

export default Portfolio

const BackBlack = styled.div`
 background-color:  rgba(10,10,10,0.7);
 border-radius: 5px;
 padding: 10px;
 .col{
 a{
 font-family:Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
}
 }
    .card {
        width: 200px;
        height: 140px;
        background: url("/next.JPG") no-repeat;
        background-size: cover;
        display: inline-block;
        
    }
    .card:hover {
        background: url("/characters0.PNG") no-repeat;
        background-size: cover;
    }
 
`




const StContainer = styled(Container)`
min-height:700px;

.linkme{
 font-family:Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
}

 
 
`

const Banner = styled.div`
    
    min-height:300px;
    width:100%;
    /* color: black; */
    text-align:center;

    h3{
        margin-top : 45px;
    }

    img {
        max-height : 500px;
    }

    .carousel-indicators li {
        height: 10px;
    }

    .carousel-indicators {
        bottom: -50px;
        background-color:  rgba(10,10,10,0.7);
        margin-top: 50px;
        border-radius: 5px;
    }

    .carousel-control-next-icon , .carousel-control-prev-icon {
        
        width: 40px;
        height: 40px;
        border-radius: 10%;
        background-color:  rgba(10,10,10,0.7);
    }

    /* img{
        width: 340px;
        height: 540px;
    } */
`
