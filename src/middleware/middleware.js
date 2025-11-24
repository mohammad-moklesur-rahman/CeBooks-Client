import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/login", "/register", "/verify"],
});

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
