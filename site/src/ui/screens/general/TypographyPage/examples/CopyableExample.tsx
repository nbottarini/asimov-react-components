import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Typography, SmileFilled, SmileOutlined } from 'asimov-react-components'

const { Paragraph } = Typography

export const CopyableExample: FC = () => (
    <Example
        anchor="copyable"
        title="Copyable"
        description={<>
            Provide capacity to copy text.
        </>}
        sourceCode={`
import { Typography, SmileFilled, SmileOutlined } from 'asimov-react-components'

const { Paragraph } = Typography

const App = () => (
    <>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        <Paragraph
            copyable={{
                icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                tooltips: ['click here', 'you clicked!!'],
            }}
        >
            Custom Copy icon and replace tooltips text.
        </Paragraph>
        <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
    </>
)
    `.trim()}
    >
        <ExampleItem>
            <Paragraph copyable>This is a copyable text.</Paragraph>
        </ExampleItem>
        <ExampleItem>
            <Paragraph copyable={{ text: 'Hello!' }}>Replace copy text.</Paragraph>
        </ExampleItem>
        <ExampleItem>
            <Paragraph
                copyable={{
                    icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                    tooltips: ['click here', 'you clicked!!'],
                }}
            >
                Custom Copy icon and replace tooltips text.
            </Paragraph>
        </ExampleItem>
        <ExampleItem>
            <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
        </ExampleItem>
    </Example>
)
