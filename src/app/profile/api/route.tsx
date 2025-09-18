import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  // const requestHeader = new Headers(request.headers);
  // console.log("requestHeader", requestHeader.get("Authorization"));

  const headerList = await headers();
  console.log("headerList", headerList.get("Authorization"));

  const cookie = request.cookies.get("theme");
  console.log("cookie", cookie);

  const cookieStore = await cookies();
  console.log("cookieStoreData", cookieStore.get("resultPerPage"));

  cookieStore.set("resultPerPage", "20");
  return new Response("<h1> Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
};
