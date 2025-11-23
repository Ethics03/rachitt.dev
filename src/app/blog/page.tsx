import getPostMetadata from "../components/getPostMetadata";
import Link from "next/link";
import ScrambleText from "../components/ScrambleText";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <div className="flex items-center pt-10 pb-12">
      <div className="w-full">
        <h1 className="text-5xl md:text-4xl font-bold mb-6">
          <ScrambleText text="$ blogs" />
        </h1>

        <div className="w-full flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-3 border border-white/30 hover:border-orange-500 transition-colors"
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
