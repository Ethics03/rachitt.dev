import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/app/components/mdx-components";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import BackToBlogs from "@/app/components/backtoBlogs";

type PostFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
};

type Post = {
  frontmatter: PostFrontmatter;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "src/app/posts");

async function getPostBySlug(slug: string): Promise<Post | null> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (data.slug === slug) {
      return { frontmatter: data as PostFrontmatter, content };
    }
  }

  return null;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl w-full mx-auto px-4 md:px-8 py-8 md:py-16">
        <BackToBlogs />
        <article className="prose prose-invert max-w-none prose-pre:overflow-x-auto prose-pre:max-w-full prose-img:max-w-full prose-img:h-auto prose-code:break-words prose-p:break-words">
          <h1 className="break-words">{post.frontmatter.title}</h1>
          <p className="text-sm text-gray-400 mb-4">{post.frontmatter.date}</p>
          <MDXRemote source={post.content} components={components} />
        </article>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data } = matter(raw);
    return { slug: data.slug };
  });
}
