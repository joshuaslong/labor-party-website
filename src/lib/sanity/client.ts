import { createClient } from "next-sanity";
import { sanityConfig } from "./config";

const rawClient = createClient({
  ...sanityConfig,
  stega: { enabled: false },
});

export const client = {
  fetch: async <T = unknown>(
    query: string,
    params?: Record<string, unknown>,
    options?: Record<string, unknown>
  ): Promise<T> => {
    try {
      return await rawClient.fetch<T>(query, params ?? {}, options);
    } catch {
      return [] as unknown as T;
    }
  },
};
