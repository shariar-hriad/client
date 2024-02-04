'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { UseFormReturn, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const ContactFormSchema = z.object({
    name: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string(),
})

const ContactForm: FC = () => {
    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                <TextInputField
                    form={form}
                    label='Name'
                    name='name'
                    placeholder='Your name...'
                />
                <TextInputField
                    form={form}
                    type='email'
                    label='Email'
                    name='email'
                    placeholder='Your email...'
                />
                <TextInputField
                    form={form}
                    label='Subject'
                    name='subject'
                    placeholder='Subject'
                />
                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Description'
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit'>Send</Button>
            </form>
        </Form>
    )
}

export default ContactForm

const TextInputField: FC<{
    form: UseFormReturn<z.infer<typeof ContactFormSchema>>
    name: keyof z.infer<typeof ContactFormSchema>
    type?: 'text' | 'number' | 'password' | 'email'
    label?: string
    placeholder?: string
}> = ({ form, name, type = 'text', label, placeholder }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}

                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
