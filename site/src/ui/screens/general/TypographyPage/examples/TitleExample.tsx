import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Typography } from 'asimov-react-components'

const { Title } = Typography

export const TitleExample: FC = () => (
    <Example
        anchor="title"
        title="Title"
        description={<>
            Display title in different levels.
        </>}
        sourceCode={`
import Title from 'antd/lib/typography/Title'

const App = () => (
    <>
        <Title>h1. Title 1</Title>
        <Title level={2}>h2. Title 2</Title>
        <Title level={3}>h3. Title 3</Title>
        <Title level={4}>h4. Title 4</Title>
        <Title level={5}>h5. Title 5</Title>
    </>
)
    `.trim()}
    >
        <ExampleItem>
            <Title>h1. Title 1</Title>
        </ExampleItem>
        <ExampleItem>
            <Title level={2}>h2. Title 2</Title>
        </ExampleItem>
        <ExampleItem>
            <Title level={3}>h3. Title 3</Title>
        </ExampleItem>
        <ExampleItem>
            <Title level={4}>h4. Title 4</Title>
        </ExampleItem>
        <ExampleItem>
            <Title level={5}>h5. Title 5</Title>
        </ExampleItem>
    </Example>
)
