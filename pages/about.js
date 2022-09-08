import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Parallax } from 'react-parallax'

const Hero = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: black;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Container = styled.div`
    --max-width: 1110px;
    --padding: 1rem;
    width: min(var(--max-width), 100% - var(--padding));
    margin-inline: auto;
`

export default function Home() {
    return (
        <>
            <Head>
                <title>TEDxUCSD</title>
                <meta name="description" content="About Us" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar bg="white" />

            <div style={{ marginTop: '80px', backgroundColor: 'white' }}>
                <Parallax bgImage="Team.JPG" strength={400}>
                    <div style={{ height: '40vh' }}>
                    </div>
                </Parallax>

                <Container>
                    <div>
                    </div>

                    <div style={{ height: '100vh' }}></div>
                </Container>

                {/* <Hero>
                <Banner src="Team.JPG" alt="TEDxUCSD Team Photo" />
            </Hero> */}
                <Footer />
            </div>


            {/* Icons */}
            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </>
    )
}
