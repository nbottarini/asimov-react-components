import React, { FC } from 'react'
import { Button, Dropdown, Menu } from 'asimov-react-components'
import { Example, ExampleItem } from '@/ui/components/Example'

export const MultipleExample: FC = () => {
    const menu = (
        <Menu
            items={[
                { key: '1', label: '1st item' },
                { key: '2', label: '2nd item' },
                { key: '3', label: '3rd item' },
            ]}
        />
    )

    return (
        <Example
            anchor="multiple"
            title="Multiple buttons"
            description={<>
                If you need several buttons, we recommend that you use 1 primary button + n secondary buttons,
                and if there are more than three operations, you can group some of them into <code>Dropdown.Button</code>.
            </>}
            sourceCode={`
import { Button, Dropdown, Menu } from 'asimov-react-components'

const menu = (
    <Menu
        items={[
            { key: '1', label: '1st item' },
            { key: '2', label: '2nd item' },
            { key: '3', label: '3rd item' },
        ]}
    />
)

const App = () => (
    <>
        <Button type="primary">primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
    </>
)
        `.trim()}
        >
            <ExampleItem>
                <Button type="primary" style={{ marginRight: 8 }}>primary</Button>
                <Button style={{ marginRight: 8 }}>secondary</Button>
                <Dropdown.Button overlay={menu}>actions</Dropdown.Button>
            </ExampleItem>
        </Example>
    )
}
