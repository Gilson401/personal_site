import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
// import { Sharegroup } from '../../lib/util'

const Artigo12112020 = () => {

const canonical = "jest-mongodb-erros"
const title = "Aleluia! Consegui eliminar os erros de testes Jest com MongoDB"
const descriptConten = "Removendo os erros A worker process has failed to exit gracefully and has been force exited, Error: Status Code is 403 (MongoDB's 404)"

  return (
    <>
          <Head>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>

                <link rel="canonical" href={"https://gilsonpaulo.com.br/artigos/"+ canonical} />
                <title>{title}</title>
                <meta name="description" content={descriptConten} />
            </Head>

            <Container> 
            {/* <Sharegroup/> */}
                <br/>
<h1> 12/11/2020 - Resolvendo os erros de implementação de testes Jest + MongoDB. Aleluia!!! </h1>
<br/>
<p>Possivemente ao tentar implementar testes unitários em Jest numa api Node Express com banco de dados noSql MongoDB tenha se deparado com os seguintes erros: </p>

<p>"Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout”</p>
<p>"A worker process has failed to exit gracefully and has been force exited, ..."</p>
<p>"Error: Status Code is 403 (MongoDB's 404)"</p>

 
<p>Compartilho aqui como consegui resolver estes erros. Espero que ajude.</p>
<br/>
<p>Em seu package.json : </p>


<div className="codeblock">
{`//
  "scripts": {
    "test": "jest"
  }
  ...
  "jest": {
    "verbose": true,
    "preset": "@shelf/jest-mongodb"
  }
  ...
  "devDependencies": {
    "@shelf/jest-mongodb": "^1.2.3",
    "jest": "^26.6.3",
  }

`}
</div>
<br/>
<p>Na raiz do projeto , tenha um arquivo jest.config.js com </p>

<div className="codeblock">
{`
module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'node'
}

`}
</div>
<br/>
<p>Na raiz do projeto ,  jest.setup.js</p>

<div className="codeblock">
{`// Aqui redefine o tempo de timeout do jest/jasmine
jest.setTimeout(30000)
`}
</div>
<br/>
<p>Também na raiz do projeto,  jest-mongodb-config.js:</p>

<div className="codeblock">
{`
module.exports = {
    mongodbMemoryServerOptions: {
      instance: {
        dbName: 'jest'
      },
      binary: {
        version: '4.2.10', // Version of MongoDB -Verifique em seu mongo atlas qual é a versão de seu banco
        skipMD5: true
      },
      autoStart: false
    }
  };

`}
</div>
<br/>
<p>O globalConfig.json é criado e editado  automaticamente quando instalamos o @shelf/jest-mongodb</p>

<div className="codeblock">
{`
{"mongoUri":"mongodb://127.0.0.1:55519/jest?","mongoDBName":"jest"}
`}
</div>
<br/>
<p> Na raiz, test-setup.js </p>
<div className="codeblock">
{`//
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const config = require('config')
const db = config.get('mongoTestURI') //é a URI de seu banco de dados de testes 

module.exports = {
    /**seta as ações de beforeAll que conecta ao BD e afterAll que encerra o DB 
     * o parâmetro databaseName não é utilizado neste exemplo */
    setupDB (databaseName) {
        beforeAll(async () => {
            connectDB(db)
        });
  
        afterAll(async () => {
            mongoose.connection.close()
        });
    }
  }

`}
</div>

<br/>
<p>Os arquivos de testes (nome.test.js) devem chamar a configuração de conexão 
    com o banco de dados logo depois dos imports. Definimos a configuração no arquivo test-setup.js</p>
<div className="codeblock">
{`//
const get_max_order = require('../service/get_max_order')
const Content = require('../models/content');
const { setupDB } = require('../test-setup')

setupDB()

test('Should retrieve the max order of infos, banner or services', async () => {
    const content = await Content.findOne({})
    expect(get_max_order(content, 'infos')).toBe(1) //função testada
})

`}
</div>
<br/>
<p>Na pasta config, temos um arquivo com o nome test.json com o conteúdo sendo apenas {}. 
    Este arquivo carrega as configurações desejadas para algum ambiente. O Jest automaticamente muda o ambiente para test 
    e com isso o sistema procura um arquivo com o nome test.json na pasta config. Quando não encontra dá o aviso de erro 
    “WARNING: NODE_ENV value of 'test' did not match any deployment config file names.”
     Contudo este erro não atrapalha o teste. Neste exemplo não foi preciso ter conteúdo em test.json.</p>

     <br/>

<p>E o resultado :</p>

<div className=" centro boximages">
    <img className="responsive" src="/media/testesok.JPG" alt="texto alt" />
</div>

<br/>
<div id="fb-root"></div>

<div className="fb-comments" data-href={"https://gilsonpaulo.com.br/artigos/"+ canonical} data-numposts="5" data-width=""></div>


            </Container> 

            <style jsx>{`
            
            `}</style>
    </>
  )
}

export default Artigo12112020
