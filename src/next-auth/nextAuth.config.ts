import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { jwtDecode } from 'jwt-decode'

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'Exclusive',
            authorize: async (credentials) => {
                try {
                    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    })
                    const finalResult = await res.json()
                    console.log(finalResult)
                    if (finalResult.message === 'success') {
                        const decodedObject = jwtDecode(finalResult.token) as { id: string }
                        return {
                            id: decodedObject.id,
                            email: finalResult.user.email,
                            name: finalResult.user.name,
                            credentialToken: finalResult.token,
                        }
                    } else {
                        return null
                    }
                } catch (error) {
                    console.log(error);
                    return null
                }
            },
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
            },
        }

        )
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        jwt(params) {
            if (params.user) {
                params.token.credentialToken = params.user.credentialToken
                params.token.id = params.user.id
            }
            return params.token
        },
        session(params) {
            if (params.session.user) {
                params.session.user.id = params.token.id
            }
            return params.session
        },
    }
}