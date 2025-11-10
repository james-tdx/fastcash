import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId:process.env.AUTH_GOOGLE_ID,
    clientSecret:process.env.AUTH_GOOGLE_SECRET,
  }),
   GitHubProvider({
    clientId:process.env.AUTH_GITHUB_ID,
    clientSecret:process.env.AUTH_GITHUB_CLIENT_SECRET,
   }),
],
})