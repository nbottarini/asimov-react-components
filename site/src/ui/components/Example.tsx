import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Section } from '@/ui/components/Section'

export const Example: FC<Props> = (props) => (
    <Section title={props.title} anchor={props.anchor}>
        <Description>{props.description}</Description>
        <Content>
            <Preview>{props.children}</Preview>
            <SyntaxHighlighter language="typescript" style={dracula}>
                {props.sourceCode}
            </SyntaxHighlighter>
        </Content>
    </Section>
)

const Description = styled.div`
    margin-top: 10px;
    margin-bottom: 50px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  > * {
    width: 50%;
  }
`

const Preview = styled.div``

export const ExampleItem = styled.div`
  margin-bottom: 20px;
`

interface Props {
    anchor?: string
    children: ReactNode
    title: string
    description: string|ReactNode
    sourceCode: string
}
