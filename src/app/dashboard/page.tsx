import { auth, currentUser } from "@clerk/nextjs/server";
const Dashboard = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log("authObj", authObj);
  console.log("userObj", userObj);

  return <div>My Dashboard</div>;
};

export default Dashboard;
