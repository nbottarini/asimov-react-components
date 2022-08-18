import React, { FC, useState } from 'react'
import { Example, ExampleItem } from '@/ui/components/Example'
import { Radio, Typography, CheckOutlined, HighlightOutlined } from 'asimov-react-components'
import { ExampleConfiguration } from '@/ui/components/ExampleConfiguration'

const { Paragraph } = Typography

export const EditableExample: FC = () => {
    const [editable1, setEditable1] = useState('This is an editable text.')
    const [editable2, setEditable2] = useState('Custom Edit icon and replace tooltip text.')
    const [editable3, setEditable3] = useState('Text or icon as trigger - click to start editing.')
    const [chooseTrigger, setChooseTrigger] = useState<any>(['icon'])
    const [editable4, setEditable4] = useState('Editable text with a custom enter icon in edit field.')
    const [editable5, setEditable5] = useState('Editable text with no enter icon in edit field.')
    const [editable6, setEditable6] = useState('Hide Edit tooltip.')
    const [editable7, setEditable7] = useState('This is an editable text with limited length.')

    const radioToState = (input) => {
        switch (input) {
            case 'text':
                return ['text'];
            case 'both':
                return ['icon', 'text'];
            case 'icon':
            default:
                return ['icon'];
        }
    }

    const stateToRadio = () => {
        if (chooseTrigger.indexOf('text') !== -1) {
            return chooseTrigger.indexOf('icon') !== -1 ? 'both' : 'text';
        }
        return 'icon';
    }

    return (
        <Example
            anchor="editable"
            title="Editable"
            description={<>
                Converts texts into editable inline.
            </>}
            sourceCode={`
import { Radio, Typography, CheckOutlined, HighlightOutlined } from 'asimov-react-components'

const { Paragraph } = Typography

const App = () => {
    const [editable1, setEditable1] = useState('This is an editable text.');
    const [editable2, setEditable2] = useState('Custom Edit icon and replace tooltip text.');
    const [editable3, setEditable3] = useState('Text or icon as trigger - click to start editing.');
    const [editable4, setEditable4] = useState('Editable text with a custom enter icon in edit field.');
    const [editable5, setEditable5] = useState('Editable text with no enter icon in edit field.');
    const [editable6, setEditable6] = useState('Hide Edit tooltip.');
    const [editable7, setEditable7] = useState('This is an editable text with limited length.');
    
    return <>
        <Paragraph editable={{ onChange: setEditable1 }}>{editable1}</Paragraph>
        <Paragraph
            editable={{
                icon: <HighlightOutlined/>,
                tooltip: 'click to edit text',
                onChange: setEditable2,
            }}
        >
            {editable2}
        </Paragraph>
        <Paragraph
            editable={{
                tooltip: 'click to edit text',
                onChange: setEditable3,
                triggerType: chooseTrigger,
            }}
        >
            {editable3}
        </Paragraph>
        <Paragraph
            editable={{
                icon: <HighlightOutlined/>,
                tooltip: 'click to edit text',
                onChange: setEditable4,
                enterIcon: <CheckOutlined/>,
            }}
        >
            {editable4}
        </Paragraph>
        <Paragraph
            editable={{
                icon: <HighlightOutlined/>,
                tooltip: 'click to edit text',
                onChange: setEditable5,
                enterIcon: null,
            }}
        >
            {editable5}
        </Paragraph>
        <Paragraph editable={{ tooltip: false, onChange: setEditable6 }}>
            {editable6}
        </Paragraph>
        <Paragraph
            editable={{
                onChange: setEditable7,
                maxLength: 50,
                autoSize: { maxRows: 5, minRows: 3 },
            }}
        >
            {editable7}
        </Paragraph>
        <Typography.Title editable level={1} style={{ margin: 0 }}>h1. Title 1</Typography.Title>
        <Typography.Title editable level={2} style={{ margin: 0 }}>h2. Title 2</Typography.Title>
        <Typography.Title editable level={3} style={{ margin: 0 }}>h3. Title 3</Typography.Title>
        <Typography.Title editable level={4} style={{ margin: 0 }}>h4. Title 4</Typography.Title>
        <Typography.Title editable level={5} style={{ margin: 0 }}>h5. Title 5</Typography.Title>
    </>
}
    `.trim()}
        >
            <ExampleItem>
                <Paragraph editable={{ onChange: setEditable1 }}>{editable1}</Paragraph>
            </ExampleItem>
            <ExampleItem>
                <Paragraph
                    editable={{
                        icon: <HighlightOutlined/>,
                        tooltip: 'click to edit text',
                        onChange: setEditable2,
                    }}
                >
                    {editable2}
                </Paragraph>
            </ExampleItem>
            <ExampleConfiguration>
                <div style={{ marginBottom: 10 }}><strong>Trigger edit with:</strong></div>
                <Radio.Group value={stateToRadio()} onChange={e => setChooseTrigger(radioToState(e.target.value))}>
                    <Radio value="icon">icon</Radio>
                    <Radio value="text">text</Radio>
                    <Radio value="both">both</Radio>
                </Radio.Group>
                <Paragraph
                    style={{ marginTop: 20 }}
                    editable={{
                        tooltip: 'click to edit text',
                        onChange: setEditable3,
                        triggerType: chooseTrigger,
                    }}
                >
                    {editable3}
                </Paragraph>
            </ExampleConfiguration>
            <ExampleItem>
                <Paragraph
                    editable={{
                        icon: <HighlightOutlined/>,
                        tooltip: 'click to edit text',
                        onChange: setEditable4,
                        enterIcon: <CheckOutlined/>,
                    }}
                >
                    {editable4}
                </Paragraph>
            </ExampleItem>
            <ExampleItem>
                <Paragraph
                    editable={{
                        icon: <HighlightOutlined/>,
                        tooltip: 'click to edit text',
                        onChange: setEditable5,
                        enterIcon: null,
                    }}
                >
                    {editable5}
                </Paragraph>
            </ExampleItem>
            <ExampleItem>
                <Paragraph editable={{ tooltip: false, onChange: setEditable6 }}>
                    {editable6}
                </Paragraph>
            </ExampleItem>
            <ExampleItem>
                <Paragraph
                    editable={{
                        onChange: setEditable7,
                        maxLength: 50,
                        autoSize: { maxRows: 5, minRows: 3 },
                    }}
                >
                    {editable7}
                </Paragraph>
            </ExampleItem>
            <ExampleItem>
                <Typography.Title editable level={1} style={{ margin: 0 }}>h1. Title 1</Typography.Title>
            </ExampleItem>
            <ExampleItem>
                <Typography.Title editable level={2} style={{ margin: 0 }}>h2. Title 2</Typography.Title>
            </ExampleItem>
            <ExampleItem>
                <Typography.Title editable level={3} style={{ margin: 0 }}>h3. Title 3</Typography.Title>
            </ExampleItem>
            <ExampleItem>
                <Typography.Title editable level={4} style={{ margin: 0 }}>h4. Title 4</Typography.Title>
            </ExampleItem>
            <ExampleItem>
                <Typography.Title editable level={5} style={{ margin: 0 }}>h5. Title 5</Typography.Title>
            </ExampleItem>
        </Example>
    )
}
