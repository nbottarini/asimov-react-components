import React from 'react'
import { ComponentDoc } from '@/ui/components/ComponentDoc'
import { Toc } from '@/ui/components/Toc'
import { ButtonDescription } from '@/ui/screens/general/ButtonsPage/ButtonDescription'
import { TypeExample } from '@/ui/screens/general/ButtonsPage/examples/TypeExample'
import { IconExample } from '@/ui/screens/general/ButtonsPage/examples/IconExample'
import { SizeExample } from '@/ui/screens/general/ButtonsPage/examples/SizeExample'
import { LoadingExample } from '@/ui/screens/general/ButtonsPage/examples/LoadingExample'
import { GhostExample } from '@/ui/screens/general/ButtonsPage/examples/GhostExample'
import { DisabledExample } from '@/ui/screens/general/ButtonsPage/examples/DisabledExample'
import { DangerExample } from '@/ui/screens/general/ButtonsPage/examples/DangerExample'
import { BlockExample } from '@/ui/screens/general/ButtonsPage/examples/BlockExample'
import { MultipleExample } from '@/ui/screens/general/ButtonsPage/examples/MultipleExample'
import { ButtonApi } from '@/ui/screens/general/ButtonsPage/ButtonApi'

export const ButtonsPage = () => (
    <ComponentDoc name="Buttons">
        <Toc>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#description">Description</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#type">Type</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#icon">Icon</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#size">Size</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#loading">Loading</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#ghost">Ghost</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#disabled">Disabled</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#danger">Danger</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#block">Block</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#multiple">Multiple</a></li>
            <li><a href="@/ui/screens/general/ButtonsPage/ButtonsPage#api">API</a></li>
        </Toc>
        <ButtonDescription />
        <TypeExample />
        <IconExample />
        <SizeExample />
        <LoadingExample />
        <GhostExample />
        <DisabledExample />
        <DangerExample />
        <BlockExample />
        <MultipleExample />
        <ButtonApi />
    </ComponentDoc>
)
