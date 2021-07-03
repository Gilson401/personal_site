import React, { useState, useRef } from 'react'

import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Carousel, Col, Row, Container } from 'react-bootstrap'


import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper React components
import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';


SwiperCore.use([Navigation, Thumbs]);

//https://medium.com/makers-byte/the-25-best-personal-portfolio-website-design-inspiration-examples-e2eb1c8734df
//https://br.pinterest.com/search/pins/?rs=ac&len=2&q=programmer%20background&eq=programmer%20back&etslf=3319&term_meta[]=programmer%7Cautocomplete%7C0&term_meta[]=background%7Cautocomplete%7C0
const Portfolio = () => {

    const router = useRouter()
    const academialogin = '/media/academialogin.JPG'
    const characterusercreate = '/media/charactersusercreate.JPG'
    const cms6 = '/media/cms6.JPG'
    const quizz0 = '/media/quizz0.PNG'
    const coders0 = '/media/coders0.PNG'
    const items = [
        {
            src: '/media/arquitetarDrone.JPG',
            altText: 'empresa de imagens aéreas feitas com drone',
            caption: 'Site institucional da Arquitetar Drone.',
            header: ' Arquitetar Drone',
            link: 'https://front-app-academia.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/academia'
        },
        {
            src: academialogin,
            altText: 'exemplo de tela de login com JsonWebToken',
            caption: 'Featuring JsonWebToken',
            header: ' App Academia Login',
            link: 'https://front-app-academia.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/academia'
        },
         {
            src: characterusercreate,
            altText: 'formulário html feito em react',
            caption: 'Bootstrap Form',
            header: 'Character Usercreate Form',
            link: 'https://charactersdatabase.vercel.app/',
            link2: 'https://gilsonpaulo.com.br/portfolio/characters'
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

    /**Função Que retorna itens do portfólio */
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

                            <Link href={props.link}>
                                {txt}
                            </Link> <br />
                            <br />
                            {props.brief}


                        </Col>
                    </Row>
                </BackBlack>
            </>)
    }

    const [item, setItem] = useState(0);


    return (

        <StContainer >

            <Row>
                <Col>
                    <h2>Meus trabalhos </h2>

                    <p>
                    {items[item].caption ||'/todo.jpg' }
                        </p>
                </Col>
            </Row>


            <Row>
                <Col>
                <img className="bigfoto" 
                    
                            onClick={()=>router.push(items[item].link2)}    
                            
                            src={items[item].src ||'/todo.jpg' }
                            alt={ items[item].altText || '/todo.jpg'}
                            />

                </Col>
            </Row>

            <Row className='d-flex'  >


                {items.map((item, i) => (
                    <Col>
                        <div className="">
                        <img className="imgPort " 
                            onMouseEnter={()=> setItem(i)} 
                            onClick={()=> setItem(i)}    
                            // onMouseLeave={()=> setItem(-1)}
                            src={item.src}
                            alt={item.altText}
                            />

                            {/* {(<h3>{item.header}</h3>)} */}
                            {/* {(<p>{item.caption}</p>)} */}
                            {/* {(<a href={item.link}>Link da Aplicação</a>)} */}
                            {/* {item.link2 ? RowCol(<a href={item.link2}>Detalhe da Aplicação:</a>) : ""} */}
                        </div>

                    </Col>
                ))}

            </Row>


        </StContainer>



    )
}

export default Portfolio

const StContainer = styled(Container)`
background:rgba(0, 0, 0, .51);
margin-top: 20px;


.bigfoto{
    width: 100%;
    /* height: 60vh; */
    height: auto;
    margin-bottom:  10px;
    transition : 500ms;
    cursor: pointer;
} 

.imgPort{

    width: 100%;
    height: auto;
    transition : 500ms;
    filter: grayscale(1.5);

    :hover {
        transition : 500ms;
        transform: scale(1.3, 1.3);
        cursor: pointer;
        filter: grayscale(0);
    }

}

`


const BackBlack = styled.div`
 background-color:  rgba(10,10,10,0.7);
 border-radius: 5px;
 padding: 10px;

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



