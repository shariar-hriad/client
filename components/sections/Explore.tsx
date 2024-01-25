import { Button } from '@/components/ui/button'

const Explore = () => {
    return (
        <section className='bg-[#FCF8F3] py-[30px]'>
            <div className='container'>
                <div className='grid grid-cols-1 items-center lg:grid-cols-3'>
                    <div className='space-y-4 p-2'>
                        <h2 className='text-3xl font-bold lg:text-5xl'>
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
