import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button } from 'asimov-react-components'

export const TypeExample: FC = () => (
    <Example
        anchor="type"
        title="Type"
        description={<>
            There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button,
            <code>text</code> button and <code>link</code> button.
        </>}
        sourceCode={`
import { Button } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </>
)
    `.trim()}
    >
        <ExampleItem>
            <Button type="primary">Primary Button</Button>
        </ExampleItem>
        <ExampleItem>
            <Button>Default Button</Button>
        </ExampleItem>
        <ExampleItem>
            <Button type="dashed">Dashed Button</Button>
        </ExampleItem>
        <ExampleItem>
            <Button type="text">Text Button</Button>
        </ExampleItem>
        <ExampleItem>
            <Button type="link">Link Button</Button>
        </ExampleItem>
    </Example>
)
