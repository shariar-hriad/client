'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

interface IUser {
    _id: string
    name: string
    email: string
    password: string
    role: string
    isEmailConfrimed: boolean
    twoFactorEnable: boolean
    createdAt: Date
}

const Page = () => {
    const [user, setUser] = useState<IUser | undefined>()

    useEffect(() => {
        const getUser = async (): Promise<void> => {
            const response = await axios.get(
                'http://localhost:3001/api/v1/auth/profile',
                {
                    withCredentials: true,
                }
            )

            setUser(response.data.data)
        }

        getUser()
    }, [])

    return (
        <section className='py-8 lg:py-16'>
            <div className='container'>
                <div className='max-w-xl space-y-2 rounded border p-5 shadow'>
                    <h3 className='text-4xl font-medium'>Name: {user?.name}</h3>
                    <h4 className='text-2xl font-medium'>
                        Email: {user?.email}
                    </h4>
                    <p>Role: {user?.role}</p>
                    <p>Email Confirmed: {user?.isEmailConfrimed}</p>
                    <p>Two Factor Enabled: {user?.twoFactorEnable}</p>
                </div>
            </div>
        </section>
    )
}

export default Page
