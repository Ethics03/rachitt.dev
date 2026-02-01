import getPostMetadata from "../components/getPostMetadata";
import Link from "next/link";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <div className="flex items-center pt-10">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-accent">&gt;</span> blogs
        </h1>

        <div className="w-full flex flex-col gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group hover:text-accent transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h2 className="text-xs md:text-lg font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 flex-shrink-0">
                  {post.date}
                </p>
              </div>
              {post.excerpt && (
                <p className="text-sm text-gray-400">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
