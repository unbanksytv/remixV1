import Head from "next/head";
import tw from "tailwind-styled-components";

// Components
import Header from "../components/Header";
import FoundersMintPass from "../components/FoundersMintPass";
import Footer from "../components/Footer";

export default function MintPass() {
  return (
    <Container>
      <Head>
        <title>REMIX - A hommage to OG pixel art - Mumbai</title>
        <meta name="description" content="Made with love by 0x007" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MintPass />
      <Footer />
    </Container>
  )
}

const Container = tw.div`
 w-screen
 h-screen
 bg-gradient-color
 text-white
 px-7
 flex
 flex-col
 justify-between
`