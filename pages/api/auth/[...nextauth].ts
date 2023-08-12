import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  // callbacks: {
  //   async session({ token, session }: { token: any; session: any }) {
  //     if (token) {
  //       session.user.id = token.id;
  //       session.user.name = token.name;
  //       session.user.email = token.email;
  //       session.user.image = token.picture;
  //       session.user.username = token.username;
  //     }
  //     return session;
  //   },
  // },
  // async jwt({ token, user }) {
  //   // const dbUser = await prisma.user.findFirst({
  //   //   where: {
  //   //     email: token.email,
  //   //   },
  //   // });

  //   // if (!dbUser) {
  //   //   token.id = user!.id;
  //   //   return token;
  //   // }

  //   // if (!dbUser.username) {
  //   //   await prisma.user.update({
  //   //     where: {
  //   //       id: dbUser.id,
  //   //     },
  //   //     data: {
  //   //       username: nanoid(10),
  //   //     },
  //   //   });
  //   // }

  //   return {
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     picture: user.image,
  //     username: user.username,
  //   };
  // },
};

export default NextAuth(authOptions);
// callbacks: {
//   async session({ token, session }: { token: any; session: any }) {
//     if (token) {
//       session.user.id = token.id;
//       session.user.name = token.name;
//       session.user.email = token.email;
//       session.user.role = token.role;
//     }
//     return session;
//   },

// async jwt({ token, user }: { token: any; user: any }) {
//   const dbUser = await prisma.user.findFirst({
//     where: {
//       email: token.email,
//     },
//   });
//   if (!dbUser) {
//     token.id = user!.id;
//     return token;
//   }
//   if (!dbUser.username) {
//     await prisma.user.update({
//       where: {
//         id: dbUser.id,
//       },
//       data: {
//         username: nanoid(10),
//       },
//     });
//   }
// },
//   },
// };
// secret: process.env.NEXTAUTH_SECRET,
// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//       allowDangerousEmailAccountLinking: true,
//     }),
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.role = token.role;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       const dbUser = await prisma.user.findFirst({
//         where: {
//           email: token.email,
//         },
//       });
//       if (!dbUser) {
//         token.id = user!.id;
//         return token;
//       }
//       if (!dbUser.username) {
//         await prisma.user.update({
//           where: {
//             id: dbUser.id,
//           },
//           data: {
//             username: nanoid(10),
//           },
//         });
//       }
//       return {
//         id: dbUser.id,
//         name: dbUser.name,
//         role: dbUser.role,
//         email: dbUser.email,
//         picture: dbUser.image,
//         username: dbUser.username,
//       };
//     },
//     redirect() {
//       return "/";
//     },
//   },
// };
// export const getAuthSession = () => getServerSession(authOptions);

// export default NextAuth({
//   providers: [
//     // OAuth authentication providers...

//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       callbackUrl: "http://localhost:3000/api/auth/callback/google",
//     }),
//   ],
//   adapter: PrsmaAdapter(prisma),
// });
