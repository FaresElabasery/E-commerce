import * as z from 'zod'

export const otpValidationSchema = z.object({
    resetCode: z.string().nonempty("Reset code is required").min(6, "Invalid reset code"),
})