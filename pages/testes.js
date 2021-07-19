
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import styled from 'styled-components'



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

import useSWR from 'swr'
function Testes({ posts, posts2 }) {

    // const fetcher = url => fetch(url).then(res => res.json())
    // const randn = 'https://localhost:3005/opcoesatm'
    // const { data, error } = useSWR(randn, fetcher)

    // const FetcheUseSWR = () => {

    //     return (
    //         <>
    //             {error ? <div>failed to load</div> : ""}
    //             {!data ? <div>loading...</div> :
    //                 <Row sm={4}>
    //                     {data.map((item, key) => <Col key={key}> {item.optTicker} - {item.data}</Col>)}
    //                 </Row>
    //             }
    //         </>
    //     )
    // }

const showDetails =(e) =>{
    
    console.log(e)
}
    return (
        <TestContainer onClick={showDetails}>

 
        </TestContainer>
                )
}

                export default Testes

                const TestContainer = styled(Container)`
  
                `