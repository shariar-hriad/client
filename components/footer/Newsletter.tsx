'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'

const NewsLetterSchema = z.object({
    email: z.string().email(),
})

const Newsletter = () => {
    const form = useForm<z.infer<typeof NewsLetterSchema>>({
        resolver: zodResolver(NewsLetterSchema),
        defaultValues: {
            email: '',
        },
    })

    const onSubmit = (values: z.infer<typeof NewsLetterSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex items-center gap-1'
            >
                <FormField
                    name='email'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className='flex-1'>
                            <FormControl>
                                <Input
                                    type='email'
                                    placeholder='Subscribe to Newsletter'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button variant='outline' type='submit'>
                    Subscribe
                </Button>
            </form>
        </Form>
    )
}

export default Newsletter
