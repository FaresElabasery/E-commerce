import { nextAuthConfig } from "@/next-auth/nextAuth.config";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthConfig);
