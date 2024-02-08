import { BadgeCheck, HelpingHand, Trophy, Truck } from 'lucide-react'

const Support = () => {
    return (
        <div className='bg-[#FAF3EA] py-[20px] lg:py-[40px]'>
            <div className='container'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                    <div className='flex gap-2 p-1'>
                        <Trophy className='h-[50px] w-[50px] flex-shrink-0' />
                        <div className='space-y-2'>
                            <h5 className='text-xl font-medium text-[#242424] lg:text-xl'>
                                High Quality
                            </h5>
                            <span className='block text-base text-[#898989]'>
                                crafted from top materials
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-2 p-1'>
                        <BadgeCheck className='h-[50px] w-[50px] flex-shrink-0' />
                        <div className='space-y-2'>
                            <h5 className='text-xl font-medium text-[#242424] lg:text-xl'>
                                Warranty Protection
                            </h5>
                            <span className='block text-base text-[#898989]'>
                                Over 2 years
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-2 p-1'>
                        <Truck className='h-[50px] w-[50px] flex-shrink-0' />
                        <div className='space-y-2'>
                            <h5 className='text-xl font-medium text-[#242424]'>
                                Free Shipping
                            </h5>
                            <span className='block text-base text-[#898989]'>
                                Order over 150 $
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-2 p-1'>
                        <HelpingHand className='h-[50px] w-[50px] flex-shrink-0' />
                        <div className='space-y-2'>
                            <h5 className='text-xl font-medium text-[#242424] lg:text-xl'>
                                24/7 Support
                            </h5>
                            <span className='inline-block text-base text-[#898989]'>
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
