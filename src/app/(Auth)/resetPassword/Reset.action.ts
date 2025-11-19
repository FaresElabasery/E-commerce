'use server'

import { ResetPasswordFormType } from "./Reset.types";

export const handleResetPassword = async (values: ResetPasswordFormType) => {
    try {
        console.log(values);
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
            {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const finalRes = await response.json()
        return finalRes
    } catch (error) {
        console.log(error);
    }

}