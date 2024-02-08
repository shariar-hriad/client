import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Minus, Plus } from 'lucide-react'

const QuantityInput = () => {
    return (
        <div className='flex w-full max-w-[150px] items-center gap-1 rounded-md border'>
            <Button className='flex-shrink-0' variant='ghost' size='icon'>
                <Minus className='h-5 w-5 text-primary' />
            </Button>
            <Input
                className='border-none text-center font-semibold'
                value={1}
            />
            <Button className='flex-shrink-0' variant='ghost' size='icon'>
                <Plus className='h-5 w-5 text-primary' />
            </Button>
        </div>
    )
}

export default QuantityInput
