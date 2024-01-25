import Image from 'next/image'

type RangeCardProp = {
    title?: string
    image?: string
}

const RangeCard = ({ title, image }: RangeCardProp) => {
    return (
        <div className='group cursor-pointer overflow-hidden rounded-md border-none p-0 shadow-none'>
            <div className='overflow-hidden rounded-md p-0'>
                <Image
                    src={`${image ? image : '/range-1.png'}`}
                    alt='living'
                    width={381}
                    height={480}
                    className='w-full transition duration-300 group-hover:scale-110 group-hover:grayscale'
                />
            </div>
            <h3 className='py-4 text-center text-2xl font-semibold text-[#333333]'>
                {title || 'Give a Title'}
            </h3>
        </div>
    )
}

export default RangeCard
