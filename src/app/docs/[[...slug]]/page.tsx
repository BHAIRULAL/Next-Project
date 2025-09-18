const Doc = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  if (slug?.length == 2) {
    return (
      <>
        Doc page : {slug[0]} and {slug[1]}
      </>
    );
  } else if (slug?.length == 1) {
    <>Doc page : {slug[0]} </>;
  }

  return <>Doc page</>;
};

export default Doc;
