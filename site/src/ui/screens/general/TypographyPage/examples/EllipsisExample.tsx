import React, { FC, useState } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { EllipsisMiddle, Slider, Typography } from 'asimov-react-components'
import { ExampleConfiguration } from '@/ui/components/ExampleConfiguration'

const { Paragraph } = Typography

export const EllipsisExample: FC = () => {
    const [rows, setRows] = useState(1);
    const article = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.    
    `

    return (
        <Example
            anchor="ellipsis"
            title="Ellipsis"
            description={<>
                Multiple line ellipsis support. You can use <code>tooltip</code> to config ellipsis tooltip.
                Use <code>expandable</code> when have lots of content.
            </>}
            sourceCode={`
import Paragraph from 'antd/lib/typography/Paragraph'
import { Slider, Typography } from 'asimov-react-components'
import { EllipsisMiddle } from '@/ui/components/typography/EllipsisMiddle'
            
const App = () => (
    <>
        <Paragraph ellipsis={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Typography.Text
            style={{ width: 100 }}
            ellipsis={{ tooltip: 'I am ellipsis now!' }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et
        </Typography.Text>

        <EllipsisMiddle suffixCount={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </EllipsisMiddle>

        <Paragraph
            ellipsis={{
                rows,
                expandable: true,
                suffix: '--William Shakespeare',
            }}
            title={\`\${article}--William Shakespeare\`}
        >
            {article}
        </Paragraph>
    </>
)
        `.trim()}
        >
            <ExampleItem>
                <div><strong>Regular ellipsis</strong></div>
                <Paragraph ellipsis={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>
            </ExampleItem>

            <ExampleItem>
                <div><strong>Ellipsis with more</strong></div>
                <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>
            </ExampleItem>

            <ExampleItem>
                <div><strong>Ellipsis with tooltip</strong></div>
                <Typography.Text
                    style={{ width: 100 }}
                    ellipsis={{ tooltip: 'I am ellipsis now!' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                </Typography.Text>
            </ExampleItem>
            <ExampleItem>
                <div><strong>Ellipsis from middle</strong></div>
                <EllipsisMiddle suffixCount={12}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </EllipsisMiddle>
            </ExampleItem>
            <ExampleConfiguration>
                <div><strong>Ellipsis with given rows and suffix</strong></div>
                <Slider value={rows} min={1} max={10} onChange={setRows}/>
                <Paragraph
                    ellipsis={{
                        rows,
                        expandable: true,
                        suffix: '--William Shakespeare',
                    }}
                    title={`${article}--William Shakespeare`}
                >
                    {article}
                </Paragraph>
            </ExampleConfiguration>
        </Example>
    )
}
