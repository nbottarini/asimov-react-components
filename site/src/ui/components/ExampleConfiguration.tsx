import { Divider } from 'asimov-react-components'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const ExampleConfiguration: FC<Props> = (props) => (
    <>
        <Container>
            {props.children}
        </Container>
        <Divider />
    </>
)

const Container = styled.div`
  background-color: #fffbe6;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #fff1b8;
`

interface Props {
    children: ReactNode
}
