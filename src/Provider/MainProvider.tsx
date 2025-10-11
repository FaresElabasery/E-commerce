'use client'
import { ThemeProvider } from "@/_Components/theme-provider"
import { store } from "@/redux/store"
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
export default function MainProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <Provider store={store}>
                    {children}
                </Provider>
            </ThemeProvider>
        </SessionProvider>
    )
}
