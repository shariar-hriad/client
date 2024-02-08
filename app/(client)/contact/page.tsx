import ContactForm from '@/components/form/ContactForm'
import { PageHeader, Support } from '@/components/shared'
import { Clock, LocateIcon, PhoneCall } from 'lucide-react'

const page = () => {
    return (
        <>
            <PageHeader title='contact' />
            <section className='py-[30px] lg:py-[60px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10'>
                        <div className='space-y-3 lg:space-y-10'>
                            <div className='p-3'>
                                <div className='flex gap-3'>
                                    <LocateIcon className='h-8 w-8 text-black' />
                                    <div className='space-y-1'>
                                        <h5 className='text-xl font-semibold text-black'>
                                            Address
                                        </h5>
                                        <address className='text-base text-gray-700'>
                                            236 5th SE Avenue, New York NY10000,
                                            United States
                                        </address>
                                    </div>
                                </div>
                            </div>

                            <div className='p-3'>
                                <div className='flex gap-3'>
                                    <PhoneCall className='h-8 w-8 text-black' />
                                    <div className='space-y-1'>
                                        <h5 className='text-xl font-semibold text-black'>
                                            Phone
                                        </h5>
                                        <span className='text-base text-gray-700'>
                                            Mobile: +(57) 876-9888
                                        </span>
                                        <span className='text-base text-gray-700'>
                                            Mobile: +(57) 876-9888
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='p-3'>
                                <div className='flex gap-3'>
                                    <Clock className='h-8 w-8 text-black' />
                                    <div className='space-y-1'>
                                        <h5 className='text-xl font-semibold text-black'>
                                            Working Time
                                        </h5>
                                        <span className='text-base text-gray-700'>
                                            Monday-Friady: 9:00 - 22:00
                                        </span>
                                        <span className='text-base text-gray-700'>
                                            Saturday-Sunday: 9:00 - 21:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Support />
        </>
    )
}

export default page
