import { BadgeCheck, HelpingHand, Trophy, Truck } from 'lucide-react'

const Support = () => {
    return (
        <div className='bg-[#FAF3EA] py-[20px] lg:py-[40px]'>
            <div className='container'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                    <div className='flex items-center gap-1 p-2'>
                        <Trophy className='h-[60px] w-[60px] flex-shrink-0' />
                        <div>
                            <h5 className='text-xl font-semibold text-[#242424] lg:text-2xl'>
                                High Quality
                            </h5>
                            <span className='inline-block text-base text-[#898989] lg:text-xl'>
                                crafted from top materials
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-1 p-2'>
                        <BadgeCheck className='h-[60px] w-[60px] flex-shrink-0' />
                        <div>
                            <h5 className='text-xl font-semibold text-[#242424] lg:text-2xl'>
                                Warranty Protection
                            </h5>
                            <span className='inline-block text-base text-[#898989] lg:text-xl'>
                                Over 2 years
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-1 p-2'>
                        <Truck className='h-[60px] w-[60px] flex-shrink-0' />
                        <div>
                            <h5 className='text-xl font-semibold text-[#242424] lg:text-2xl'>
                                Free Shipping
                            </h5>
                            <span className='inline-block text-base text-[#898989] lg:text-xl'>
                                Order over 150 $
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-1 p-2'>
                        <HelpingHand className='h-[60px] w-[60px] flex-shrink-0' />
                        <div>
                            <h5 className='text-xl font-semibold text-[#242424] lg:text-2xl'>
                                24/7 Support
                            </h5>
                            <span className='inline-block text-base text-[#898989] lg:text-xl'>
                                Decdicated support
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
