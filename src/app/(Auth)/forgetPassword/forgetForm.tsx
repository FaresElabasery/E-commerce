'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from '../../../_Components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../../_Components/ui/form'
import { Input } from '../../../_Components/ui/input'
import { schema } from './forget.schema'
import { ForgetFormType } from './forget.types'
import { handleForgetPassword } from './forget.action'
import { toast } from 'sonner'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function ForgetForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const RhfObj = useForm(
        {
            resolver: zodResolver(schema),
        }
    )
    const { control, handleSubmit } = RhfObj
    const ForgetSubmit = async (values: ForgetFormType) => {
        setLoading(true)
        const res = await handleForgetPassword(values)
        if (res.statusMsg === 'success') {
            toast.success(res.message)
            router.push('/otpValidation')
        }
        else {
            toast.error(res.message)
        }
        setLoading(false)
    }
    return (
        <Form {...RhfObj}>
            <form onSubmit={handleSubmit(ForgetSubmit)}>
                <div className='form-inputs flex flex-col gap-10 '>
                    <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='input-Auth' type='email' placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='action-btn mt-6'>
                    <Button disabled={!RhfObj.formState.isValid || RhfObj.formState.isSubmitting} className='rounded-none w-full button-primary py-6' type='submit'>
                        {loading ? 'Sending ...' : 'Send Reset Code'}
                    </Button>
                </div>
                <div className='mt-4 text-center'>
                    <p className='mt-8'>Dont have account? <Link href='/register' className='ml-2 font-medium text-text2/70 underline underline-offset-6 cursor-pointer'> Register</Link></p>
                </div>
            </form>
        </Form>
    )
}
