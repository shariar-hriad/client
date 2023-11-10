'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SigninFormSchema = z.object({
    username: z.string(),
    password: z.string(),
})

const SigninForm = () => {
    const form = useForm<z.infer<typeof SigninFormSchema>>({
        resolver: zodResolver(SigninFormSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const onSubmit = (values: z.infer<typeof SigninFormSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    type='text'
                                    placeholder='Enter your username'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    placeholder='Enter your password'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type='submit'>Sign In</Button>
            </form>
        </Form>
    )
}

export default SigninForm
