import getPostMetadata from "../components/getPostMetadata";
import Link from "next/link";
import ScrambleText from "../components/ScrambleText";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <div className="flex items-center pt-10">
       <div className="max-w-5xl">
      <h1 className="text-3xl md:text-6xl font-bold mb-6">
        <ScrambleText text="$ blogs" />
      </h1>

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-3 border border-gray-700 hover:border-orange-500 transition-colors bg-black"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            {post.excerpt && <p className="text-gray-300">{post.excerpt}</p>}
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
