import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FC } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

type CustomInputType = {
    form: UseFormReturn
    name: keyof FieldValues
    label?: string
    type?: 'text' | 'number' | 'email'
    placeholder?: string
}

const CustomInput: FC<CustomInputType> = ({
    form,
    name,
    label,
    type = 'text',
    placeholder,
}) => {
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

export default CustomInput
