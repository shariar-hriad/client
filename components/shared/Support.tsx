import { BadgeCheck, HelpingHand, Trophy, Truck } from 'lucide-react'
import React from 'react'

const Support = () => {
    return (
        <div className='bg-[#FAF3EA] py-[20px] lg:py-[40px]'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <div className='p-2 flex gap-1 items-center'>
                        <Trophy className='flex-shrink-0 w-[60px] h-[60px]' />
                        <div>
                            <h5 className='font-semibold text-xl lg:text-2xl'>
                                High Quality
                            </h5>
                            <span className='inline-block text-gray-700 text-base lg:text-xl'>
                                crafted from top materials
                            </span>
                        </div>
                    </div>

                    <div className='p-2 flex gap-1 items-center'>
                        <BadgeCheck className='flex-shrink-0 w-[60px] h-[60px]' />
                        <div>
                            <h5 className='font-semibold text-xl lg:text-2xl '>
                                Warranty Protection
                            </h5>
                            <span className='inline-block text-gray-700 text-base lg:text-xl'>
                                Over 2 years
                            </span>
                        </div>
                    </div>

                    <div className='p-2 flex gap-1 items-center'>
                        <Truck className='flex-shrink-0 w-[60px] h-[60px]' />
                        <div>
                            <h5 className='font-semibold text-xl lg:text-2xl '>
                                Free Shipping
                            </h5>
                            <span className='inline-block text-gray-700 text-base lg:text-xl'>
                                Order over 150 $
                            </span>
                        </div>
                    </div>

                    <div className='p-2 flex gap-1 items-center'>
                        <HelpingHand className='flex-shrink-0 w-[60px] h-[60px]' />
                        <div>
                            <h5 className='font-semibold text-xl lg:text-2xl'>
                                24/7 Support
                            </h5>
                            <span className='inline-block text-gray-700 text-base lg:text-xl'>
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
