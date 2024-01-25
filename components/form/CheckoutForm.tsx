'use client'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Checkbox } from '../ui/checkbox'
import ShadInput from './ShadInput'

export const CheckoutFormSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    companyName: z.string(),
    region: z.string(),
    streetAddress: z.string(),
    city: z.string(),
    zipCode: z.string(),
    phone: z.string(),
    email: z.string().email(),
    additionalInformation: z.string(),
    cod: z.boolean(),
})

type CheckoutType = {}

const CheckoutForm: FC<CheckoutType> = () => {
    const form = useForm<z.infer<typeof CheckoutFormSchema>>({
        resolver: zodResolver(CheckoutFormSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            companyName: '',
            region: '',
            streetAddress: '',
            city: '',
            zipCode: '',
            phone: '',
            email: '',
            additionalInformation: '',
            cod: false,
        },
    })

    const onSubmit = async (values: z.infer<typeof CheckoutFormSchema>) => {
        console.log(values)
    }

    return (
        <div className='p-10'>
            <h2 className='mb-5 text-2xl font-semibold text-black lg:mb-10 lg:text-4xl'>
                Billing details
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='space-y-8 p-10'>
                            <div className='grid grid-cols-2 gap-5'>
                                <ShadInput
                                    name='firstname'
                                    label='First Name'
                                />
                                <ShadInput name='lastname' label='Last Name' />
                            </div>
                            <ShadInput
                                name='companyName'
                                label='Company Name'
                            />
                            <FormField
                                control={form.control}
                                name='region'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country / Region</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='Select your Country / Region' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value='bangladesh'>
                                                    Bangladesh
                                                </SelectItem>
                                                <SelectItem value='pakistan'>
                                                    Pakistan
                                                </SelectItem>
                                                <SelectItem value='saudi'>
                                                    Saudi
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <ShadInput
                                name='streetAddress'
                                label='Street address'
                            />
                            <ShadInput name='city' label='Town / City' />
                            <ShadInput name='zipCode' label='ZIP Code' />
                            <ShadInput name='phone' label='Phone' />
                            <ShadInput name='email' label='Email address' />
                            <FormField
                                control={form.control}
                                name='additionalInformation'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder='Additional information'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='p-14'>
                            <div className='space-y-5'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-2xl font-medium text-black'>
                                        Product
                                    </h4>
                                    <h4 className='text-2xl font-medium text-black'>
                                        Subtotal
                                    </h4>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h5 className='text-base text-gray-500'>
                                        Asgaard sofa{' '}
                                        <b className='text-black'> x 1</b>
                                    </h5>
                                    <span className='text-base font-thin text-black'>
                                        Rs. 200,000.00
                                    </span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h5 className='text-base text-black'>
                                        Subtotal
                                    </h5>
                                    <span className='text-base font-thin text-black'>
                                        Rs. 30,000.00
                                    </span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h5 className='text-base text-black'>
                                        Total
                                    </h5>
                                    <span className='text-2xl font-semibold text-primary'>
                                        Rs. 230,000.00
                                    </span>
                                </div>
                                <Separator />
                                <FormField
                                    control={form.control}
                                    name='cod'
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className='flex items-center gap-3'>
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={
                                                            field.onChange
                                                        }
                                                    />
                                                </FormControl>
                                                <FormLabel>
                                                    Cash On Delivery
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <p>
                                    Your personal data will be used to support
                                    your experience throughout this website, to
                                    manage access to your account, and for other
                                    purposes described in our 
                                    <b>&nbsp;privacy policy.</b>
                                </p>
                                <Button variant='outline' type='submit'>
                                    Place order
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default CheckoutForm
