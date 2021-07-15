
import { Container, Row, Col, Spinner } from 'react-bootstrap'
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts. You can use any data fetching library
    const res = await fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    const res2 = await fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    const posts = await res.json()
    const posts2 = await res2.json()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
            posts2,
        },
    }
}

// posts will be populated at build time by getStaticProps()
function Testes({ posts, posts2 }) {
    return (

        <Container>
            <Row>
                <Col>
                <p>Testando getStaticProps</p>
                <p>O Site é estático mas pode fazer data fetch no servidor e entregar os dados novos? 
                    <p>Se funciona, as mensagens abaixo devem mudar a cada refresh na versão de produção</p>
                </p>
                    <h3>{posts.joke}</h3>
                    <hr />
                    <h3>{posts2.joke}</h3>

                </Col>
            </Row>
        </Container>
    )
}


export default Testes