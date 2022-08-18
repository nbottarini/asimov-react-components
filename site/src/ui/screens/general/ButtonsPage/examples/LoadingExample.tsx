import React, { FC, useState } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button, PoweroffOutlined } from 'asimov-react-components'

export const LoadingExample: FC = () => {
    const [loadings, setLoadings] = useState<boolean[]>([])

    const enterLoading = (index: number) => {
        setLoadings(prevLoadings => {
            const newLoadings = [...prevLoadings]
            newLoadings[index] = true
            return newLoadings
        })

        setTimeout(() => {
            setLoadings(prevLoadings => {
                const newLoadings = [...prevLoadings]
                newLoadings[index] = false
                return newLoadings
            })
        }, 6000)
    }

    return (
        <Example
            anchor="loading"
            title="Loading"
            description={<>
                A loading indicator can be added to a button by setting the <code>loading</code> property on the <code>Button</code>.
            </>}
            sourceCode={`
import { Button, PoweroffOutlined } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary" loading>Loading</Button>
        
        <Button type="primary" size="small" loading>Loading</Button>
        
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        
        <Button type="primary" loading={isLoading} onClick={() => doSomething()}>
            Click me!
        </Button>
        
        <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={isLoading}
            onClick={() => doSomething()}
        >
            Click me!
        </Button>
        
        <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={isLoading}
            onClick={() => doSomething()}
        />
    </>
)
        `.trim()}
        >
            <ExampleItem>
                <Button type="primary" loading>Loading</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" size="small" loading>Loading</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                    Click me!
                </Button>
            </ExampleItem>
            <ExampleItem>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loadings[1]}
                    onClick={() => enterLoading(1)}
                >
                    Click me!
                </Button>
            </ExampleItem>
            <ExampleItem>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loadings[2]}
                    onClick={() => enterLoading(2)}
                />
            </ExampleItem>
        </Example>
    )
}
