import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user.model";
import {connectAloraDB} from "../../../utils/connectDB";
import bcrypt from "bcrypt";

export const authOptions = {

    session: {
        maxAge: 6*60*60,
        
        
      },
      
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req, res) {
                await connectAloraDB();

                try{
                    const user = await User.findOne({email: credentials.email});

                     if(user) {
                        const pwCorr = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if(pwCorr) {
                            return user;
                        }
                     }

                } catch(error) {
                    res.status(400).json({message: "Error login", error});
                }

            }
        })
    ],
    callbacks: {
        jwt({ token, user }) {
          if(user) token.role = user.role
          return token
        },
        session({ session, token }) {
          session.user.role = token.role
          return session
        }
      }
};

export default NextAuth(authOptions);