import React from 'react'
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

const Apresentacao = () => {

    const techImages = ['vue.jpg', 'nuxt.jpg', 'mongow.jpg', 'expressw.jpg', 'reactw.jpg', 'nodew.jpg']

    return (
        <StContainer >

            <Col className="hidelarge" >

                <img
                    className="d-block mx-auto responsive circulo"
                    src={'/media/eufoto.png'}
                    alt={'eufoto.png'}
                />

            </Col>

            <Row >
                <Col className="d-flex" xs={12} md={8} >
                    <div className='my-auto'>
                        <h1>
                            Olá, eu sou Gilson Paulo. Eu sou desenvolvedor web full-stack MERN + VueJS e NuxtJS.
                        </h1>
                        <br />
                        <h5>
                            Eu faço <span>sites e sistemas online</span> para pessoas e empresas.  Trabalho com 
                            <span> VueJS, NuxtJS, MongoDB, ExpressJS, React e NodeJS</span>.
                        </h5>
                    </div>
                </Col>

                <Col className="hidesmall" >

                    <img
                        className="d-block w-100 borderr"
                        src={'/media/eufoto.png'}
                        alt={'eufoto.png'}
                    />

                </Col>

            </Row>
            <br />
            <Row>
                <Col className="d-flex" xs={12}>
                    <div className='my-auto'>
                        <h1 >
                            Por que contratar-me?
                        </h1>
                        <p>
                            Possuo experiência formal como desenvolvedor web Front-End Jr. iniciando em agosto de 2021 até o momento. Trabalhei com
                            os frameworks VueJS, NuxtJS e libs como Vuex, Highcharts, TailwindCSS entre outras.
                        </p>
                        
                        <p>
                            Experiência em versionamento de código com GIT usando Github. Também possuo experiência em 
                            rotinas ágeis como SCRUM.
                        </p>

                        <p>
                            Tenho experiência anterior de 16 anos como assistente admiistrativo da antiga Br Distribuidora, hoje Vibra Energia.
                            Embora eu seja jr como desenvolvedor, considero-me com maturidade profissional e emocional para a atividade.
                        </p>

                        <p>
                            Disponibilidade para trabalho presencial no Rio de Janeiro, remoto, híbrido, contratos PJ ou CLT.
                        </p>

                        <p>
                            Um outro diferencial são as tecnologias que eu utilizo: MongoDB, ExpressJS, React e NodeJS. Consideradas mais
                            modernas em suas áreas, elas dão flexibilidade ao desenvolvedor.
                        </p>

                    </div>
                </Col>
            </Row>

            <Row xs={6} md={12} className="flex-gap">

                {techImages.map(item => (

                    <Col key={item} className="d-flex mb-3" xs={6} md={3}>
                        <img
                            className="d-block w-100 my-auto"
                            src={'/media/' + item}
                            alt={item}
                        />
                    </Col>))}

            </Row>


        </StContainer>
    )
}

export default Apresentacao

const StContainer = styled(Container)`


background: url('/media/bgpreto.jpg');
padding-top: 20px;
padding-bottom: 10px;
color:white;
background:rgba(0, 0, 0, .51);
font-family: Roboto;
img{
    margin-bottom: 20px;
/* padding-bottom: 10px; */
}
span{
    color: yellow;
}

h1{
    font-family: Roboto;
    font-weight: 700;

    @media (max-width: 600px) {
    font-size: 20px;
    }
}
.borderr{
    /* border:  1px solid white; */
    border-radius: 50% ;
}

`