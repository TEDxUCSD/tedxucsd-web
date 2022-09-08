import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Columns, Container } from '../components/Container.styles'
import { Paragraph, SectionHeader, Sub } from '../components/Text.styles'
import MailingList from '../components/MailingList'

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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
      <Navbar bg="black" />
      <main>
        <div style={{ marginTop: '80px' }}>
          <Hero>
            <Banner src="TEDxHero.png" alt="Coming Soon" />
          </Hero>
          <div style={{ backgroundColor: 'white' }}>
            <Container>
              <Columns>
                <div>
                  <SectionHeader>2022 Popup Highlights</SectionHeader>
                  <Paragraph>
                    Take a look back at our pop up event that was located at Sixth Lawn intended to promote our 2022 Main Conference: Sixth Sense. The first of its kind, this popup featured a 20 ft painting panel and experience booths that explored the different sense and reimagined the way we interact with our environment.
                  </Paragraph>
                </div>
                <div>
                  <ReactPlayer url="https://youtu.be/QXgPSJWQBaE" />
                </div>
              </Columns>
            </Container>
          </div>
          <div style={{ backgroundColor: '#eeeeee' }}>
            <Container>
              <SectionHeader>What is TED<span style={{ color: "#e62b1e" }}>x</span></SectionHeader>
              <Sub>IDEAS WORTH SPREADING</Sub>
              <Paragraph>
                <span style={{ color: "#e62b1e", fontWeight: 500 }}>x</span> = independently organized event
              </Paragraph>
              <Paragraph>
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
              </Paragraph>
            </Container>
            <MailingList />
          </div>
          <Footer />
        </div>
      </main>



      {/* Icons */}
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
