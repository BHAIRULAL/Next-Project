const ComplexDashboardLayout = ({
  children,
  user,
  notifications,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  notifications: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      {user}
      {notifications}
    </>
  );
};

export default ComplexDashboardLayout;
