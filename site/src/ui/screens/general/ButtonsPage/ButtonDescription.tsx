import React, { FC } from 'react'
import { Section } from '@/ui/components/Section'

export const ButtonDescription: FC = () => (
    <Section title="Description" anchor="description">
        <h3>When to use</h3>
        There are 5 types of buttons:
        <ul>
            <li><strong>Primary button:</strong> indicate the main action, one primary button at most in one
                section.
            </li>
            <li><strong>Default button:</strong> indicate a series of actions without priority.</li>
            <li><strong>Dashed button:</strong> used for adding action commonly.</li>
            <li><strong>Text button:</strong> used for the most secondary action.</li>
            <li><strong>Link button:</strong> used for external links.</li>
        </ul>
        And 4 other properties additionally:
        <ul>
            <li><code>danger:</code> used for actions of risk, like deletion or authorization.</li>
            <li><code>ghost:</code> used in situations with complex background, home pages usually.</li>
            <li><code>disabled:</code> when actions are not available.</li>
            <li><code>loading:</code> add loading spinner in button, avoiding multiple submits too.</li>
        </ul>
    </Section>
)
