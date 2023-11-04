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
        <Card className='border-none shadow-none p-0 overflow-hidden group cursor-pointer'>
            <CardHeader className='p-0 overflow-hidden'>
                <Image
                    src={`${image ? image : '/range-1.png'}`}
                    alt='living'
                    width={381}
                    height={480}
                    className='w-full group-hover:scale-110 transition duration-300'
                />
            </CardHeader>
            <CardTitle className='text-center font-semibold text-2xl py-4'>
                {title || 'Give a Title'}
            </CardTitle>
        </Card>
    )
}

export default RangeCard
