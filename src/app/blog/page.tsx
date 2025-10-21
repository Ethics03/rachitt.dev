import getPostMetadata from "../components/getPostMetadata";
import Link from "next/link";
import ScrambleText from "../components/ScrambleText";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <div className="h-full flex items-center flex-col justify-start px-4 py-16 pt-2">
      <h1 className="text-3xl font-bold mb-8">
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
  );
}
