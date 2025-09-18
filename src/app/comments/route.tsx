import { NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComment = query
    ? comments.filter((commnet) => commnet.text.includes(query))
    : comments;
  return Response.json(filteredComment);
};

export const POST = async (request: Request) => {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);
  return new Response(JSON.stringify(comments), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
};
