"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DEMO_ACCOUNTS } from "@/lib/demo-accounts";
import { loginAction } from "./actions";

export function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action={loginAction} className="mt-8 space-y-4">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Sign In
      </Button>

      <div className="mt-6 border-t border-border pt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Demo accounts
        </p>
        <div className="mt-3 space-y-2">
          {DEMO_ACCOUNTS.map((account) => (
            <button
              key={account.id}
              type="button"
              onClick={() => {
                setEmail(account.email);
                setPassword(account.password);
              }}
              className="flex w-full items-center justify-between rounded-sm border border-border px-3 py-2 text-left text-xs hover:border-primary"
            >
              <span>
                {account.name}{" "}
                <span className="text-muted-foreground">({account.role})</span>
              </span>
              <span className="text-primary">Use</span>
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
