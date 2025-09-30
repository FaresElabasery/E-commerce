import * as z from 'zod'

export const schema = z.object({
    name: z.string().nonempty("Name is required").min(3, "Name at least 3 character"),
    email: z.string().email("Invalid email address"),
    phone: z.string().nonempty('Phone number is required').regex(/^01[0125][0-9]{8}$/, 'Phone number must egyption number'),
    password: z.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'),
    rePassword: z.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character')
}).refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
});