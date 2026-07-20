import { ArrowRight } from "lucide-react";
import Link from "next/link";
import getPostMetaData from "./getPostMetadata";

const posts = getPostMetaData()
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function BlogSection() {
  return (
    <div className="mb-12">
      <h2 className="font-bold mb-6 text-3xl">
        <span className="text-accent">&gt;</span> blog
      </h2>
      <div className="mb-4 flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border-b border-white/10 py-4 last:border-b-0"
          >
            <div className="cursor-pointer">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="text-base md:text-lg leading-snug font-semibold text-white/90 group-hover:text-accent transition-colors">
                  {post.title}
                </p>
                <span className="text-sm leading-none text-white/50 flex-shrink-0">
                  {formatDate(post.date)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/blog">
        <div className="flex items-center gap-2 text-base text-accent hover:translate-x-1 transition-all cursor-pointer">
          view all posts
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
}

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase();
}
