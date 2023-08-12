import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        Signed in as <img src={session.user.image} alt="" />
        <br />
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   return {
//     props: {
//       session,
//     },
//   };
// }
export default LoginButton;
