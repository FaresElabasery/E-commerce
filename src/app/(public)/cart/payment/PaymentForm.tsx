'use client'
import CheckoutCard from "@/_Components/shared/CheckoutCard/CheckoutCard"
import { Button } from "@/_Components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/_Components/ui/form"
import { Input } from "@/_Components/ui/input"
import { Label } from "@/_components/ui/label"
import { Separator } from "@/_Components/ui/separator"
import { IProduct } from "@/app/_interfaces/products"
import { getUserCart } from "@/app/_services/cart.services"
import { zodResolver } from "@hookform/resolvers/zod"
import Bank from '@images/banksLogo.png'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { CreateCashOrder, CreateOnlineOrder } from "./payment.actions"
import { paymentSchema } from "./payment.schema"
import { paymentTypes } from "./payment.types"
import { Inter } from "next/font/google"
import { updateCartCountAsync } from "@/redux/slices/CartSlice"
import { AppDispatch } from "@/redux/store"

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
})

export default function PaymentForm() {
    const [cartId, setCartId] = useState<string | null>(null)
    const [cartProducts, setCartProducts] = useState<IProduct[]>([])
    
    const [cartTotal, setCartTotal] = useState<number>(0)
    const [isCash, setIsCash] = useState(true)
    const route = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const RhfObj = useForm({
        resolver: zodResolver(paymentSchema)
    })
    const { control, handleSubmit } = RhfObj

    async function handleCashPayment(values: paymentTypes) {
        if (isCash) {
            const res = await CreateCashOrder(cartId!, values)
            if (res.status === 'success') {
                toast.success('Order Created Successfully')
                route.push('/allorders')
                console.log(values);
                dispatch(updateCartCountAsync())
            } else {
                console.log(res.message);
                toast.error('Failed to Create Order')
            }
        } else {
            const res = await CreateOnlineOrder(cartId!, values)
            if (res?.status === 'success') {
                sessionStorage.setItem('fromCheckout', 'true')
                window.location.href = res?.session?.url
                console.log(res);
            } else {
                console.log(res.message);
                toast.error('Failed to Create Order')
            }
        }
    }
    async function getUserCartInfo() {
        const res = await getUserCart()
        if (res.status === 'success') {
            setCartId(res.cartId)
            setCartProducts(res.data.products)
            setCartTotal(res.data.totalCartPrice)
        }
    }


    useEffect(() => {
        getUserCartInfo()
    }, [])


    return (
        <Form {...RhfObj}>
            <form onSubmit={handleSubmit(handleCashPayment)} className="flex flex-col sm:flex-row items-start justify-between">
                <div className="address md:w-2/5 flex flex-col gap-8 w-full text-text2/40 py-10">
                    <FormField control={control} name="phone" render={({ field }) => (
                        <FormItem>
                            <Label className={`${inter.className} mb-2 `}>Phone</Label>
                            <FormControl>
                                <Input {...field} type="text" className="w-full  text-text2  bg-secondary rounded-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={control} name='city' render={({ field }) => (
                        <FormItem>
                            <Label className={`${inter.className} mb-2 `}>City</Label>
                            <FormControl>
                                <Input {...field} type="text" className="w-full text-text2 bg-secondary rounded-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={control} name='details' render={({ field }) => (
                        <FormItem>
                            <Label className={`${inter.className} mb-2 `}>Address Details</Label>
                            <FormControl>
                                <Input {...field} type="text" className="w-full  text-text2  bg-secondary rounded-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                <div className="actions md:w-2/5 flex flex-col gap-6 w-full">
                    {cartProducts.map((item) => (
                        <CheckoutCard key={item._id} price={item.price} product={item.product} />
                    ))}
                    <Separator />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-secondary2">Total</p>
                        <p className="text-lg font-bold text-text2">${cartTotal} EGP</p>
                    </div>
                    <div className="payment method flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Input type="radio" onClick={() => setIsCash(false)} name="payment-method" className="size-6 appearance-none checked:bg-secondary2 dark:checked:bg-secondary2 p-1 border-2 flex-center checked:border-white checked:outline-2 checked:shadow rounded-full" id="bank" />
                                <Label className={`${inter.className} text-text2`} htmlFor="bank">Bank</Label>
                            </div>
                            <Image src={Bank} alt="banks logo" height={20} />
                        </div>
                        <div className="flex items-center gap-2">
                            <Input defaultChecked type="radio" onClick={() => setIsCash(true)} name="payment-method" className="size-6 appearance-none checked:bg-secondary2 dark:checked:bg-secondary2 p-1 border-2 flex-center checked:border-white checked:outline-2 checked:shadow rounded-full" id="cash" />
                            <Label className={`${inter.className} text-text2`} htmlFor="cash">Cash On Delivery</Label>
                        </div>
                        <Button type="submit" className="button-primary mt-4">Place Order</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
