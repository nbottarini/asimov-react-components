import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button } from 'asimov-react-components'

export const BlockExample: FC = () => {
    return (
        <Example
            anchor="block"
            title="Block"
            description={
                <>
                    <code>block</code> property will make the button fit to its parent width
                </>
            }
            sourceCode={`
import { Button } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary" block>Primary</Button>
        <Button block>Default</Button>
        <Button type="dashed" block>Dashed</Button>
        <Button type="link" block>Link</Button>
    </>
)
        `.trim()}
        >
            <div style={{ width: 300, padding: 10, borderWidth: 1, borderStyle: 'solid', borderColor: '#666' }}>
                <ExampleItem>
                    <Button type="primary" block>Primary</Button>
                </ExampleItem>
                <ExampleItem>
                    <Button block>Default</Button>
                </ExampleItem>
                <ExampleItem>
                    <Button type="dashed" block>Dashed</Button>
                </ExampleItem>
                <ExampleItem>
                    <Button type="link" block>Link</Button>
                </ExampleItem>
            </div>
        </Example>
    )
}
