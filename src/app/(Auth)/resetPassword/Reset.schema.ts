import * as z from 'zod'

export const ResetPasswordSchema = z.object({
    newPassword: z.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'),
})