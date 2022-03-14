import React from 'react'

import styled, { keyframes } from 'styled-components'

const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 30px;
    height: 30px;
    background-image: ${({ theme }) => theme.palette.accent};
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  }
`
const FirstBounce = styled.div`
  ${Spinner} & {
    animation-delay: -0.32s;
  }
`

const SecondBounce = styled.div`
  ${Spinner} & {
    animation-delay: -0.16s;
  }
`

export const Loader = ({ className }: { className?: string }) => (
  <Spinner className={className}>
    <FirstBounce />
    <SecondBounce />
    <div />
  </Spinner>
)
