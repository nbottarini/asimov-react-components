import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button } from 'asimov-react-components'

export const GhostExample: FC = () => {
    return (
        <Example
            anchor="ghost"
            title="Ghost buttons"
            description={<>
                <code>ghost</code> property will make button's background transparent, it is commonly used in colored background.
            </>}
            sourceCode={`
import { Button } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary" ghost>Primary</Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="primary" danger ghost>Danger</Button>
    </>
)
        `.trim()}
        >
            <ExampleItem style={{ backgroundColor: '#ccc', padding: 10 }}>
                <Button type="primary" ghost>Primary</Button>
            </ExampleItem>
            <ExampleItem style={{ backgroundColor: '#ccc', padding: 10 }}>
                <Button ghost>Default</Button>
            </ExampleItem>
            <ExampleItem style={{ backgroundColor: '#ccc', padding: 10 }}>
                <Button type="dashed" ghost>Dashed</Button>
            </ExampleItem>
            <ExampleItem style={{ backgroundColor: '#ccc', padding: 10 }}>
                <Button type="primary" danger ghost>Danger</Button>
            </ExampleItem>
        </Example>
    )
}
