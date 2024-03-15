const IS_SERVER: boolean = typeof window === "undefined";

export  function getURL(path: string): string {
  const baseURL: string = IS_SERVER
    ? process.env.NEXT_PUBLIC_BASE_URL!
    : window.location.origin;
  return new URL(path, baseURL).toString();
}

export  function getBaseURL(): string {
  return IS_SERVER
    ? process.env.NEXT_PUBLIC_BASE_URL!
    : window.location.origin;
  
}

export const BASE_PATH = getBaseURL()