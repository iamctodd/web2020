import React from "react"
import styled from 'styled-components'
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper> 
          <TextWrapper>
            <Title>C. Todd Lombardo</Title>
            <Description>Data nerd. Design Geek. Product fanatic!</Description>
          </TextWrapper>
        </ContentWrapper>
    </Wrapper>
    )
}

export default HeroSection

const Wrapper = styled.div `
  background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`
const ContentWrapper = styled.div `
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
const TextWrapper = styled.div `
  max-width: 360px;
  display:grid;
  gap: 30px;
`
const Description = styled(MediumText)``

const Title = styled(H1)`
  color: white;
`
