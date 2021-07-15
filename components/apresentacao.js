import React from 'react'
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

const Apresentacao = () => {
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
                <Col className="d-flex"  xs={12} md={8} >
                <div className='my-auto'>
                    <h1>
                        Olá, eu sou Gilson Paulo. Eu sou desenvolvedor web full-stack MERN.
                    </h1>
                    <br />
                    <h5>
                        Eu faço <span>sites e sistemas online</span> para pessoas e empresas.  Trabalho com 
                        <span> MongoDB, ExpressJS, React e NodeJS</span>.
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
                        Porque fazer um site não é apenas codificar e colocar a página no ar. Acredito que é preciso entender a necessidade do cliente
                        e entregar o resultado que supere suas expectativas.
                    </p>
                    <p>
                        Um outro diferencial são as tecnologias que eu utilizo: MongoDB, ExpressJS, React e NodeJS. Consideradas mais
                        modernas em suas áreas, elas dão flexibilidade ao desenvolvedor.
                    </p>
                    </div>
                </Col>
            </Row>

            <Row xs={6} md={12}  >
                <Col className="d-flex " xs={6}  md={3}>
                    <img
                        className="d-block w-100 my-auto"
                        src={'/media/mongow.jpg'}
                        alt={'mongo.png'}
                    />
                </Col>
                <Col className="d-flex " xs={6}  md={3}>
                    <img
                        className=" w-100 my-auto"
                        src={'/media/expressw.jpg'}
                        alt={'express.png'}
                    />
                </Col>
                <Col className="d-flex " xs={6}  md={3}>
                    <img
                        className="d-block w-100 my-auto "
                        src={'/media/reactw.jpg'}
                        alt={'react.png'}
                    />
                </Col>
                <Col className="d-flex " xs={6}  md={3}>
                    <img
                        className="d-block w-100 my-auto"
                        src={'/media/nodew.jpg'}
                        alt={'node.png'}
                    />
                </Col>

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