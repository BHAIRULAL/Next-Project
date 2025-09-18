import { clerkClient } from "@clerk/nextjs/server";

const AdminPage = async () => {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  console.log("users", users);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Username</th>
            <th className="border p-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const username = user.username || user.firstName || "N/A";
            const email = user.emailAddresses[0]?.emailAddress || "N/A";

            return (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border p-2">{username}</td>
                <td className="border p-2">{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
