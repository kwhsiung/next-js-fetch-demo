import styled from 'styled-components'
import breakpoints from '../util/breakpoints'

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  width: 100%;
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.xl}px) {
    width: 320px;
    padding: 16px 24px 24px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    height: 100%;
    justify-content: space-between;
  }
`
const Title = styled.h1`
  font-size: 16px;
  line-height: 150%;
  color: black;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 20px;
  }
`
const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: 0.5px;
  margin: 8px 0 0 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 20px;
  }
`

export default function Post({ id, title, body }) {
  return (
    <Wrapper>
      <Title>
        {id}. {title}
      </Title>
      <Paragraph>{body}</Paragraph>
    </Wrapper>
  )
}
