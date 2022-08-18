import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Affix } from 'asimov-react-components'

export const Toc: FC<Props> = (props) => (
    <Container offsetTop={16}>
        <ul>
            {props.children}
        </ul>
    </Container>
)

const Container = styled(Affix)`
  position: absolute;
  top: 8px;
  right: 20px;
  width: 150px;
  
  ul {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    font-size: 12px;
    margin: 0;
    padding: 8px 16px;
    list-style: none;
  }
  
  li {
    margin: 0;
    padding: 0;
    line-height: 2;
    
    a {
      color: #000000d9;
      display: block;
      overflow: hidden;
      
      &:hover {
        color: rgb(24, 144, 255);
      }
    }
  }
`

interface Props {
    children: ReactNode
}
