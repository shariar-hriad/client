import SignupForm from '@/components/form/SignupForm'

const page = () => {
    return (
        <section className='py-[40px] lg:py-[80px]'>
            <div className='container'>
                <div className='w-full max-w-xl mx-auto p-4 lg:p-8'>
                    <SignupForm />
                </div>
            </div>
        </section>
    )
}

export default page
