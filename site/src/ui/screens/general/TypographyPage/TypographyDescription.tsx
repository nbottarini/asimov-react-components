import React, { FC } from 'react'
import { Section } from '@/ui/components/Section'

export const TypographyDescription: FC = () => (
    <Section title="Description" anchor="description">
        <p>Basic text writing, including headings, body text, lists, and more.</p>
        <h3>When to use</h3>
        <ul>
            <li>When need to display a title or paragraph contents in Articles/Blogs/Notes.</li>
            <li>When you need copyable/editable/ellipsis texts.</li>
        </ul>
    </Section>
)
