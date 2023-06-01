import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const getPostsFromDB = async () => {
  const posts = await prisma.post.findMany({});
  return posts;
};

const Home = async () => {
  const postsDB = await getPostsFromDB();
  return (
    <div className="w-[1000px] mx-auto pt-20">
      <Link
        href={"/create"}
        className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white"
      >
        Create
      </Link>

      {postsDB?.map((post: any, index: number) => (
        <div key={index}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
