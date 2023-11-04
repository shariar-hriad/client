import { Button } from '../ui/button'

const Explore = () => {
    return (
        <section className='py-[30px] bg-[#FCF8F3]'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-3 items-center'>
                    <div className='p-2 space-y-4'>
                        <h2 className='text-3xl lg:text-5xl font-bold'>
                            50+ Beautiful rooms inspiration
                        </h2>
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod delectus rerum quae sequi tempore
                            voluptatum quidem.
                        </p>
                        <Button className='rounded-none'>Explore More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore
