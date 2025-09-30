'use client'
import GoogleIcon from '@images/Icon-Google.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from '../../../_Components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../../_Components/ui/form'
import { Input } from '../../../_Components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './register.schema'
import { RegisterFormType } from './register.types'
import { handleRegister } from './register.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


export default function RegisterForm() {
    const router = useRouter()

    const RhfObj = useForm(
        {
            resolver: zodResolver(schema),
        }
    )
    const { control, handleSubmit } = RhfObj
    const RegisterSubmit = async (values: RegisterFormType) => {
        const resOutput = await handleRegister(values)
        if (resOutput === true) {
            toast.success('User registered successfully')
            router.push('/')
        }
        else {
            toast.error(resOutput)
        }


    }
    return (
        <Form {...RhfObj}>
            <form onSubmit={handleSubmit(RegisterSubmit)}>
                <div className='form-inputs flex flex-col gap-10 '>
                    <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='input-Auth' placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='input-Auth' type='tel' placeholder="Phone Number" {...field} />
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
                    <FormField
                        control={control}
                        name="rePassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='input-Auth' type='password' placeholder="Confirm Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='action-btn mt-10'>
                    <Button className='rounded-none w-full button-primary py-6' type='submit'>Create Account </Button>
                </div>
                <div className='Google-btn mt-4 text-center'>
                    <Button type='submit' className='w-100 text-text2 hover:bg-text2/2 border py-6 '><span className='mr-2 '>
                        <Image src={GoogleIcon} alt='Google Icon' />
                    </span>
                        Sign up with Google
                    </Button>
                    <p className='mt-8'>Already have account? <Link href='/login' className='ml-2 font-medium text-text2/70 underline underline-offset-6 cursor-pointer'> Log in</Link></p>
                </div>
            </form>
        </Form>
    )
}
