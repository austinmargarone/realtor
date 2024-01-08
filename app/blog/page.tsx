import { getPost } from "@/sanity/sanity-utils";

import console from "console";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 1;
type Props = {
  params: { post: string };
};
const page = async ({ params }: Props) => {
  const post = await getPost();
  console.log("author", post);

  return (
    <main>
      <h1>Posts</h1>
      {post.map((post) => (
        <div key={post.id}>
          <Post />
        </div>
      ))}
    </main>
  );
};

export default page;
