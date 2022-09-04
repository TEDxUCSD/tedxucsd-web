import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import styled from 'styled-components';

const Hero = styled.div`
  height: 70vh;
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

export default function Home() {
  return (
    <>
      <Head>
        <title>TEDxUCSD</title>
        <meta name="description" content="Ideas worth sharing" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero>
        <Banner src="TEDxHero.png" alt="Coming Soon" />
      </Hero>
      <Footer />

    </>
  )
}
