import Logo from '@/components/Logo'
import SigninForm from '@/components/form/SigninForm'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
    return (
        <section className='flex min-h-screen w-full'>
            <div className='flex w-full flex-wrap justify-between'>
                <div
                    className='flex flex-1 shrink-0 items-center justify-center bg-green-200'
                    style={{
                        backgroundImage: 'url("/auth_banner.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className='flex w-full max-w-lg flex-col items-center justify-center space-y-5 rounded-md bg-black/25 p-10 text-center shadow-md backdrop-blur-lg'>
                        <Logo className='flex items-center justify-center' />
                        <p className='text-xl leading-relaxed tracking-wide text-white'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Distinctio totam reiciendis labore
                            perspiciatis quam velit.
                        </p>
                        <Link className={buttonVariants({})} href='/'>
                            Back to Home
                        </Link>
                    </div>
                </div>
                <div className='flex w-full max-w-3xl shrink-0 items-center justify-center bg-red-50 p-10'>
                    <div className='rounded-md border bg-white p-5 shadow'>
                        <h2 className='mb-2 text-3xl font-bold text-gray-700'>
                            Sign In
                        </h2>
                        <h6 className='text-2xl text-gray-600'>Welcome back</h6>
                        <h6 className='text-xl text-gray-600'>
                            Want to login your admin account?
                            <Link
                                className={buttonVariants({ variant: 'link' })}
                                href='/admin'
                            >
                                Admin Login
                            </Link>
                        </h6>

                        <SigninForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
