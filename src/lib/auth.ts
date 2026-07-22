import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Resend from "next-auth/providers/resend";

/**
 * Config skeleton only (Milestone 1). No Prisma adapter, no bcrypt check,
 * no role/session callbacks yet — those depend on the `User` model that
 * lands in Milestone 2, and are wired up in Milestone 3 along with MFA
 * for attorney/staff/admin roles.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async () => {
        // TODO(M3): look up User by email, verify bcrypt hash, enforce MFA.
        return null;
      },
    }),
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
