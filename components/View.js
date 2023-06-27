import tw from "tailwind-styled-components";
import { useEditionDrop, MediaRenderer, useNFT } from "@thirdweb-dev/react";
import { Button } from "./Button";

const View = () => {
  const nftCollection = useEditionDrop('0x7B4603c65909565aDdc91BB4B81696009b8847E4');
  const {
    data: nft,
    isLoading,
    error,
  } = useNFT(nftCollection, 0)

  return (
    !isLoading && 
    <Container>
      <VideoContainer>
        <MediaRenderer
          src={nft?.metadata.image}
          alt={nft?.metadata.name}
        />
      </VideoContainer>
      <TitleContainer>
        <Title>
          {nft?.metadata.name}
        </Title>
      </TitleContainer>
      <DescriptionContainer>
        {nft?.metadata.description}
      </DescriptionContainer>
      <ButtonContainer>
        <GhostButtonLink href="https://rarible.com/collection/0x7B4603c65909565aDdc91BB4B81696009b8847E4/items" target="_blank">View on Rarible</GhostButtonLink>
        <GhostButtonLink href="https://opensea.io/assets/ethereum/0x7B4603c65909565aDdc91BB4B81696009b8847E4/0" target="_blank">View on Open Sea</GhostButtonLink>
      </ButtonContainer>
    </Container>
  )
}

export default View

const VideoContainer = tw.div`
 mt-12
 max-w-screen-lg
`

const Container = tw.div`
 flex
 flex-col
 items-center
`

const TitleContainer = tw.div`
 text-white
 flex
`

const DescriptionContainer = tw.div`
 flex
 max-w-screen-lg
 justify-center
 text-center
 text-lg
 font-bold
`

const Title = tw.h2`
 uppercase
 text-3xl
 italic
 font-bold
 mt-3
`

const ButtonContainer = tw.div`
  flex
`

const SolidButtonLink = tw.a`
 flex
 justify-center
 items-center
 bg-[#f9d500]
 hover:bg-white
 transition-all
 text-black
 font-bold
 py-2
 px-4
 rounded
 uppercase
 h-14
 mx-3
 my-6
`

const GhostButtonLink = tw(SolidButtonLink)`
 bg-black
 text-[#f9d500]
 border-2
 border-[#f9d500]
 hover:bg-[#f9d500]
 hover:text-black
`
