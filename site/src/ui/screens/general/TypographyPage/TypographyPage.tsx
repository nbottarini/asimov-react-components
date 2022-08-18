import React, { FC } from 'react'
import { Toc } from '@/ui/components/Toc'
import { ComponentDoc } from '@/ui/components/ComponentDoc'
import { TypographyDescription } from '@/ui/screens/general/TypographyPage/TypographyDescription'
import { TypographyApi } from '@/ui/screens/general/TypographyPage/TypographyApi'
import { TitleExample } from '@/ui/screens/general/TypographyPage/examples/TitleExample'
import { TextExample } from '@/ui/screens/general/TypographyPage/examples/TextExample'
import { EditableExample } from '@/ui/screens/general/TypographyPage/examples/EditableExample'
import { CopyableExample } from '@/ui/screens/general/TypographyPage/examples/CopyableExample'
import { EllipsisExample } from '@/ui/screens/general/TypographyPage/examples/EllipsisExample'

export const TypographyPage: FC = () => (
    <ComponentDoc name="Typography">
        <Toc>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#description">Description</a></li>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#title">Title</a></li>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#text">Text</a></li>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#editable">Editable</a></li>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#copyable">Copyable</a></li>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#ellipsis">Ellipsis</a></li>
            <li><a href="@/ui/screens/general/TypographyPage/TypographyPage#api">API</a></li>
        </Toc>
        <TypographyDescription />
        <TitleExample />
        <TextExample />
        <EditableExample />
        <CopyableExample />
        <EllipsisExample />
        <TypographyApi />
    </ComponentDoc>
)
