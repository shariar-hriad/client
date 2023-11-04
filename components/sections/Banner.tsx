import { Button } from '../ui/button'

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
                    <div className='p-4 md:p-8 bg-[#FFF3E3] space-y-3 rounded-sm md:col-start-2'>
                        <h4 className='text-[#333333] text-base font-semibold'>
                            New Arrivals!
                        </h4>
                        <h1 className='font-bold text-4xl text-primary lg:text-6xl lg:leading-normal'>
                            Discover Our New Collection
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dolor nobis sapiente officia iste reiciendis
                            nisi.
                        </p>
                        <Button className='uppercase font-bold text-sm rounded-none h-[45px] lg:h-[60px]'>
                            buy now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
