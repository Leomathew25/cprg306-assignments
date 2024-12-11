"use client";
import { useUserAuth } from "../_utils/auth-context";
function Page() {
  const { user } = useUserAuth();
  if (!user) {
    return <div>Not authorized</div>;
  }
  return (
    <div>
      <h1>This is a secure page</h1>
      <p>Welcome, {user.displayName}</p>
    </div>
  );
}

export default Page;