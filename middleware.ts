import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/issues/new", "/issues/edit/:issueId+"],
};
