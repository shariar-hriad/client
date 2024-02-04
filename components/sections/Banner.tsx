import { Button } from '@/components/ui/button'

const Banner = () => {
    return (
        <section
            className='py-[40px] lg:py-[80px]'
            style={{
                background: 'url("/banner.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-3 rounded-sm bg-[#FFF3E3] p-4 md:col-start-2 md:p-8'>
                        <h4 className='text-base font-semibold text-[#333333]'>
                            New Arrivals!
                        </h4>
                        <h1 className='text-4xl font-bold text-primary lg:text-6xl lg:leading-normal'>
                            Discover Our New Collection
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dolor nobis sapiente officia iste reiciendis
                            nisi.
                        </p>
                        <Button variant='outline' size='lg'>
                            Buy now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
