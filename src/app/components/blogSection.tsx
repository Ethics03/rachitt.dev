import Link from "next/link";
import getPostMetaData from "./getPostMetadata";

const posts = getPostMetaData()
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2);

export default function BlogSection() {
  return (
    <div className="mb-12">
      <h2 className="font-bold mb-6 text-2xl">$ blog</h2>
      <div className="space-y-6 mb-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group cursor-pointer">
           
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
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
        <div className="text-base text-orange-500 hover:translate-x-1 transition-all cursor-pointer">
          view all posts →
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
