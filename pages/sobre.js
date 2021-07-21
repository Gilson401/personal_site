import React from 'react'
import styled from 'styled-components';
import { Carousel, Col, Row, Container, Table} from 'react-bootstrap'
const Sobre = () => {


    return (

        <StContainer>
<h3>Conheça um pouco mais sobre mim.</h3>
<br/>
            <Row>
                <Col>
                    <p>
                        Profissional com 16 anos de carreira na área de logística de combustíveis da Br Distribuidora, em transição de para área de Tecnologia,
                        com curso Bootcamp MERN concluído no Instituto Infnet de Tecnologia. Tenho vários projetos publicados na área,
                        aplicações web utilizando REACT/NextJS, MONGODB, REDUX, HTML, CSS, JAVASCRIPT para projetos do curso e projetos  pessoais.
                    </p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col className='oeste'>
                    <div>
                        <p>Na minha experiência na Br fui apresentado ao mundo da programação por meio do VBA para Excel</p>
                        <p>
                            Segundo lugar no programa Talento GLOG 2015 pelo desenvolvimento da planilha de numeração de processos.
                            Trata-se de uma ferramenta desenvolvida em excel com macros de VBA. Esta planilha possui uma gama de “features” as
                            quais incluem conexão com banco de dados access via comandos sql, edição de minutas de contrato em word, consumo de web-services.</p>
                    </div>
                </Col>

                <Col sm={4}>
                    <img className="responsive hidesmall"
                        src={'/media/talentoglog.jpg'}
                        alt={'talento glog'}
                    />
                </Col>

            </Row>

            <br/>
            {/* segundo */}
            <Row>

                <Col sm={4}>
                    <img className="responsive hidesmall"
                        src={'/media/batalha.jfif'}
                        alt={'talento glog'}
                    />
                </Col>

                <Col className='leste'>
                    <div>
                        <p>Inicialmente programar era um hobby para mim. </p>
                        <p>
                            Antes do VBA eu fazia algumas coisas em programação. Aprendi sozinho a IDE Unity3d pois queria
                            aprender como fazer jogos para celular.
                            <br />
                            Publiquei jogos na loja de apps do Google como o Militonto (game com sátira política), Matemática (jogo educativo)
                            Palpite (gerador de números aleatórios).
                        </p>
                    </div>
                </Col>



            </Row>
            <br/>
            {/* terceiro */}
            <Row >
                <Col className='oeste'>
                    <div>
                        <p> No primeiro semestre de 2020 iniciei meus estudos na stack MERN no instituto Infnet de Tecnologia.
                            Desenvolvi e plubliquei vários projetos para o curso. Também fiz alguns projetos pessoais como o site da consluora Daniela Nascimento,
                            projetos pessoais voltados para investimentos na bolsa. No curso eu aprendi:
                        </p>
                            <Table  borderless>
                                <tr>
                                   
                                </tr>
                                <tr>
                                    <td>Javascript,  CSS, HTML</td>
                                    <td>NodeJs</td>
                                    <td>Redux</td>
                                </tr>

                                <tr>
                                    <td>Mongodb Database</td>
                                    <td>Servidor ExpressJs</td>
                                    <td>GitHub e GitLab</td>
                                </tr>


                                <tr>
                                    <td>Amazon S3</td>
                                    <td>Bootstrap</td>
                                    <td>Testes JEST</td>
                                </tr>

                                <tr>
                                    <td>ReactJS</td>
                                    <td>Postmann</td>
                                    <td>Autenticação JWT</td>
                                </tr>

                            </Table>


                        
                    </div>
                </Col>

                <Col className='leste' sm={4}>
                    <img className="responsive hidesmall"
                        src={'/media/infnet.png'}
                        alt={'talento glog'}
                    />
                </Col>

            </Row>

            {/* quarto */}
            <br/>
            <Row>

                <Col sm={4}>
                    <img className="responsive hidesmall"
                        src={'/media/arquitetarDrone.JPG'}
                        alt={'talento glog'}
                    />
                </Col>

                <Col className='leste'>
                    <div>
                        
                        <p>
                            Meu trabalho mais recente é o site institucional da <a href="https://arquitetardrone.com.br/" target="_blank" > Arquitetar Drone</a>. O desenho foi feito por 
                            <a href="https://kindesigner.com/" target="_blank" > Kin Brand</a>. Utiliza o framework NextJS.
                        </p>
                    </div>
                </Col>
            </Row>
        </StContainer>
    )
}


export default Sobre
const StContainer = styled(Container)`

.tabela{
    width: 100%;
}

td{
    color:white;
}

a{
    font-family:Roboto !important;
}

.xcontainer {
  position: relative;
  width: 100%;
  border: 1px red solid;
  height: auto;
  background: url(${props => props.imagem || 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'});
  background-size:auto ;
}

.image {
  display: block;
  width: 100%;
  height: 230px;
  border: 3px blue solid;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  /* background-color: #008CBA; */
  background: ${props => props.gradiente};
  /* background: rgb(249,128,1); */
/* background: -moz-linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* background: -webkit-linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* background: linear-gradient(9deg, rgba(249,128,1,0.79) 28%, rgba(254,252,252,0) 75%); */
/* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f98001",endColorstr="#fefcfc",GradientType=1); */
}

.xcontainer:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

`