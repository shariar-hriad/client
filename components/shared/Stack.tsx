import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface StackProps {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
    spacing?: number | string
    children: ReactNode
    className?: string
}

const Stack: FC<StackProps> = ({
    direction = 'col',
    spacing = '1',
    children,
    className,
}) => {
    return (
        <div className={cn(`flex flex-${direction} gap-${spacing}`, className)}>
            {children}
        </div>
    )
}

export default Stack
