import { Inter } from "next/font/google"
import PaymentForm from "./PaymentForm"

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
})
export default function Payment() {
    return (
        <div className="min-h-110  my-5 rounded-2xl py-10">
            <h1 className={`${inter.className} text-4xl text-text2`}>Billing Details</h1>
            <PaymentForm />
        </div >
    )
}
