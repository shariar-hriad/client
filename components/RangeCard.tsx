import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

type RangeCardProp = {
    title?: string
    image?: string
}

const RangeCard = ({ title, image }: RangeCardProp) => {
    return (
        <div className='border-none shadow-none p-0 overflow-hidden group cursor-pointer rounded-md'>
            <div className='p-0 overflow-hidden rounded-md'>
                <Image
                    src={`${image ? image : '/range-1.png'}`}
                    alt='living'
                    width={381}
                    height={480}
                    className='w-full group-hover:scale-110 group-hover:grayscale transition duration-300'
                />
            </div>
            <h3 className='text-center font-semibold text-2xl py-4'>
                {title || 'Give a Title'}
            </h3>
        </div>
    )
}

export default RangeCard
