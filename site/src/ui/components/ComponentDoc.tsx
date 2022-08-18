import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const ComponentDoc: FC<Props> = (props) => (
    <>
        <Title>{props.name}</Title>
        {props.children}
    </>
)

const Title = styled.h1`
  font-size: 35px;
`

interface Props {
    name: string
    children: ReactNode
}