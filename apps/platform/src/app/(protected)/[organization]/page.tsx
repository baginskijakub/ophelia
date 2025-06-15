import { signOut, withAuth } from "@workos-inc/authkit-nextjs";

const Page = async () => {
  const { user } = await withAuth({ ensureSignedIn: true });

  return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <p>
          Welcome back {user.firstName} - {user.email}
        </p>
        <button type="submit">Sign out</button>
      </form>
    </>
  );
};

export default Page;
