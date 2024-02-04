import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

const CartItem = () => {
    return (
        <div className='flex items-center gap-5 rounded-md border p-3 shadow-md'>
            <div className='relative h-[105px] w-[108px]'>
                <Image
                    src='/furniture/image-3.png'
                    alt='furniture 1'
                    fill
                    className='rounded-md object-fill'
                    sizes='105px'
                />
            </div>

            <div className='flex-1 space-y-2'>
                <h5 className='text-lg font-normal text-primary'>
                    Asgaard sofa
                </h5>
                <div className='flex items-center gap-2'>
                    <span>1</span>
                    <span>
                        <X className='w-4' />
                    </span>
                    <span>Rs. 250,000.00</span>
                </div>
            </div>

            <Button variant='ghost' size='icon'>
                <X className='w-5' />
            </Button>
        </div>
    )
}

export default CartItem
