import Link from 'next/link'
import React from 'react'
import { Col, Container, Row }from 'react-bootstrap'

const Artigos = () => {


    return (
        <>
            <Container>
                <Row>
                    <div className='responsive centro'>
                        <h3> Artigos </h3>
                    </div>
                </Row>

                <Row>

                    <Col>
                        {/* <div className="vl"> */}
                        <p> 17/11/2020 -
            <Link href="/artigos/testes-integracao-jest-express-mongodb"> Artigo: Algumas observações sobre testes de integração com Jest, Express e Mongodb. </Link>  </p>

                            <p> 14/11/2020 -
            <Link href="/artigos/formulario-de-contato-react-sem-back-end"> Artigo: Formulário de Contato React sem Back End. </Link>  </p>

                            <p> 12/11/2020 -
            <Link href="/artigos/jest-mongodb-erros"> Artigo: Resolvendo os erros de implementação de testes Jest + MongoDB. </Link>  </p>

                            <p> 10/11/2020 -
            <Link href="/artigos/cookies-vs-local-storage"> Artigo: Cookies vs local storage </Link>  </p>

                            <p> 04/11/2020 -
            <Link href="/artigos/arredondar-decimal-javascript"> Artigo: Arredondar números decimais em JavaScript </Link>  </p>
                        {/* </div> */}
                    </Col>

                    {/* <Col> <div className="vl"> </div>       </Col>

                    <Col>

                    </Col>
 */}


                </Row>
            </Container>
            <style jsx>{`
            .vl{
                height:100%;
                border-right: solid 1px red;
            }
            `}</style>

        </>
    )
}

export default Artigos
