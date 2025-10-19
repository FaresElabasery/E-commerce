import forgetImage from '@images/password.jpg'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import OtpValidationForm from './OtpValidationForm'
const inter = Inter({
    weight: ['500'],
    subsets: ['latin']
})

export default function OtpValidation() {
    return (
        <div className='forgetPassword my-15 text-text2 '>
            <div className='flex items-center justify-center gap-x-15'>
                <div className="image-container hidden md:block md:w-2/3">
                    <Image className=" object-contain" alt='forget password image' src={forgetImage} />
                </div>
                <div className='w-100 md:w-1/3'>
                    <div className='form-title mb-12'>
                        <h1 className={`${inter.className} text-4xl`}>OTP Validation</h1>
                        <p className='mt-4 text-text1'>Enter your OTP to validate your account</p>
                    </div>
                    <OtpValidationForm />
                </div>
            </div>
        </div>
    )
}
