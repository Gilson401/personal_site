import React from 'react'
import styled from 'styled-components';
import { Col, Row, Container, Table } from 'react-bootstrap'
const Sobre = () => {


    return (

        <StContainer>
            <h3>Conheça um pouco mais sobre mim.</h3>
            <br />

            <Row>


                <Col>
                    <p> Desde agosto de 2021 sou parte do time de desenvolvedores front-end da   <a className="image " href="https://www.investfy.com/" target="_blank" >Investfy</a>.  Lá utilizo o framework
                        <a href="https://vuejsbr-docs-next.netlify.app/" target="_blank" > Vuejs </a>

                        e a biblioteca de estilo  <a href="https://tailwindcss.com/" target="_blank" > Tailwind </a>. Lá adquiri e aplico conhecimentos de <span className="underline">métodos ágeis e clean code</span>. 

                    </p>
                </Col>

                <Col sm={4}>

                    <div className="centro espaco-igual-envolto">
         
                        <img className="image"
                            src={'https://vuejsbr-docs-next.netlify.app/logo.png'}
                            alt={'Ify'}
                        />
                        <img className="image"
                            src={'https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.43c02f69bf.png'}
                            alt={'Tailwind'}
                        />
                    </div>
                </Col>

            </Row>
            <br />
            <Row>
                <Col>
                <h4>Voltando um pouco no meu histórico. </h4>
                    <p>
                        Profissional com 16 anos de carreira na área de logística de combustíveis da Br Distribuidora, em transição de para área de Tecnologia,
                        com curso Bootcamp MERN concluído no Instituto Infnet de Tecnologia. Tenho vários projetos publicados na área,
                        aplicações web utilizando REACT/NextJS, MONGODB, REDUX, HTML, CSS, JAVASCRIPT para projetos do curso e projetos  pessoais.
                    </p>
                </Col>
            </Row>

            
            <br />
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
                    <img className="responsive "
                        src={'/media/talentoglog.jpg'}
                        alt={'talento glog'}
                    />
                </Col>

            </Row>

            <br />

            <Row>

                <Col sm={4}>
                    <img className="responsive "
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
                            Publiquei jogos na loja de apps do Google como o Militonto (game com sátira política), Matemática (jogo educativo) e
                            Palpite (gerador de números aleatórios).
                            <br/>
                            Estes jogos foram feitos utilizando a linguagem c#.
                        </p>
                    </div>
                </Col>
            </Row>
            <br />

            <Row >
                <Col className='oeste'>
                    <div>
                        <p> No primeiro semestre de 2020 iniciei meus estudos na stack MERN no instituto Infnet de Tecnologia.
                            Desenvolvi e plubliquei vários projetos para o curso. Também fiz alguns projetos pessoais como o site da consluora Daniela Nascimento,
                            projetos pessoais voltados para investimentos na bolsa. No curso eu aprendi:
                        </p>
                        <Table borderless>
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
                    <img className="responsive "
                        src={'/media/infnet.png'}
                        alt={'talento glog'}
                    />
                </Col>

            </Row>

            <br />
            <Row>

                <Col sm={4}>
                    <img className="responsive "
                        src={'/media/arquitetarDrone.JPG'}
                        alt={'talento glog'}
                    />
                </Col>

                <Col className='leste'>
                    <div>

                        <p>
                            Meu trabalho freelancer mais recente é o site institucional da <a href="https://arquitetardrone.com.br/" target="_blank" > Arquitetar Drone</a>. O desenho foi feito por
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
.underline{
    text-decoration: solid underline #fb8500;
}

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
  /* display: block; */
  width: 33%;
  margin-right: 5px;
  height: 110px;
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