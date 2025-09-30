import * as z from 'zod'

export const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'),
})