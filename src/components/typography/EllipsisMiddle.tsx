import { Typography } from 'antd'
import { FC } from 'react'

export const EllipsisMiddle: FC<Props> = ({ suffixCount, children }) => {
    const start = children.slice(0, children.length - suffixCount).trim()
    const suffix = children.slice(-suffixCount).trim()
    return (
        <Typography.Text style={{ maxWidth: '100%' }} ellipsis={{ suffix }}>
            {start}
        </Typography.Text>
    )
}

interface Props {
    suffixCount: number
    children: string
}
