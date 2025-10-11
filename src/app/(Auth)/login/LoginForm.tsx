'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleIcon from '@images/Icon-Google.svg'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '../../../_Components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../../_Components/ui/form'
import { Input } from '../../../_Components/ui/input'
import { schema } from './login.schema'
import { LoginFormType } from './login.types'


export default function LoginForm() {
    const RhfObj = useForm(
        {
            resolver: zodResolver(schema),
        }
    )
    const { control, handleSubmit } = RhfObj
    const LoginSubmit = async (values: LoginFormType) => {
        const res = await signIn('credentials', { ...values, redirect: false })
        if (res?.ok) {
            window.location.href = '/'
            toast.success('Login Successful')
        } else {
            toast.error(res?.error || 'Login Failed')
        }

    }
    return (
        <Form {...RhfObj}>
            <form onSubmit={handleSubmit(LoginSubmit)}>
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

                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='input-Auth' type='password' placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='action-btn mt-10'>
                    <Button disabled={!RhfObj.formState.isValid || RhfObj.formState.isSubmitting}  className='rounded-none w-full button-primary py-6' type='submit'>Login</Button>
                </div>
                <div className='Google-btn mt-4 text-center'>
                    <Button type='submit' className='w-100 text-text2 hover:bg-text2/2 border py-6 '><span className='mr-2 '>
                        <Image src={GoogleIcon} alt='Google Icon' />
                    </span>
                        Sign in with Google
                    </Button>
                    <p className='mt-8'>Dont have account? <Link href='/register' className='ml-2 font-medium text-text2/70 underline underline-offset-6 cursor-pointer'> Register</Link></p>
                </div>
            </form>
        </Form>
    )
}
