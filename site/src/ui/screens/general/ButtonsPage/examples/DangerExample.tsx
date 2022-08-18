import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button } from 'asimov-react-components'

export const DangerExample: FC = () => {
    return (
        <Example
            anchor="danger"
            title="Danger"
            description={''}
            sourceCode={`
import { Button } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary" danger>Primary</Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>Dashed</Button>
        <Button type="text" danger>Text</Button>
        <Button type="link" danger>Link</Button>
    </>
)
        `.trim()}
        >
            <ExampleItem>
                <Button type="primary" danger>Primary</Button>
            </ExampleItem>
            <ExampleItem>
                <Button danger>Default</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="dashed" danger>Dashed</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="text" danger>Text</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="link" danger>Link</Button>
            </ExampleItem>
        </Example>
    )
}
