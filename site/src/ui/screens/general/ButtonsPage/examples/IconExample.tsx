import React, { FC } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button, Tooltip, SearchOutlined } from 'asimov-react-components'

export const IconExample: FC = () => (
    <Example
        anchor="icon"
        title="Icon"
        description={<>
            <p>
                <code>Button</code> components can contain an <code>Icon</code>.
                This is done by setting the <code>icon</code> property or placing an <code>Icon</code> component within
                the <code>Button</code>.
            </p>
            <p>
                If you want specific control over the positioning and placement of the <code>Icon</code>, then that
                should be done by placing the <code>Icon</code> component within the <code>Button</code> rather than
                using the <code>icon</code> property.
            </p>
        </>}
        sourceCode={`
import { Button, Tooltip, DownloadOutlined } from 'asimov-react-components'

const App = () => (
    <>
        <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        
        <Button type="primary" shape="circle">
            A
        </Button>
        
        <Button type="primary" icon={<SearchOutlined />}>
            Search
        </Button>
        
        <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        
        <Button icon={<SearchOutlined />}>Search</Button>
        
        <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        
        <Button type="dashed" icon={<SearchOutlined />}>
            Search
        </Button>
        
        <Button icon={<SearchOutlined />} href="https://www.google.com" />
        
        <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
    
        <Button type="primary" icon={<SearchOutlined />} size="large">
            Search
        </Button>
    </>
)
    `.trim()}
    >
        <ExampleItem>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
        </ExampleItem>
        <ExampleItem>
            <Button type="primary" shape="circle">
                A
            </Button>
        </ExampleItem>
        <ExampleItem>
            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>
        </ExampleItem>
        <ExampleItem>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
        </ExampleItem>
        <ExampleItem>
            <Button icon={<SearchOutlined />}>Search</Button>
        </ExampleItem>
        <ExampleItem>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
        </ExampleItem>
        <ExampleItem>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
        </ExampleItem>
        <ExampleItem>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </ExampleItem>
        <ExampleItem>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
        </ExampleItem>
        <ExampleItem>
            <Button type="primary" icon={<SearchOutlined />} size="large">
                Search
            </Button>
        </ExampleItem>
    </Example>
)
