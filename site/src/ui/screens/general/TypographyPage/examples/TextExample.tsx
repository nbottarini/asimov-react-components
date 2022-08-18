import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Typography } from 'asimov-react-components'

const { Text } = Typography

export const TextExample: FC = () => (
    <Example
        anchor="text"
        title="Text"
        description={<>
            Provides multiple types of text.
        </>}
        sourceCode={`
import { Typography } from 'asimov-react-components'
const { Text } = Typography

const App = () => (
    <>
        <Text>Some text (default)</Text>
        <Text type="secondary">Some text (secondary)</Text>
        <Text type="success">Some text (success)</Text>
        <Text type="warning">Some text (warning)</Text>
        <Text type="danger">Some text (danger)</Text>
        <Text disabled>Some text (disabled)</Text>
        <Text mark>Some text (mark)</Text>
        <Text code>Some text (code)</Text>
        <Text keyboard>Some text (keyboard)</Text>
        <Text underline>Some text (underline)</Text>
        <Text delete>Some text (delete)</Text>
        <Text strong>Some text (strong)</Text>
        <Text italic>Some text (italic)</Text>
    </>
)
    `.trim()}
    >
        <ExampleItem>
            <Text>Some text (default)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text type="secondary">Some text (secondary)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text type="success">Some text (success)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text type="warning">Some text (warning)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text type="danger">Some text (danger)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text disabled>Some text (disabled)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text mark>Some text (mark)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text code>Some text (code)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text keyboard>Some text (keyboard)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text underline>Some text (underline)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text delete>Some text (delete)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text strong>Some text (strong)</Text>
        </ExampleItem>
        <ExampleItem>
            <Text italic>Some text (italic)</Text>
        </ExampleItem>
    </Example>
)
