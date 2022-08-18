import React, { FC } from 'react'
import { Api } from '@/ui/components/Api'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const TypographyApi: FC = () => (
    <Api>
        <h3>Typography.Text</h3>
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>code</td>
                <td>Code style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>copyable</td>
                <td>Whether to be copyable, customize it via setting an object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#copyable">copyable</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>delete</td>
                <td>Deleted line style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>Disabled content</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>editable</td>
                <td>If editable. Can control edit state when is object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#editable">editable</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>ellipsis</td>
                <td>Display ellipsis when text overflows，can't configure expandable、rows and onExpand by using object
                </td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#ellipsis">Omit&lt;ellipsis, 'expandable' | 'rows' | 'onExpand'&gt;</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>keyboard</td>
                <td>Keyboard style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>mark</td>
                <td>Marked style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>onClick</td>
                <td>Set the handler to handle click event</td>
                <td>(event) =&gt; void</td>
                <td>-</td>
            </tr>
            <tr>
                <td>strong</td>
                <td>Bold style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>italic</td>
                <td>Italic style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>type</td>
                <td>Content type</td>
                <td><code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
                <td>-</td>
            </tr>
            <tr>
                <td>underline</td>
                <td>Underlined style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
        <h3>Typography.Title</h3>
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>code</td>
                <td>Code style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>copyable</td>
                <td>Whether to be copyable, customize it via setting an object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#copyable">copyable</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>delete</td>
                <td>Deleted line style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>Disabled content</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>editable</td>
                <td>If editable. Can control edit state when is object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#editable">editable</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>ellipsis</td>
                <td>Display ellipsis when text overflows, can configure rows and expandable by using object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#ellipsis">ellipsis</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>level</td>
                <td>Set content importance. Match
                    with <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code></td>
                <td>number: 1, 2, 3, 4, 5</td>
                <td>1</td>
            </tr>
            <tr>
                <td>mark</td>
                <td>Marked style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>onClick</td>
                <td>Set the handler to handle click event</td>
                <td>(event) =&gt; void</td>
                <td>-</td>
            </tr>
            <tr>
                <td>italic</td>
                <td>Italic style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>type</td>
                <td>Content type</td>
                <td><code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
                <td>-</td>
            </tr>
            <tr>
                <td>underline</td>
                <td>Underlined style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
        <h3>Typography.Paragraph</h3>
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>code</td>
                <td>Code style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>copyable</td>
                <td>Whether to be copyable, customize it via setting an object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#copyable">copyable</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>delete</td>
                <td>Deleted line style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>Disabled content</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>editable</td>
                <td>If editable. Can control edit state when is object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#editable">editable</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>ellipsis</td>
                <td>Display ellipsis when text overflows, can configure rows and expandable by using object</td>
                <td>boolean | <a href="@/ui/screens/general/TypographyPage/TypographyApi#ellipsis">ellipsis</a></td>
                <td>false</td>
            </tr>
            <tr>
                <td>mark</td>
                <td>Marked style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>onClick</td>
                <td>Set the handler to handle click event</td>
                <td>(event) =&gt; void</td>
                <td>-</td>
            </tr>
            <tr>
                <td>strong</td>
                <td>Bold style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>italic</td>
                <td>Italic style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>type</td>
                <td>Content type</td>
                <td><code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
                <td>-</td>
            </tr>
            <tr>
                <td>underline</td>
                <td>Underlined style</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
        <h3>copyable attr</h3>
        <SyntaxHighlighter language="typescript" style={dracula}>
            {`
{
    text: string,
    onCopy: function(event),
    icon: ReactNode,
    tooltips: false | [ReactNode, ReactNode],
    format: 'text/plain' | 'text/html',
}
            `}
        </SyntaxHighlighter>
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>format</td>
                <td>The Mime Type of the text</td>
                <td>'text/plain' | 'text/html'</td>
                <td>-</td>
            </tr>
            <tr>
                <td>icon</td>
                <td>Custom copy icon: [copyIcon, copiedIcon]</td>
                <td>[ReactNode, ReactNode]</td>
                <td>-</td>
            </tr>
            <tr>
                <td>text</td>
                <td>The text to copy</td>
                <td>string</td>
                <td>-</td>
            </tr>
            <tr>
                <td>tooltips</td>
                <td>Custom tooltip text, hide when it is false</td>
                <td>[ReactNode, ReactNode]</td>
                <td>[<code>Copy</code>, <code>Copied</code>]</td>
            </tr>
            <tr>
                <td>onCopy</td>
                <td>Called when copied text</td>
                <td>function</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
        <h3>editable attr</h3>
        <SyntaxHighlighter language="typescript" style={dracula}>
            {`
{
    icon: ReactNode,
    tooltip: boolean | ReactNode,
    editing: boolean,
    maxLength: number,
    autoSize: boolean | { minRows: number, maxRows: number },
    onStart: function,
    onChange: function(string),
    onCancel: function,
    onEnd: function,
    triggerType: ('icon' | 'text')[],
    enterIcon: ReactNode,
}
            `}
        </SyntaxHighlighter>
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>autoSize</td>
                <td><code>autoSize</code> attribute of textarea</td>
                <td>boolean | {'{minRows: number, maxRows: number}'}</td>
                <td>-</td>
            </tr>
            <tr>
                <td>editing</td>
                <td>Whether to be editable</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>icon</td>
                <td>Custom editable icon</td>
                <td>ReactNode</td>
                <td>&lt;EditOutlined /&gt;</td>
            </tr>
            <tr>
                <td>maxLength</td>
                <td><code>maxLength</code> attribute of textarea</td>
                <td>number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>tooltip</td>
                <td>Custom tooltip text, hide when it is false</td>
                <td>boolean | ReactNode</td>
                <td><code>Edit</code></td>
            </tr>
            <tr>
                <td>onStart</td>
                <td>Called when enter editable state</td>
                <td>function</td>
                <td>-</td>
            </tr>
            <tr>
                <td>onChange</td>
                <td>Called when input at textarea</td>
                <td>function(value: string)</td>
                <td>-</td>
            </tr>
            <tr>
                <td>onCancel</td>
                <td>Called when type ESC to exit editable state</td>
                <td>function</td>
                <td>-</td>
            </tr>
            <tr>
                <td>onEnd</td>
                <td>Called when type ENTER to exit editable state</td>
                <td>function</td>
                <td>-</td>
            </tr>
            <tr>
                <td>triggerType</td>
                <td>Edit mode trigger - icon, text or both (not specifying icon as trigger hides it)</td>
                <td>Array&lt;<code>icon</code>|<code>text</code>&gt;</td>
                <td>[<code>icon</code>]</td>
            </tr>
            <tr>
                <td>enterIcon</td>
                <td>Custom "enter" icon in the edit field (passing <code>null</code> removes the icon)</td>
                <td>ReactNode</td>
                <td><code>&lt;EnterOutlined /&gt;</code></td>
            </tr>
            </tbody>
        </table>

        <h3>ellipsis attr</h3>
        <SyntaxHighlighter language="typescript" style={dracula}>
            {`
{
    rows: number,
    expandable: boolean,
    suffix: string,
    symbol: ReactNode,
    tooltip: boolean | ReactNode | TooltipProps,
    onExpand: function(event),
    onEllipsis: function(ellipsis),
}
            `}
        </SyntaxHighlighter>
        <table>
            <thead>
            <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>expandable</td>
                <td>Whether to be expandable</td>
                <td>boolean</td>
                <td>-</td>
            </tr>
            <tr>
                <td>rows</td>
                <td>Max rows of content</td>
                <td>number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>suffix</td>
                <td>Suffix of ellipsis content</td>
                <td>string</td>
                <td>-</td>
            </tr>
            <tr>
                <td>symbol</td>
                <td>Custom description of ellipsis</td>
                <td>ReactNode</td>
                <td><code>Expand</code></td>
            </tr>
            <tr>
                <td>tooltip</td>
                <td>Show tooltip when ellipsis</td>
                <td>boolean | ReactNode | <a href="/404/asimov/react-components/site/src/ui/screens/general/TypographyPage/TypographyApi#API">TooltipProps</a></td>
                <td>-</td>
            </tr>
            <tr>
                <td>onEllipsis</td>
                <td>Called when enter or leave ellipsis state</td>
                <td>function(ellipsis)</td>
                <td>-</td>
            </tr>
            <tr>
                <td>onExpand</td>
                <td>Called when expand content</td>
                <td>function(event)</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
    </Api>
)
