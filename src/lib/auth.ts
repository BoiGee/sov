import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";

/**
 * Demo login only (ahead of Milestone 2/3). `authorize` checks against the
 * hardcoded, non-persisted accounts in `src/lib/demo-accounts.ts` — hashed
 * with bcrypt here so the code path already matches what a real Prisma
 * lookup will look like. There is no Prisma adapter, no password reset, no
 * MFA, and no rate limiting on this endpoint yet; all of that lands in
 * Milestone 3 alongside the real `User` model.
 */
const DEMO_USERS = DEMO_ACCOUNTS.map((account) => ({
  ...account,
  passwordHash: bcrypt.hashSync(account.password, 10),
}));

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const user = DEMO_USERS.find((u) => u.email === parsed.data.email);
        if (!user) return null;

        const valid = bcrypt.compareSync(parsed.data.password, user.passwordHash);
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
    // Resend magic-link provider is disabled for now: Auth.js requires a
    // database adapter for any "email" provider (to persist verification
    // tokens), and validates that at config-load time for *every* auth
    // request — so leaving it enabled without an adapter breaks Credentials
    // sign-in too, not just magic links. Re-enable once the Prisma adapter
    // exists (Milestone 2/3):
    //
    // Resend({
    //   apiKey: process.env.RESEND_API_KEY,
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
