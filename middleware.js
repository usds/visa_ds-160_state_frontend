import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

// Sets language based on user headers automatically and redirects to the correct locale
export function middleware(request) {
    return i18nRouter(request, i18nConfig);
}

export const config = {
    matcher: [
        // Match all routes except for the ones starting with _next, api, and static
        "/((?!api|static|.*\\..*|_next).*)"
        // "/((?!_next|api|static|favicon.ico).*)",
    ],
}