import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Enter your username',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: '1',
                    name: 'Riad',
                    email: 'shariarhossainriad@gmail.com',
                    password: 'riadriad',
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
}
