import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const Section: FC<Props> = (props) => (
    <>
        {props.anchor && <a id={props.anchor}></a>}
        <Container className={props.className}>
            <Title>{props.title}</Title>
            {props.children}
        </Container>
    </>
)

const Title = styled.h2`
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0,0,0,.06);
`

const Container = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 16px;
  
  h2 { font-size: 24px; }
  
  h3 { font-size: 20px; }

  h4 { font-size: 18px; }

  *:not(pre) > code {
    margin: 0 1px;
    padding: 0.2em 0.4em;
    font-size: .9em;
    background: #f2f4f5;
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 3px;
  }

  table {
    margin: 16px 0;
    empty-cells: show;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  table th {
    color: #5c6b77;
    font-weight: 500;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.02);
  }

  table th,
  table td {
    padding: 12px 24px;
    text-align: left;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`

interface Props {
    className?: string
    anchor?: string
    title: string
    children: ReactNode
}