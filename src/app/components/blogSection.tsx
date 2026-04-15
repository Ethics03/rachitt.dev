import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <div className="space-y-6 mb-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group cursor-pointer">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-md font-semibold text-white/90 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-white/50 ml-4 flex-shrink-0">
                  {formatDate(post.date)}
                </span>
              </div>

              {post.excerpt && (
                <p className="text-base text-white/50 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
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
