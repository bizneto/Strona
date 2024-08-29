"use server";

import "server-only";
import { cookies } from "next/headers";

type TPage = "digital" | "finance";

export async function getClientID(page: TPage) {
  const storedCookie = cookies().get(`clientID-${page}`);
  return storedCookie ? storedCookie.value : null;
}

export async function setClientID(id: number, page: TPage) {
  cookies().set({
    name: `clientID-${page}`,
    value: id.toString(),
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
  });
}
