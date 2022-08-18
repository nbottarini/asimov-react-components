import React, { FC, useState } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Button, Radio, DownloadOutlined } from 'asimov-react-components'
import { ExampleConfiguration } from '@/ui/components/ExampleConfiguration'
import { SizeType } from 'antd/es/config-provider/SizeContext'

export const SizeExample: FC = () => {
    const [size, setSize] = useState<SizeType>('large')
    return (
        <Example
            anchor="size"
            title="Size"
            description={<>
                <p>Ant Design supports a default button size as well as a large and small size.</p>
                <p>
                    If a large or small button is desired, set the <code>size</code> property to
                    either <code>large</code>
                    or <code>small</code> respectively. Omit the <code>size</code> property for a button with the
                    default size.
                </p>
            </>}
            sourceCode={`
import { Button, DownloadOutlined } from 'asimov-react-components'

const App = () => (
    <>
        <Button type="primary" size={size}>Primary</Button>
        
        <Button size={size}>Default</Button>
        
        <Button type="dashed" size={size}>Dashed</Button>
        
        <Button type="link" size={size}>Link</Button>
        
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
        
        <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
    </>
)
        `.trim()}
        >
            <ExampleConfiguration>
                <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
            </ExampleConfiguration>
            <ExampleItem>
                <Button type="primary" size={size}>Primary</Button>
            </ExampleItem>
            <ExampleItem>
                <Button size={size}>Default</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="dashed" size={size}>Dashed</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="link" size={size}>Link</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" icon={<DownloadOutlined />} size={size} />
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
            </ExampleItem>
            <ExampleItem>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
            </ExampleItem>
        </Example>
    )
}
