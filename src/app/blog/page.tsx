import Link from "next/link";
import getPostMetadata from "../components/getPostMetadata";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <div className="flex items-center pt-10">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-accent">&gt;</span> blogs
        </h1>

        <div className="w-full flex flex-col">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group py-4 border-b border-white/10 last:border-b-0 hover:text-accent transition-colors"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="text-base md:text-lg leading-snug font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </p>
                <p className="text-sm leading-none text-gray-400 flex-shrink-0">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
