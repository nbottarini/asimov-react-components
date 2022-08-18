import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button } from 'asimov-react-components'

export const DisabledExample: FC = () => {
    return (
        <Example
            anchor="disabled"
            title="Disabled"
            description={<>
                To mark a button as disabled, add the <code>disabled</code> property to the <code>Button</code>.
            </>}
            sourceCode={`
import { Button } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary" disabled>Primary(disabled)</Button>
        <Button disabled>Default(disabled)</Button>
        <Button type="dashed" disabled>Dashed(disabled)</Button>
        <Button type="text" disabled>Text(disabled)</Button>
        <Button type="link" disabled>Link(disabled)</Button>
        <Button danger disabled>Danger Default(disabled)</Button>
        <Button danger type="text" disabled>Danger Text(disabled)</Button>
        <Button type="link" danger disabled>Danger Link(disabled)</Button>
        <Button ghost disabled>Ghost(disabled)</Button>
    </>
)
        `.trim()}
        >
            <ExampleItem>
                <Button type="primary" disabled>Primary(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button disabled>Default(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="dashed" disabled>Dashed(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="text" disabled>Text(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="link" disabled>Link(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button danger disabled>Danger Default(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button danger type="text" disabled>Danger Text(disabled)</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="link" danger disabled>Danger Link(disabled)</Button>
            </ExampleItem>
            <ExampleItem style={{ backgroundColor: '#ccc', padding: 10 }}>
                <Button ghost disabled>Ghost(disabled)</Button>
            </ExampleItem>
        </Example>
    )
}
