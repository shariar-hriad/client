import Image from 'next/image'

const ShareSetup = () => {
    return (
        <section className='py-[30px] lg:py-[50px]'>
            <div className='container'>
                <div className='space-y-2 p-3 text-center'>
                    <h4 className='text-xl font-semibold text-gray-600'>
                        Share your setup with
                    </h4>
                    <h2 className='text-4xl font-bold text-gray-800 lg:text-5xl'>
                        #FuniroFurniture
                    </h2>
                </div>
            </div>

            <div>
                <Image
                    src='/furniture-grid-image.png'
                    alt='furnitures'
                    width={1440}
                    height={721}
                    className='w-full'
                />
            </div>
        </section>
    )
}

export default ShareSetup
