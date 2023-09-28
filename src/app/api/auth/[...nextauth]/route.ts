import { config } from "@/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(config);

export { handler as GET, handler as POST };
