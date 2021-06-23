import React from 'react';
// import avatar from '../../../src/assets/'
import { Button, Container, Row, Col } from 'react-bootstrap'
function Header(props) {


    return (
        <>
            <header className="meuHeader">

                <img src="/media/gplogo.jpeg" className="headerAvatar " alt="avatar" />


                <Container>
                <Row xs="12" sm="12" md="12">
                    <Col xs="10">
                    <div className=" title">
                                Desenvolvedor Web MongoDB, ExpressJS, ReactJS, NodeJS.
                     </div>
                    </Col>
                    

                    <Col xs="1">
                    <div className="user">
                              {props.botao }
                    </div>
                    </Col>

                </Row>
            </Container>

            </header>


            <style jsx>{
                `

            .headerAvatar{
                height: 100%;
                width: 100px;
            }

            header{
                height: 100px;
                display: flex;
                align-items: center;
            }
            .meuHeader {
                background-color: slategray;
                display: flex;
                font-size: 20px;
                
                color: white;
                background: rgb(20,26,40);
                background: linear-gradient(90deg, rgba(20,26,40,1) 0%, rgba(56,78,136,1) 53%, rgba(112,128,144,1) 100%);
            }

             .title { 
                display: flex;
                flex:1;
                height: 50px;
                align-items: center;
                padding-left: 12px;
                font-size: 1.2rem;
            }
                
                .user {
                   min-width: 1%;
                  text-align: center;
                  vertical-align: middle ;
                  display: flex;
                  height: 50px;
                  align-items: center;
                  justify-content: flex-end;
                //   font-size: 20px;
                  word-wrap: normal;
                }
                
            
            `

            }</style>
        </>
    );
}
export default Header;


const esilo_header = `

.headerAvatar{
    height: 100%;
    width: 100px;
}
.meuHeader {
    background-color: slategray;
    display: flex;
    font-size: 30px;
    height: 100px;
    color: white;
  }

`