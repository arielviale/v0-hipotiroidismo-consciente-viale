import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies()

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    // Return a dummy client or handle gracefully. Since return type is expected to be a client,
    // we might need to throw a specific error or return a mock that throws on usage.
    // However, throwing here will crash server components.
    // A better approach for v0 preview is to allow it to fail later or return a mock if possible,
    // but createServerClient requires valid URL.
    // We will assume the user fixes the env vars, but this check prevents the initial crash if possible.
    // Actually, we can't return a valid client without URL.
    // We'll stick with the instruction to the user, but wrapping this call is tricky without breaking types.
    // We will just let it throw but with a clearer message if we could, but createServerClient validates input.
    // Since I can't change the return signature easily to `Client | null`, I'll leave this file
    // to throw (which is correct behavior for server actions needing auth),
    // but the middleware fix above prevents the GLOBAL crash on every page load.
  }

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
