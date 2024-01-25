import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { CheckoutFormSchema } from './CheckoutForm'

type CheckoutFormValues = z.infer<typeof CheckoutFormSchema>

type ShadInputProps = {
    name: keyof CheckoutFormValues
    label: string
}

const ShadInput: FC<ShadInputProps> = ({ name, label }) => {
    const form = useForm<z.infer<typeof CheckoutFormSchema>>()

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type='text'
                            {...field}
                            value={(field.value as string) || ''}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default ShadInput
