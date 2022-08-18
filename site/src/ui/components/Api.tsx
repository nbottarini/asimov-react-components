import React, { FC, ReactNode } from 'react'
import { Section } from '@/ui/components/Section'
import styled from 'styled-components'

export const Api: FC<Props> = (props) => (
    <_Section title="API" anchor="api">
        {props.children}
    </_Section>
)

const _Section = styled(Section)`
  table {
    overflow-x: auto;
  }
  
  tbody tr {
    transition: all 0.3s;

    &:hover {
      background: rgba(60, 90, 100, 0.1);
    }
  }
  
  tbody td {
    &:first-child {
      width: 18%;
      font-weight: bold;
      white-space: nowrap;
    }

    &:nth-child(2) {
      width: 52%;
      font-size: 12px;
    }

    &:nth-child(3) {
      width: 15%;
      font-size: 12px;
      color: rgb(196, 29, 127);
    }

    &:nth-child(4) {
      width: 15%;
      font-size: 12px;
    }
`

interface Props {
    children: ReactNode;
}
