import { withAuth } from "@workos-inc/authkit-nextjs";

const Page = async () => {
  const { user } = await withAuth({ ensureSignedIn: true });

  return (
    <>
      <p>
        Welcome back {user.firstName} - {user.email}
      </p>
    </>
  );
};

export default Page;
