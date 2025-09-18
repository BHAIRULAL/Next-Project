"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useTheme } from "../components/theme-provider";

const Profile = () => {
  // const { userId, sessionId, isLoaded, isSignedIn } = useAuth();
  const { isSignedIn, isLoaded, user } = useUser();

  // console.log("user", user);

  const theme = useTheme();
  return <div style={{ color: theme.colors.primary }}>My Profile</div>;
};

export default Profile;
