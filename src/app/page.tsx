import Link from "next/link";
import Item from "./item";


const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="w-[1000px] mx-auto pt-20">
      <Link
        href={"/create"}
        className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white"
      >
        Create
      </Link>

    </div>
  );
};

export default Home;
