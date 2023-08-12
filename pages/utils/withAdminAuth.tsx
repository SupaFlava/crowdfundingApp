import { useRouter } from "next/router";
import { useUser } from "../hooks/userUser";
import { useEffect } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

interface WithAdminAuthProps {
  children: React.ReactNode;
}

export async function withAdminAuth({ children }: WithAdminAuthProps) {
  const session = await getServerSession(authOptions);
  if (session?.user.role !== "ADMIN") {
    throw new Error("you need to be an admin");
  }
  return <div>the admin page</div>;
}
