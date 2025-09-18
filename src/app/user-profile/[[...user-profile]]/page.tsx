import { UserProfile } from "@clerk/nextjs";
const UserProfilePage = () => {
  return (
    <div>
      <UserProfile path="/user-profile" />
    </div>
  );
};

export default UserProfilePage;
